"""
Yandex Metrica Python Client

Object-oriented client for Yandex Metrica API integration.
"""

from .models import (
    # Enums
    CounterType,
    TargetType,
    BrandType,
    EventType,
    LogLevel,
    
    # Core entities
    CounterConfig,
    BrandConfig,
    CustomTarget,
    ClientConfig,
    
    # E-commerce entities
    Product,
    CartItem,
    Cart,
    Order,
    
    # User entities
    UserProfile,
    ContactInfo,
    
    # Events
    TrackingEvent,
    TargetEvent,
    EcommerceEvent,
    OfflineConversion,
    
    # Results
    SendResult,
    ValidationErrors,
    
    # Base classes
    BaseClient,
    BaseLogger,
    
    # Helper classes
    CounterValidator,
    EcommerceHelper,
    
    # Main client
    YandexMetricaClient,
    
    # Exceptions
    YandexMetricaError,
    CounterNotFoundError,
    ValidationError,
    APIError,
    OfflineConversionError,
)

__version__ = "0.1.0"
__author__ = "Yandex Metrica Client Team"
__all__ = [
    # Version
    "__version__",
    
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
