"""
Yandex Metrica API Client - Object Model

This module provides a comprehensive object model for interacting with Yandex Metrica API.
Based on analysis of WordPress and OpenCart plugins for Yandex Metrica integration.

Features:
- Counter management (multiple counters support)
- E-commerce tracking (products, cart, purchases)
- Goal/Target tracking (registration, contacts, purchases, etc.)
- Offline conversions tracking
- User behavior tracking (sessions, events)
- Brand/product data for analytics reports
"""

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Optional, List, Dict, Any, Union
from enum import Enum
from datetime import datetime
import uuid


# =============================================================================
# ENUMS
# =============================================================================

class CounterType(Enum):
    """Types of Yandex Metrica counters."""
    STANDARD = "standard"
    ECOMMERCE = "ecommerce"
    WEBVISOR = "webvisor"


class TargetType(Enum):
    """
    Predefined target/goal types based on plugin analysis.
    These correspond to automatic goals in Yandex Metrica.
    """
    # Registration & Authentication
    REGISTER = "ym-register"
    LOGIN = "ym-login"
    
    # Contact Information
    SUBMIT_CONTACTS = "ym-submit-contacts"
    CONFIRM_CONTACT = "ym-confirm-contact"
    SHOW_CONTACTS = "ym-show-contacts"
    CONTACT_CONTRACTOR = "ym-contact-constractor"
    AGREE_CONTRACTOR = "ym-agree-constractor"
    
    # Forms & Leads
    OPEN_LEADFORM = "ym-open-leadform"
    SUBMIT_LEADFORM = "ym-submit-leadform"
    SUCCESSFUL_LEAD = "ym-successful-lead"
    GET_RESPONSE = "ym-get-response"
    
    # Subscription & Communication
    SUBSCRIBE = "ym-subscribe"
    OPEN_CHAT = "ym-open-chat"
    SEND_MESSAGE = "ym-send-message"
    
    # E-commerce - Product Interaction
    ADD_TO_WISHLIST = "ym-add-to-wishlist"
    ADD_TO_CART = "ym-add-to-cart"
    
    # E-commerce - Checkout Process
    BEGIN_CHECKOUT = "ym-begin-checkout"
    ADD_PAYMENT_INFO = "ym-add-payment-info"
    PURCHASE = "ym-purchase"
    COMPLETE_ORDER = "ym-complete-order"
    
    # Meetings & Appointments
    AGREE_MEETING = "ym-agree-meeting"
    
    # Custom
    CUSTOM = "custom"


class BrandType(Enum):
    """Type of brand attribute source."""
    TAXONOMY = "taxonomy"
    CUSTOM_FIELD = "custom_field"


class EventType(Enum):
    """Event types for e-commerce tracking."""
    VIEW_ITEM = "view_item"
    ADD_TO_CART = "add_to_cart"
    REMOVE_FROM_CART = "remove_from_cart"
    UPDATE_CART = "update_cart"
    BEGIN_CHECKOUT = "begin_checkout"
    ADD_PAYMENT_INFO = "add_payment_info"
    PURCHASE = "purchase"
    REFUND = "refund"


class LogLevel(Enum):
    """Logging levels for client operations."""
    DEBUG = "debug"
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"


# =============================================================================
# DATA CLASSES - CORE ENTITIES
# =============================================================================

@dataclass
class CounterConfig:
    """
    Configuration for a Yandex Metrica counter.
    
    Attributes:
        number: Counter ID (numeric string)
        webvisor: Enable session replay (Webvisor)
        clickmap: Enable clickmap tracking
        track_links: Enable link tracking
        accurate_track_bounce: Enable accurate bounce tracking
        ecommerce: DataLayer name for e-commerce (default: "dataLayer")
    """
    number: str
    webvisor: bool = True
    clickmap: bool = True
    track_links: bool = True
    accurate_track_bounce: bool = True
    ecommerce: str = "dataLayer"
    
    def __post_init__(self):
        # Convert to string if int was passed, then validate
        self.number = str(self.number)
        if not self.number.isdigit():
            raise ValueError("Counter number must be numeric")


@dataclass
class BrandConfig:
    """
    Configuration for brand tracking in e-commerce.
    
    Attributes:
        brand_type: Type of brand source (taxonomy or custom field)
        brand_slug: Name of taxonomy or custom field
    """
    brand_type: BrandType
    brand_slug: str


