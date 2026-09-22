# Yandex Metrica Python Client

Python client for Yandex Metrica API integration with comprehensive object model.

## Overview

This client provides a complete object-oriented interface for interacting with Yandex Metrica, based on analysis of existing WordPress and OpenCart plugins. It supports:

- **Counter Management**: Multiple counter support with Webvisor configuration
- **E-commerce Tracking**: Products, cart operations, purchases
- **Goal/Target Tracking**: 20+ predefined target types (registration, contacts, purchases, etc.)
- **Offline Conversions**: Upload offline conversion data
- **User & Contact Tracking**: User profiles and contact information

## Installation

```bash
pip install yandex-metrica-client
```

## Quick Start

```python
from yandex_metrica_client import (
    YandexMetricaClient,
    ClientConfig,
    Product,
    Order,
    TargetType,
    EventType,
    ContactInfo,
    OfflineConversion
)

# Configure client
config = (ClientConfig()
    .add_counter("12345678", webvisor=True)
    .add_counter("87654321", webvisor=False))

client = YandexMetricaClient(config)

# Track e-commerce purchase
product = Product(
    id="SKU123",
    name="Product Name",
    price=1000.0,
    category="Category",
    brand="Brand"
)

order = Order(
    id="ORDER-001",
    total=1000.0,
    items=[product],
    coupons=["DISCOUNT10"]
)

result = await client.track_purchase(order, counter_id="12345678")

# Track contact form submission
contact = ContactInfo(
    email="user@example.com",
    phone="+79991234567",
    name="John Doe"
)

await client.track_contact_submit(contact, counter_id="12345678")

# Upload offline conversions
conversion = OfflineConversion(
    ym_uid="1234567890",
    goal_name="purchase",
    revenue=5000.0
)

await client.upload_offline_conversions([conversion])
```

## Object Model

### Core Classes

- `ClientConfig` - Client configuration with counters and settings
- `CounterConfig` - Individual counter configuration
- `BrandConfig` - Brand tracking configuration for e-commerce
- `CustomTarget` - Custom goal/target definition

### E-commerce Entities

- `Product` - Product with ID, name, price, category, brand
- `CartItem` - Cart item with product and quantity
- `Cart` - Shopping cart with items management
- `Order` - Order with products, coupons, shipping, tax

### User & Contacts

- `UserProfile` - User profile with ID, email, phone
- `ContactInfo` - Contact information for lead tracking

### Events

- `TrackingEvent` - Base tracking event
- `TargetEvent` - Goal/target achievement event
- `EcommerceEvent` - E-commerce action event
- `OfflineConversion` - Offline conversion data

### Enums

- `TargetType` - Predefined target types (ym-register, ym-purchase, etc.)
- `EventType` - E-commerce event types
- `BrandType` - Brand source type (taxonomy/custom_field)
- `LogLevel` - Logging levels

## Predefined Targets

Based on plugin analysis, these automatic targets are supported:

**Registration & Auth:**
- `REGISTER` - User registration
- `LOGIN` - User login

**Contacts:**
- `SUBMIT_CONTACTS` - Contact form submission
- `CONFIRM_CONTACT` - Contact confirmation
- `SHOW_CONTACTS` - View contact info

**Forms & Leads:**
- `OPEN_LEADFORM` - Lead form opened
- `SUBMIT_LEADFORM` - Lead form submitted
- `SUCCESSFUL_LEAD` - Successful lead

**E-commerce:**
- `ADD_TO_CART` - Add to cart
- `BEGIN_CHECKOUT` - Checkout started
- `ADD_PAYMENT_INFO` - Payment info added
- `PURCHASE` - Purchase completed
- `COMPLETE_ORDER` - Order completed

**Communication:**
- `SUBSCRIBE` - Newsletter subscription
- `OPEN_CHAT` - Chat opened
- `SEND_MESSAGE` - Message sent

## Architecture

```
yandex_metrica_client/
├── __init__.py          # Package exports
├── models.py            # Object model (this file)
├── client.py            # HTTP client implementation
├── api/                 # API endpoints
│   ├── counters.py      # Counter management
│   ├── events.py        # Event tracking
│   └── conversions.py   # Offline conversions
└── utils/               # Utilities
    ├── validators.py    # Data validation
    └── helpers.py       # Helper functions
```

## Error Handling

The client provides specific exception classes:

- `YandexMetricaError` - Base exception
- `ValidationError` - Data validation errors
- `APIError` - API request failures
- `CounterNotFoundError` - Counter not in configuration
- `OfflineConversionError` - Conversion upload errors

```python
from yandex_metrica_client import ValidationError, APIError

try:
    await client.track_purchase(order, counter_id="invalid")
except ValidationError as e:
    print(f"Validation failed: {e.errors}")
except APIError as e:
    print(f"API error: {e.message} (status: {e.status_code})")
```

## License

MIT License

## Based On

Analysis of:
- wp-yandex-metrika (WordPress plugin)
- yandex-metrika-opencart (OpenCart module)
