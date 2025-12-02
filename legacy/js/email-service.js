/**
 * EmailJS Service Wrapper
 * Handles email sending functionality through EmailJS
 */
class EmailService {
    constructor() {
        // EmailJS configuration - these will need to be set up with actual values
        this.serviceId = 'YOUR_SERVICE_ID';
        this.templateId = 'YOUR_TEMPLATE_ID';
        this.publicKey = 'YOUR_PUBLIC_KEY';
        this.isInitialized = false;
    }

    /**
     * Initialize EmailJS with the public key
     * @returns {Promise<boolean>} Success status
     */
    async initialize() {
        try {
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS library not loaded');
            }
            
            // Check for placeholder values
            if (this.publicKey === 'YOUR_PUBLIC_KEY' || 
                this.serviceId === 'YOUR_SERVICE_ID' || 
                this.templateId === 'YOUR_TEMPLATE_ID') {
                throw new Error('EmailJS configuration not set up. Please replace placeholder values in script.js with your actual EmailJS credentials. See EMAILJS_SETUP.md for instructions.');
            }
            
            emailjs.init(this.publicKey);
            this.isInitialized = true;
            console.log('EmailJS initialized successfully');
            return true;
        } catch (error) {
            console.error('Failed to initialize EmailJS:', error);
            return false;
        }
    }

    /**
     * Send email using EmailJS
     * @param {Object} formData - Form data containing name, email, subject, message
     * @returns {Promise<Object>} Response object with success status and message
     */
    async sendEmail(formData) {
        try {
            if (!this.isInitialized) {
                const initSuccess = await this.initialize();
                if (!initSuccess) {
                    throw new Error('EmailJS initialization failed');
                }
            }

            // Validate form data
            const validationResult = this.validateFormData(formData);
            if (!validationResult.isValid) {
                throw new Error(validationResult.message);
            }

            // Sanitize and prepare template parameters
            const templateParams = {
                from_name: this.sanitizeInput(formData.name),
                from_email: this.sanitizeInput(formData.email),
                subject: this.sanitizeInput(formData.subject),
                message: this.sanitizeInput(formData.message),
                reply_to: this.sanitizeInput(formData.email),
                timestamp: new Date().toLocaleString()
            };

            // Send email via EmailJS
            const response = await emailjs.send(
                this.serviceId,
                this.templateId,
                templateParams
            );

            console.log('Email sent successfully:', response);
            return {
                success: true,
                message: 'Message sent successfully! I\'ll get back to you soon.',
                response: response
            };

        } catch (error) {
            console.error('Failed to send email:', error);
            
            // Handle different types of errors
            let errorMessage = 'Failed to send message. Please try again or use direct email.';
            
            if (error.text) {
                // EmailJS specific error
                switch (error.text) {
                    case 'The service is not available':
                        errorMessage = 'Email service is temporarily unavailable. Please try again later.';
                        break;
                    case 'Template not found':
                        errorMessage = 'Email configuration error. Please use direct email.';
                        break;
                    case 'Invalid public key':
                        errorMessage = 'Email service configuration error. Please use direct email.';
                        break;
                    default:
                        errorMessage = `Email service error: ${error.text}`;
                }
            } else if (error.message) {
                errorMessage = error.message;
            }

            return {
                success: false,
                message: errorMessage,
                error: error
            };
        }
    }

    /**
     * Validate form data before sending
     * @param {Object} formData - Form data to validate
     * @returns {Object} Validation result with isValid flag and message
     */
    validateFormData(formData) {
        // Check required fields
        if (!formData.name || formData.name.trim().length < 2) {
            return { isValid: false, message: 'Name must be at least 2 characters long' };
        }

        if (!formData.email || !this.isValidEmail(formData.email)) {
            return { isValid: false, message: 'Please enter a valid email address' };
        }

        if (!formData.subject || formData.subject.trim().length < 5) {
            return { isValid: false, message: 'Subject must be at least 5 characters long' };
        }

        if (!formData.message || formData.message.trim().length < 10) {
            return { isValid: false, message: 'Message must be at least 10 characters long' };
        }

        // Check maximum lengths
        if (formData.name.length > 100) {
            return { isValid: false, message: 'Name must be less than 100 characters' };
        }

        if (formData.subject.length > 200) {
            return { isValid: false, message: 'Subject must be less than 200 characters' };
        }

        if (formData.message.length > 2000) {
            return { isValid: false, message: 'Message must be less than 2000 characters' };
        }

        return { isValid: true, message: 'Valid' };
    }

    /**
     * Validate email format
     * @param {string} email - Email address to validate
     * @returns {boolean} True if email is valid
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     * Sanitize input to prevent XSS and other security issues
     * @param {string} input - Input string to sanitize
     * @returns {string} Sanitized string
     */
    sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        
        return input
            .trim()
            .replace(/[<>]/g, '') // Remove potential HTML tags
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/on\w+=/gi, '') // Remove event handlers
            .substring(0, 2000); // Limit length
    }

    /**
     * Update configuration (for setup purposes)
     * @param {Object} config - Configuration object with serviceId, templateId, publicKey
     */
    updateConfig(config) {
        if (config.serviceId) this.serviceId = config.serviceId;
        if (config.templateId) this.templateId = config.templateId;
        if (config.publicKey) this.publicKey = config.publicKey;
        
        // Reset initialization status if config changes
        this.isInitialized = false;
    }
}

// Export for use in other scripts
window.EmailService = EmailService;