@dataclass
class CustomTarget:
    """
    Custom target/goal configuration.
    
    Attributes:
        name: Target identifier
        target_type: Predefined target type or custom
        description: Optional description
    """
    name: str
    target_type: Union[TargetType, str] = TargetType.CUSTOM
    description: Optional[str] = None


# =============================================================================
# DATA CLASSES - E-COMMERCE ENTITIES
# =============================================================================

@dataclass
class Product:
    """
    Product entity for e-commerce tracking.
    
    Attributes:
        id: Product ID/SKU
        name: Product name
        price: Product price
        quantity: Quantity (for cart/purchase events)
        category: Product category
        brand: Product brand
        variant: Product variant (size, color, etc.)
        position: Position in list/search results
        currency: Currency code (default: RUB)
    """
    id: str
    name: str
    price: float
    quantity: int = 1
    category: Optional[str] = None
    brand: Optional[str] = None
    variant: Optional[str] = None
    position: Optional[int] = None
    currency: str = "RUB"
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for API request."""
        data = {
            "id": self.id,
            "name": self.name,
            "price": self.price,
            "quantity": self.quantity,
            "currency": self.currency
        }
        if self.category:
            data["category"] = self.category
        if self.brand:
            data["brand"] = self.brand
        if self.variant:
            data["variant"] = self.variant
        if self.position is not None:
            data["position"] = self.position
        return data


@dataclass
class CartItem:
    """
    Cart item with product reference.
    
    Attributes:
        product: Product instance
        quantity: Item quantity in cart
        cart_item_key: Unique cart item identifier
    """
    product: Product
    quantity: int
    cart_item_key: Optional[str] = None


@dataclass
class Cart:
    """
    Shopping cart representation.
    
    Attributes:
        items: List of cart items
        total: Cart total amount
        currency: Currency code
    """
    items: List[CartItem] = field(default_factory=list)
    total: float = 0.0
    currency: str = "RUB"
    
    def add_item(self, product: Product, quantity: int = 1, key: Optional[str] = None):
        """Add item to cart."""
        item = CartItem(product=product, quantity=quantity, cart_item_key=key)
        self.items.append(item)
        self._recalculate()
    
    def remove_item(self, cart_item_key: str):
        """Remove item from cart by key."""
        self.items = [i for i in self.items if i.cart_item_key != cart_item_key]
        self._recalculate()
    
    def update_quantity(self, cart_item_key: str, quantity: int):
        """Update item quantity."""
        for item in self.items:
            if item.cart_item_key == cart_item_key:
                item.quantity = quantity
                break
        self._recalculate()
    
    def _recalculate(self):
        """Recalculate cart total."""
        self.total = sum(item.product.price * item.quantity for item in self.items)
    
    def to_products(self) -> List[Product]:
        """Convert cart items to product list."""
        return [item.product for item in self.items]


@dataclass
class Order:
    """
    Order entity for purchase tracking.
    
    Matches Yandex Metrica e-commerce format:
    {
      ecommerce: {
        purchase: {
          actionField: { id, revenue, coupon, shipping, tax },
          products: [...]
        }
      }
    }
    
    Note: currency should be passed at the EcommerceEvent level, not in actionField.
    
    Attributes:
        id: Order ID
        total: Order total amount (revenue)
        items: Ordered products
        coupons: Applied coupon codes
        shipping: Shipping cost
        tax: Tax amount
        affiliation: Affiliation/store name (optional)
    """
    id: str
    total: float
    items: List[Product] = field(default_factory=list)
    coupons: List[str] = field(default_factory=list)
    shipping: float = 0.0
    tax: float = 0.0
    affiliation: Optional[str] = None
    
    def to_dict(self) -> Dict[str, Any]:
        """
        Convert to actionField dictionary for Yandex Metrica e-commerce.
        
        Returns dict with keys matching Metrica's actionField format:
        id, revenue, coupon, shipping, tax, affiliation (optional)
        """
        data = {
            "id": self.id,
            "revenue": self.total,
            "coupon": ", ".join(self.coupons) if self.coupons else None,
            "shipping": self.shipping,
            "tax": self.tax
        }
        if self.affiliation:
            data["affiliation"] = self.affiliation
        return data


# =============================================================================
# DATA CLASSES - USER & CONTACTS
# =============================================================================

@dataclass
class UserProfile:
    """
    User profile for tracking.
    
    Attributes:
        user_id: Unique user identifier
        email: User email
        phone: User phone number
        name: User name
        registered_at: Registration timestamp
    """
    user_id: str
    email: Optional[str] = None
    phone: Optional[str] = None
    name: Optional[str] = None
    registered_at: Optional[datetime] = None
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for API request."""
        return {
            "user_id": self.user_id,
            "email": self.email,
            "phone": self.phone,
            "name": self.name,
            "registered_at": self.registered_at.isoformat() if self.registered_at else None
        }


