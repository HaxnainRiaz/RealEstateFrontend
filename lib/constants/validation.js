export const VALIDATION_RULES = {
    EMAIL: {
        required: 'Email is required for identity verification',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email node address'
        }
    },
    PASSWORD: {
        required: 'Secret key is required',
        minLength: {
            value: 8,
            message: 'Encryption requires at least 8 characters'
        }
    },
    PHONE: {
        pattern: {
            value: /^\+?[1-9]\d{1,14}$/,
            message: 'Invalid protocol for phone numbers'
        }
    },
    PRICE: {
        min: {
            value: 0,
            message: 'Value cannot be negative'
        }
    }
};

export const FORWARD_PROTOCOL_CONFIG = {
    MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
    ALLOWED_DOC_TYPES: ['application/pdf', 'application/msword']
};
