# Yandex Metrika Client

Клиент для интеграции с Яндекс.Метрикой, созданный на основе анализа официальных плагинов для WordPress и OpenCart.

## Описание

Проект представляет собой универсальный клиент для работы с Яндекс.Метрикой, разработанный на основе изучения исходных кодов официальных плагинов:

- **WordPress плагин** (`/wp-yandex-metrika`) - официальная версия 1.2.4
- **OpenCart модуль** (`/yandex-metrika-v1.1.9.ocmod`) - версия 1.1.9

## Возможности

### Основные функции
- Установка и инициализация счетчиков Яндекс.Метрики
- Поддержка нескольких счетчиков одновременно
- Настройка параметров: Webvisor, ClickMap, TrackLinks, AccurateTrackBounce
- Автоматическое определение и миграция счетчиков из других плагинов

### E-commerce интеграция
- Передача данных электронной коммерции через dataLayer
- Отслеживание событий:
  - Просмотр товара (detail)
  - Добавление в корзину (add)
  - Удаление из корзины (remove)
  - Оформление заказа (purchase)
- Детализация данных о товаре:
  - ID, название, цена, количество
  - Бренд, категория
  - Валюта

### Логирование и отладка
- Вывод логов событий и ошибок
- Режим отладки через параметр `_ym_debug=1`
- Проверка корректности номера счетчика

## Структура репозитория

```
/workspace
├── README.md                          # Документация проекта
├── offline-conversions (2).csv        # Пример файла конверсий
├── wp-yandex-metrika/                 # Официальный плагин WordPress
│   ├── wp-yandex-metrika.php          # Точка входа плагина
│   ├── includes/
│   │   ├── class.ya-metrika.php       # Основной класс настроек
│   │   ├── class.ya-metrika-backend.php  # Административная панель
│   │   ├── class.ya-metrika-frontend.php # Вывод счетчиков на сайт
│   │   ├── class.ya-metrika-helpers.php  # Вспомогательные функции
│   │   ├── class.ya-metrika-logs.php     # Система логирования
│   │   ├── class.ya-metrika-woocommerce.php # Интеграция с WooCommerce
│   │   └── ...                        # Интеграции с другими плагинами
│   ├── assets/
│   │   ├── YmEc.js                    # JS класс для E-commerce
│   │   ├── frontend.js                # Фронтенд скрипты
│   │   ├── admin.js                   # Скрипты админки
│   │   └── woocommerce.js             # E-commerce события WooCommerce
│   ├── view/                          # Шаблоны административной панели
│   └── languages/                     # Локализации
│
└── yandex-metrika-v1.1.9.ocmod/       # Официальный модуль OpenCart
    ├── install.xml                    # OCMOD модификации
    └── upload/
        ├── catalog/
        │   ├── controller/product/product.php    # Контроллер товара
        │   ├── model/extension/module/yandex_metrica.php
        │   └── view/theme/*/template/            # Шаблоны
        └── admin/
            ├── controller/extension/analytics/   # Админ-контроллер
            └── view/template/extension/analytics/ # Админ-шаблоны
```

## Архитектурные решения

### WordPress реализация

#### Инициализация
```php
// Регистрация singleton экземпляров
YaMetrika::getInstance();           // Основной класс
YaMetrikaBackend::getInstance();    // Админка
YaMetrikaFrontend::getInstance();   // Фронтенд
```

#### Вывод счетчика
```javascript
ym(COUNTER_ID, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true/false,
    ecommerce: "dataLayer",
    params: {
        __ym: {
            "ymCmsPlugin": {
                "cms": "wordpress",
                "cmsVersion": "X.X",
                "pluginVersion": "X.X.X"
            }
        }
    }
});
```

#### E-commerce класс (YmEc)
JavaScript класс для управления данными электронной коммерции:
- Регистрация товаров и элементов корзины
- Отправка событий в dataLayer
- Поддержка валюты
- Работа с вариациями товаров

### OpenCart реализация

#### OCMOD модификации
- Модификация контроллера товара для передачи данных о продукте
- Внедрение скрипта счетчика в header
- Обработка событий корзины (add/remove)
- Перехват оформления заказа (success page)

#### AJAX эндпоинт
```php
public function getProductDataForYandexMetrica()
```
Возвращает JSON с данными товара для отправки в dataLayer

## Передаваемые данные E-commerce

### Просмотр товара (detail)
```json
{
    "ecommerce": {
        "currencyCode": "RUB",
        "detail": {
            "products": [{
                "id": "123",
                "name": "Название товара",
                "price": 1000,
                "brand": "Бренд",
                "category": "Категория"
            }]
        }
    }
}
```

### Добавление в корзину (add)
```json
{
    "ecommerce": {
        "currencyCode": "RUB",
        "add": {
            "products": [{
                "id": "123",
                "name": "Название товара",
                "price": 1000,
                "quantity": 1
            }]
        }
    }
}
```

### Покупка (purchase)
```json
{
    "ecommerce": {
        "currencyCode": "RUB",
        "purchase": {
            "actionField": {
                "id": "ORDER_ID",
                "revenue": 5000,
                "coupon": "PROMOCODE"
            },
            "products": [...]
        }
    }
}
```

## Требования к реализации клиента

На основе анализа официальных плагинов, новый клиент должен поддерживать:

1. **Инициализация счетчика**
   - Динамическая загрузка tag.js
   - Поддержка нескольких счетчиков
   - Настройка параметров через конфиг

2. **Data Layer**
   - Гибкое имя dataLayer (по умолчанию "dataLayer")
   - Push событий в правильном формате
   - Поддержка currencyCode

3. **E-commerce события**
   - detail, add, remove, purchase
   - Полная детализация продукта
   - Корректная работа с количеством

4. **Логирование**
   - Запись ошибок и предупреждений
   - Режим отладки
   - Валидация номера счетчика

5. **Совместимость**
   - Определение CMS и версии
   - Передача информации о плагине в Метрику
   - Поддержка различных версий платформ

## Лицензия

Оригинальные плагины распространяются под лицензией GPLv3.

## Ресурсы

- [Документация Яндекс.Метрики](https://yandex.ru/support/metrica/)
- [E-commerce в Метрике](https://yandex.ru/support/metrica/data/e-commerce.html)
- [WordPress плагин](https://wordpress.org/plugins/wp-yandex-metrika/)
- [OpenCart модуль](https://www.opencart.ru/)