@dataclass
class ContactInfo:
    """
    Contact information for lead tracking.
    
    Attributes:
        email: Email address
        phone: Phone number
        name: Full name
        company: Company name
        message: Contact message
        source: Contact source (form, chat, etc.)
    """
    email: Optional[str] = None
    phone: Optional[str] = None
    name: Optional[str] = None
    company: Optional[str] = None
    message: Optional[str] = None
    source: Optional[str] = None
    
    def validate(self) -> bool:
        """Validate that at least one contact method is provided."""
        return bool(self.email or self.phone)


# =============================================================================
# DATA CLASSES - EVENTS & TRACKING
# =============================================================================

@dataclass
class TrackingEvent:
    """
    Base tracking event.
    
    Attributes:
        event_type: Type of event
        counter_id: Counter ID to send event to
        timestamp: Event timestamp
        user_id: User identifier (if available)
        session_id: Session identifier
        parameters: Additional event parameters
    """
    event_type: str
    counter_id: str
    timestamp: datetime = field(default_factory=datetime.now)
    user_id: Optional[str] = None
    session_id: Optional[str] = None
    parameters: Dict[str, Any] = field(default_factory=dict)
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for API request."""
        return {
            "event_type": self.event_type,
            "counter_id": self.counter_id,
            "timestamp": self.timestamp.isoformat(),
            "user_id": self.user_id,
            "session_id": self.session_id,
            "parameters": self.parameters
        }


@dataclass
class TargetEvent(TrackingEvent):
    """
    Target/Goal achievement event.
    
    Attributes:
        target_name: Target identifier (user-defined goal name)
        target_type: Optional predefined target type from TargetType enum
        value: Numeric value (for revenue targets)
        currency: Currency for value
    """
    event_type: str = "target"
    counter_id: str = ""
    target_name: str = ""
    target_type: Optional[Union[TargetType, str]] = None
    value: Optional[float] = None
    currency: str = "RUB"
    
    def __post_init__(self):
        # Only set target_name from target_type if target_name wasn't explicitly provided
        if self.target_type is not None and not self.target_name:
            if isinstance(self.target_type, TargetType):
                self.target_name = self.target_type.value
            else:
                self.target_name = str(self.target_type)


@dataclass
class EcommerceEvent(TrackingEvent):
    """
    E-commerce tracking event.
    
    Attributes:
        action: E-commerce action type
        products: Products involved in the event
        action_field: Additional action data (order info, etc.)
    """
    event_type: str = "ecommerce"
    counter_id: str = ""
    action: EventType = EventType.VIEW_ITEM
    products: List[Product] = field(default_factory=list)
    action_field: Optional[Dict[str, Any]] = None
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for API request."""
        data = super().to_dict()
        data["action"] = self.action.value
        data["products"] = [p.to_dict() for p in self.products]
        if self.action_field:
            data["actionField"] = self.action_field
        return data


@dataclass
class OfflineConversion:
    """
    Offline conversion data for upload to Yandex Metrica.
    
    Matches the CSV format required by Yandex Metrica API:
    ClientId,Target,DateTime,Price,Currency
    
    Attributes:
        client_id: Yandex Metrica user ID (_ym_uid cookie) - maps to ClientId
        target: Goal/target name - maps to Target
        conversion_time: Conversion timestamp (Unix epoch or ISO) - maps to DateTime
        revenue: Conversion revenue - maps to Price
        currency: Currency code - maps to Currency
        click_id: Click ID from Yandex Direct (optional)
        additional_params: Additional conversion parameters
    """
    client_id: str  # ClientId in CSV (was ym_uid)
    target: str  # Target in CSV (was goal_name)
    conversion_time: datetime = field(default_factory=datetime.now)  # DateTime in CSV
    revenue: Optional[float] = None  # Price in CSV
    currency: str = "RUB"  # Currency in CSV
    click_id: Optional[str] = None
    additional_params: Dict[str, Any] = field(default_factory=dict)
    
    def to_dict(self) -> Dict[str, Any]:
        """
        Convert to dictionary matching CSV column names for API upload.
        
        Returns dict with keys: ClientId, Target, DateTime, Price, Currency
        """
        # Convert timestamp to Unix epoch (integer seconds) as expected by API
        import time
        unix_timestamp = int(time.mktime(self.conversion_time.timetuple()))
        
        data = {
            "ClientId": self.client_id,
            "Target": self.target,
            "DateTime": unix_timestamp,
            "Currency": self.currency
        }
        if self.revenue is not None:
            data["Price"] = self.revenue
        if self.click_id:
            data["click_id"] = self.click_id
        if self.additional_params:
            data.update(self.additional_params)
        return data


