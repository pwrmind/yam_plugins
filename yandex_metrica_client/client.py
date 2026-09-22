"""
HTTP client for Yandex Metrica API.

Implements offline conversion upload via the official API:
    POST /management/v1/counter/{counterId}/offline_conversions/upload

Uses httpx for async HTTP. A synchronous wrapper is provided at the bottom.

Docs:
    https://yandex.ru/dev/metrika/ru/management/offline-conv
"""
from __future__ import annotations

import asyncio
import csv
import io
from typing import Any, List, Optional

import httpx

from .models import (
    APIError,
    BaseClient,
    BaseLogger,
    ClientConfig,
    EcommerceEvent,
    OfflineConversion,
    SendResult,
    TargetEvent,
    TrackingEvent,
    ValidationError,
)


API_BASE = "https://api-metrika.yandex.net/management/v1"
DEFAULT_TIMEOUT = 30

# Разрешённые значения client_id_type
ALLOWED_ID_TYPES = {"CLIENT_ID", "USER_ID", "YCLID", "PURCHASE_ID"}

# Колонки CSV — ровно то, что принимает Метрика
CSV_COLUMNS = ["ClientId", "Target", "DateTime", "Price", "Currency"]


class YandexMetricaApiClient(BaseClient):
    """
    Concrete client for Yandex Metrica API.

    Supported:
        - upload_offline_conversions
        - check_upload_status
        - list_uploadings

    Not supported (raises NotImplementedError):
        - send_event, send_target, send_ecommerce
          (эти методы требуют Measurement Protocol или JS-счётчик на сайте,
           а не Management API)
    """

    def __init__(
        self,
        config: ClientConfig,
        oauth_token: str,
        logger: Optional[BaseLogger] = None,
    ) -> None:
        self.config = config
        self.oauth_token = (oauth_token or "").strip()
        self.logger = logger
        self._validate_config()

    # =========================================================================
    # Внутреннее
    # =========================================================================

    def _validate_config(self) -> None:
        if not self.config.counters:
            raise ValidationError(["At least one counter must be configured"])
        if not self.oauth_token:
            raise ValidationError(["OAuth token is required"])

    def _headers(self) -> dict[str, str]:
        return {"Authorization": f"OAuth {self.oauth_token}"}

    def _resolve_counter_id(self, counter_id: Optional[str]) -> str:
        if counter_id is None:
            return str(self.config.counters[0].number)
        return str(counter_id)

    # =========================================================================
    # Offline conversions
    # =========================================================================

    def conversions_to_csv(self, conversions: List[OfflineConversion]) -> str:
        """
        Превращает список OfflineConversion в CSV-строку.

        Формат колонок: ClientId, Target, DateTime, Price, Currency.
        Валидация обязательных полей: ClientId, Target, DateTime.
        """
        if not conversions:
            raise ValidationError(["At least one conversion is required"])

        buffer = io.StringIO()
        writer = csv.DictWriter(
            buffer,
            fieldnames=CSV_COLUMNS,
            extrasaction="ignore",  # лишние ключи не падают, а отбрасываются
            lineterminator="\n",
        )
        writer.writeheader()

        for idx, conv in enumerate(conversions):
            row = conv.to_dict()

            missing = [col for col in ("ClientId", "Target", "DateTime") if not row.get(col)]
            if missing:
                raise ValidationError(
                    [f"Conversion #{idx}: missing required field(s): {', '.join(missing)}"]
                )

            writer.writerow(row)

        return buffer.getvalue()

    async def upload_offline_conversions(
        self,
        conversions: List[OfflineConversion],
        counter_id: Optional[str] = None,
        client_id_type: str = "CLIENT_ID",
    ) -> SendResult:
        """
        Загружает офлайн-конверсии в Метрику.

        Args:
            conversions: список OfflineConversion
            counter_id: номер счётчика (по умолчанию — первый из конфига)
            client_id_type: CLIENT_ID | USER_ID | YCLID | PURCHASE_ID

        Returns:
            SendResult, где event_id = uploading.id от Метрики,
            message = статус загрузки (UPLOADED, PREPARED, ...).
        """
        cid = self._resolve_counter_id(counter_id)

        if client_id_type not in ALLOWED_ID_TYPES:
            raise ValidationError(
                [f"Invalid client_id_type: {client_id_type}. "
                 f"Allowed: {', '.join(sorted(ALLOWED_ID_TYPES))}"]
            )

        try:
            csv_content = self.conversions_to_csv(conversions)
        except ValidationError as e:
            return SendResult(
                success=False,
                counter_id=cid,
                message=f"Validation failed: {'; '.join(e.errors)}",
            )

        url = f"{API_BASE}/counter/{cid}/offline_conversions/upload"
        params = {"client_id_type": client_id_type}
        files = {
            "file": (
                "offline_conversions.csv",
                csv_content.encode("utf-8"),
                "text/csv",
            ),
        }

        try:
            async with httpx.AsyncClient(timeout=DEFAULT_TIMEOUT) as http:
                response = await http.post(
                    url,
                    params=params,
                    files=files,
                    headers=self._headers(),
                )
        except httpx.HTTPError as e:
            return SendResult(
                success=False,
                counter_id=cid,
                message=f"HTTP error: {e}",
            )

        return self._parse_upload_response(response, cid)

    def _parse_upload_response(self, response: httpx.Response, counter_id: str) -> SendResult:
        if response.status_code >= 400:
            return SendResult(
                success=False,
                counter_id=counter_id,
                status_code=response.status_code,
                message=response.text[:500],
            )

        try:
            data = response.json()
        except ValueError:
            # 200 без JSON — маловероятно, но не падаем
            return SendResult(
                success=True,
                counter_id=counter_id,
                status_code=response.status_code,
                message=response.text[:500],
            )

        uploading = data.get("uploading", {}) or {}
        return SendResult(
            success=True,
            counter_id=counter_id,
            event_id=str(uploading["id"]) if uploading.get("id") is not None else None,
            status_code=response.status_code,
            message=str(uploading.get("status", "UPLOADED")),
        )

    # =========================================================================
    # Status / listing
    # =========================================================================

    async def check_upload_status(
        self,
        uploading_id: int,
        counter_id: Optional[str] = None,
    ) -> dict[str, Any]:
        """
        Возвращает статус загрузки.

        Возможные статусы: PREPARED, UPLOADED, MATCHED,
        PROCESSED, LINKAGE_FAILURE.
        """
        cid = self._resolve_counter_id(counter_id)
        url = f"{API_BASE}/counter/{cid}/offline_conversions/uploading/{uploading_id}"

        async with httpx.AsyncClient(timeout=DEFAULT_TIMEOUT) as http:
            response = await http.get(url, headers=self._headers())

        if response.status_code >= 400:
            raise APIError(
                f"Failed to check status: {response.text[:500]}",
                status_code=response.status_code,
            )
        return response.json()

    async def list_uploadings(
        self,
        counter_id: Optional[str] = None,
    ) -> dict[str, Any]:
        """Список всех загрузок офлайн-конверсий для счётчика."""
        cid = self._resolve_counter_id(counter_id)
        url = f"{API_BASE}/counter/{cid}/offline_conversions/uploadings"

        async with httpx.AsyncClient(timeout=DEFAULT_TIMEOUT) as http:
            response = await http.get(url, headers=self._headers())

        if response.status_code >= 400:
            raise APIError(
                f"Failed to list uploadings: {response.text[:500]}",
                status_code=response.status_code,
            )
        return response.json()

    # =========================================================================
    # Не реализовано — требует другого API
    # =========================================================================

    async def send_event(self, event: TrackingEvent) -> SendResult:
        raise NotImplementedError(
            "send_event requires Measurement Protocol, not Management API"
        )

    async def send_target(self, target: TargetEvent) -> SendResult:
        raise NotImplementedError(
            "send_target requires Measurement Protocol, not Management API"
        )

    async def send_ecommerce(self, event: EcommerceEvent) -> SendResult:
        raise NotImplementedError(
            "send_ecommerce requires Measurement Protocol, not Management API"
        )


