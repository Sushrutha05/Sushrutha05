import emailjs from '@emailjs/browser';

class EmailService {
    constructor() {
        this.serviceId = 'service_c9q75w2';
        this.templateId = 'template_kgf00lj';
        this.publicKey = 'RWVW5Ucp6OD6wT7nR';
        this.isInitialized = false;
    }

    async initialize() {
        try {
            emailjs.init(this.publicKey);
            this.isInitialized = true;
            return true;
        } catch (error) {
            console.error('Failed to initialize EmailJS:', error);
            return false;
        }
    }

    async sendEmail(formData) {
        try {
            if (!this.isInitialized) {
                const initSuccess = await this.initialize();
                if (!initSuccess) {
                    throw new Error('EmailJS initialization failed');
                }
            }

            const validationResult = this.validateFormData(formData);
            if (!validationResult.isValid) {
                throw new Error(validationResult.message);
            }

            const templateParams = {
                from_name: this.sanitizeInput(formData.name),
                from_email: this.sanitizeInput(formData.email),
                subject: this.sanitizeInput(formData.subject),
                message: this.sanitizeInput(formData.message),
                reply_to: this.sanitizeInput(formData.email),
                timestamp: new Date().toLocaleString()
            };

            const response = await emailjs.send(
                this.serviceId,
                this.templateId,
                templateParams
            );

            return {
                success: true,
                message: 'Message sent successfully! I\'ll get back to you soon.',
                response: response
            };

        } catch (error) {
            console.error('Failed to send email:', error);
            let errorMessage = 'Failed to send message. Please try again or use direct email.';

            if (error.text) {
                switch (error.text) {
                    case 'The service is not available':
                        errorMessage = 'Email service is temporarily unavailable. Please try again later.';
                        break;
                    case 'Template not found':
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

    validateFormData(formData) {
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
        if (formData.name.length > 100) return { isValid: false, message: 'Name must be less than 100 characters' };
        if (formData.subject.length > 200) return { isValid: false, message: 'Subject must be less than 200 characters' };
        if (formData.message.length > 2000) return { isValid: false, message: 'Message must be less than 2000 characters' };

        return { isValid: true, message: 'Valid' };
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    sanitizeInput(input) {
        if (typeof input !== 'string') return '';
        return input.trim().replace(/[<>]/g, '').replace(/javascript:/gi, '').replace(/on\w+=/gi, '').substring(0, 2000);
    }
}

export const emailService = new EmailService();