# =============================================================================
# DATA CLASSES - RESPONSES & RESULTS
# =============================================================================

@dataclass
class SendResult:
    """
    Result of sending data to Yandex Metrica.
    
    Attributes:
        success: Whether the send was successful
        counter_id: Counter ID that received the data
        event_id: Generated event identifier
        status_code: HTTP status code from response
        message: Response message or error description
        timestamp: Send timestamp
    """
    success: bool
    counter_id: str
    event_id: Optional[str] = None
    status_code: Optional[int] = None
    message: str = ""
    timestamp: datetime = field(default_factory=datetime.now)


@dataclass
class ValidationErrors:
    """Validation errors container."""
    errors: List[str] = field(default_factory=list)
    
    def add(self, error: str):
        self.errors.append(error)
    
    def is_valid(self) -> bool:
        return len(self.errors) == 0


# =============================================================================
# ABSTRACT BASE CLASSES
# =============================================================================

class BaseClient(ABC):
    """Abstract base class for Yandex Metrica clients."""
    
    @abstractmethod
    async def send_event(self, event: TrackingEvent) -> SendResult:
        """Send tracking event to Yandex Metrica."""
        pass
    
    @abstractmethod
    async def send_target(self, target: TargetEvent) -> SendResult:
        """Send target/goal achievement event."""
        pass
    
    @abstractmethod
    async def send_ecommerce(self, event: EcommerceEvent) -> SendResult:
        """Send e-commerce event."""
        pass
    
    @abstractmethod
    async def upload_offline_conversions(
        self, 
        conversions: List[OfflineConversion]
    ) -> SendResult:
        """Upload offline conversions."""
        pass


class BaseLogger(ABC):
    """Abstract base class for logging."""
    
    @abstractmethod
    def log(self, level: LogLevel, message: str, **kwargs):
        """Log a message."""
        pass
    
    def debug(self, message: str, **kwargs):
        self.log(LogLevel.DEBUG, message, **kwargs)
    
    def info(self, message: str, **kwargs):
        self.log(LogLevel.INFO, message, **kwargs)
    
    def warning(self, message: str, **kwargs):
        self.log(LogLevel.WARNING, message, **kwargs)
    
    def error(self, message: str, **kwargs):
        self.log(LogLevel.ERROR, message, **kwargs)


# =============================================================================
# CONFIGURATION
# =============================================================================

@dataclass
class ClientConfig:
    """
    Client configuration.
    
    Attributes:
        counters: List of counter configurations
        brand_config: Brand tracking configuration
        custom_targets: Custom targets list
        data_layer_name: DataLayer variable name
        enable_logging: Enable client logging
        log_level: Logging level
        timeout: Request timeout in seconds
        retry_count: Number of retries on failure
    """
    counters: List[CounterConfig] = field(default_factory=list)
    brand_config: Optional[BrandConfig] = None
    custom_targets: List[CustomTarget] = field(default_factory=list)
    data_layer_name: str = "dataLayer"
    enable_logging: bool = True
    log_level: LogLevel = LogLevel.INFO
    timeout: int = 30
    retry_count: int = 3
    
    def add_counter(
        self, 
        number: Union[str, int], 
        webvisor: bool = True,
        clickmap: bool = True,
        track_links: bool = True,
        accurate_track_bounce: bool = True,
        ecommerce: str = "dataLayer"
    ) -> 'ClientConfig':
        """
        Add counter configuration with full options.
        
        Args:
            number: Counter ID (numeric string or int)
            webvisor: Enable session replay (Webvisor)
            clickmap: Enable clickmap tracking
            track_links: Enable link tracking
            accurate_track_bounce: Enable accurate bounce tracking
            ecommerce: DataLayer name for e-commerce
            
        Returns:
            Self for fluent interface
        """
        self.counters.append(CounterConfig(
            number=number,
            webvisor=webvisor,
            clickmap=clickmap,
            track_links=track_links,
            accurate_track_bounce=accurate_track_bounce,
            ecommerce=ecommerce
        ))
        return self
    
    def add_counter_simple(self, number: Union[str, int], webvisor: bool = True) -> 'ClientConfig':
        """Add counter with minimal options (backward compatible)."""
        self.counters.append(CounterConfig(number=number, webvisor=webvisor))
        return self
    
    def set_brand(
        self, 
        brand_type: BrandType, 
        brand_slug: str
    ) -> 'ClientConfig':
        """Set brand configuration."""
        self.brand_config = BrandConfig(
            brand_type=brand_type, 
            brand_slug=brand_slug
        )
        return self
    
    def add_custom_target(
        self, 
        name: str, 
        target_type: Union[TargetType, str] = TargetType.CUSTOM
    ) -> 'ClientConfig':
        """Add custom target."""
        self.custom_targets.append(CustomTarget(name=name, target_type=target_type))
        return self