# =============================================================================
# Синхронный враппер
# =============================================================================

class SyncYandexMetricaApiClient:
    """
    Синхронная обёртка для YandexMetricaApiClient.

    Полезно, если не хочется работать с asyncio. Внутри делает
    asyncio.run(...) на каждом вызове — подходит для CLI и скриптов.
    """

    def __init__(
        self,
        config: ClientConfig,
        oauth_token: str,
        logger: Optional[BaseLogger] = None,
    ) -> None:
        self._async = YandexMetricaApiClient(config, oauth_token, logger)

    def upload_offline_conversions(
        self,
        conversions: List[OfflineConversion],
        counter_id: Optional[str] = None,
        client_id_type: str = "CLIENT_ID",
    ) -> SendResult:
        return asyncio.run(
            self._async.upload_offline_conversions(
                conversions, counter_id=counter_id, client_id_type=client_id_type
            )
        )

    def check_upload_status(
        self,
        uploading_id: int,
        counter_id: Optional[str] = None,
    ) -> dict[str, Any]:
        return asyncio.run(
            self._async.check_upload_status(uploading_id, counter_id=counter_id)
        )

    def list_uploadings(self, counter_id: Optional[str] = None) -> dict[str, Any]:
        return asyncio.run(self._async.list_uploadings(counter_id=counter_id))


__all__ = [
    "YandexMetricaApiClient",
    "SyncYandexMetricaApiClient",
]