# =============================================================================
# HELPER CLASSES
# =============================================================================

class CounterValidator:
    """Utility class for counter validation."""
    
    @staticmethod
    def validate_counter_number(number: str) -> bool:
        """Validate counter number format."""
        return bool(number and number.isdigit())
    
    @staticmethod
    def parse_counter_from_code(code: str) -> Optional[str]:
        """
        Parse counter ID from JavaScript code.
        
        Supports formats:
        - ym(12345678, "init", ...)
        - mc.yandex.ru/watch/12345678
        """
        import re
        
        # Format: ym(12345678,
        match = re.search(r'ym\(\s*(\d+)\s*,', code)
        if match:
            return match.group(1)
        
        # Format: mc.yandex.ru/watch/12345678
        match = re.search(r'mc\.yandex\.ru/watch/(\d+)', code)
        if match:
            return match.group(1)
        
        return None


class EcommerceHelper:
    """Helper class for e-commerce data preparation."""
    
    @staticmethod
    def prepare_purchase_data(order: Order) -> Dict[str, Any]:
        """Prepare purchase data for Yandex Metrica."""
        return {
            "actionField": {
                "id": order.id,
                "revenue": order.total,
                "coupon": ", ".join(order.coupons) if order.coupons else None,
                "shipping": order.shipping,
                "tax": order.tax
            },
            "products": [item.to_dict() for item in order.items]
        }
    
    @staticmethod
    def prepare_cart_data(cart: Cart) -> List[Dict[str, Any]]:
        """Prepare cart data for Yandex Metrica."""
        return [
            {
                "id": item.product.id,
                "name": item.product.name,
                "price": item.product.price,
                "quantity": item.quantity
            }
            for item in cart.items
        ]


# =============================================================================
# EXCEPTIONS
# =============================================================================

class YandexMetricaError(Exception):
    """Base exception for Yandex Metrica client."""
    pass


class CounterNotFoundError(YandexMetricaError):
    """Raised when counter is not found in configuration."""
    pass


class ValidationError(YandexMetricaError):
    """Raised when data validation fails."""
    def __init__(self, errors: List[str]):
        self.errors = errors
        super().__init__("; ".join(errors))


class APIError(YandexMetricaError):
    """Raised when API request fails."""
    def __init__(self, message: str, status_code: Optional[int] = None):
        self.status_code = status_code
        super().__init__(message)


class OfflineConversionError(YandexMetricaError):
    """Raised when offline conversion upload fails."""
    pass


# =============================================================================
# MAIN CLIENT CLASS (INTERFACE)
# =============================================================================

class YandexMetricaClient(BaseClient):
    """
    Main client class for Yandex Metrica API integration.
    
    This is an interface class that should be implemented with actual
    HTTP client functionality. Provides methods for:
    - Sending page views and events
    - Tracking e-commerce actions
    - Recording goal achievements
    - Uploading offline conversions
    - Managing user profiles and contacts
    
    Usage:
        config = ClientConfig()
            .add_counter("12345678", webvisor=True)
            .set_brand(BrandType.TAXONOMY, "product_brand")
        
        client = YandexMetricaClient(config)
        
        # Track page view
        await client.send_page_view()
        
        # Track e-commerce event
        product = Product(id="SKU123", name="Product", price=1000.0)
        event = EcommerceEvent(
            action=EventType.ADD_TO_CART,
            products=[product],
            counter_id="12345678"
        )
        result = await client.send_ecommerce(event)
        
        # Track goal
        target = TargetEvent(
            target_type=TargetType.PURCHASE,
            value=1000.0,
            counter_id="12345678"
        )
        await client.send_target(target)
        
        # Upload offline conversions
        conversion = OfflineConversion(
            ym_uid="1234567890",
            goal_name="purchase",
            revenue=1000.0
        )
        await client.upload_offline_conversions([conversion])
    """
    
    def __init__(
        self, 
        config: ClientConfig,
        logger: Optional[BaseLogger] = None
    ):
        self.config = config
        self.logger = logger
        self._validate_config()
    
    def _validate_config(self):
        """Validate client configuration."""
        if not self.config.counters:
            raise ValidationError(["At least one counter must be configured"])
        
        for counter in self.config.counters:
            if not CounterValidator.validate_counter_number(counter.number):
                raise ValidationError([f"Invalid counter number: {counter.number}"])
    
    async def send_event(self, event: TrackingEvent) -> SendResult:
        """Send tracking event to Yandex Metrica."""
        raise NotImplementedError("Implement in subclass")
    
    async def send_target(self, target: TargetEvent) -> SendResult:
        """Send target/goal achievement event."""
        raise NotImplementedError("Implement in subclass")
    
    async def send_ecommerce(self, event: EcommerceEvent) -> SendResult:
        """Send e-commerce event."""
        raise NotImplementedError("Implement in subclass")
    
    async def upload_offline_conversions(
        self, 
        conversions: List[OfflineConversion]
    ) -> SendResult:
        """Upload offline conversions."""
        raise NotImplementedError("Implement in subclass")
    
    # Convenience methods
    async def track_registration(self, user: UserProfile, counter_id: str) -> SendResult:
        """Track user registration."""
        target = TargetEvent(
            target_type=TargetType.REGISTER,
            user_id=user.user_id,
            counter_id=counter_id
        )
        return await self.send_target(target)
    
    async def track_contact_submit(
        self, 
        contact: ContactInfo, 
        counter_id: str
    ) -> SendResult:
        """Track contact form submission."""
        if not contact.validate():
            raise ValidationError(["Email or phone must be provided"])
        
        target = TargetEvent(
            target_type=TargetType.SUBMIT_CONTACTS,
            counter_id=counter_id,
            parameters={
                "email": contact.email,
                "phone": contact.phone,
                "name": contact.name
            }
        )
        return await self.send_target(target)
    
    async def track_purchase(self, order: Order, counter_id: str) -> SendResult:
        """Track purchase completion."""
        event = EcommerceEvent(
            action=EventType.PURCHASE,
            products=order.items,
            action_field=order.to_dict(),
            counter_id=counter_id
        )
        
        target = TargetEvent(
            target_type=TargetType.PURCHASE,
            value=order.total,
            currency=order.currency,
            counter_id=counter_id
        )
        
        ecommerce_result = await self.send_ecommerce(event)
        target_result = await self.send_target(target)
        
        return SendResult(
            success=ecommerce_result.success and target_result.success,
            counter_id=counter_id,
            message="Purchase tracked successfully"
        )
    
    async def track_add_to_cart(
        self, 
        product: Product, 
        quantity: int,
        counter_id: str
    ) -> SendResult:
        """Track add to cart event."""
        product.quantity = quantity
        event = EcommerceEvent(
            action=EventType.ADD_TO_CART,
            products=[product],
            counter_id=counter_id
        )
        
        target = TargetEvent(
            target_type=TargetType.ADD_TO_CART,
            counter_id=counter_id
        )
        
        ecommerce_result = await self.send_ecommerce(event)
        target_result = await self.send_target(target)
        
        return SendResult(
            success=ecommerce_result.success and target_result.success,
            counter_id=counter_id,
            message="Add to cart tracked successfully"
        )


# =============================================================================
# EXPORTS
# =============================================================================

__all__ = [
    # Enums
    "CounterType",
    "TargetType",
    "BrandType",
    "EventType",
    "LogLevel",
    
    # Core entities
    "CounterConfig",
    "BrandConfig",
    "CustomTarget",
    "ClientConfig",
    
    # E-commerce entities
    "Product",
    "CartItem",
    "Cart",
    "Order",
    
    # User entities
    "UserProfile",
    "ContactInfo",
    
    # Events
    "TrackingEvent",
    "TargetEvent",
    "EcommerceEvent",
    "OfflineConversion",
    
    # Results
    "SendResult",
    "ValidationErrors",
    
    # Base classes
    "BaseClient",
    "BaseLogger",
    
    # Helper classes
    "CounterValidator",
    "EcommerceHelper",
    
    # Main client
    "YandexMetricaClient",
    
    # Exceptions
    "YandexMetricaError",
    "CounterNotFoundError",
    "ValidationError",
    "APIError",
    "OfflineConversionError",
]
