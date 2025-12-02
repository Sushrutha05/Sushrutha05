document.addEventListener('DOMContentLoaded', () => {

    console.log("Master script loaded and running!"); // Diagnostic line

    // --- Loading Screen ---
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Hide loading screen after page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    // =================================================================
    //  SHARED FUNCTIONALITY (Runs on every page)
    // =================================================================

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const darkIcon = document.querySelector('.dark-icon');
    const lightIcon = document.querySelector('.light-icon');
    
    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.classList.toggle('light', savedTheme === 'light');
    
    if (savedTheme === 'light' && darkIcon && lightIcon) {
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = document.documentElement.classList.toggle('light');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            
            if (darkIcon && lightIcon) {
                darkIcon.classList.toggle('hidden', isLight);
                lightIcon.classList.toggle('hidden', !isLight);
            }
        });
    }

    // --- Mobile Menu ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        });
        
        // Close menu when clicking on links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            });
        });
        
        // Close menu when clicking outside
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    }

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // Initialize EmailJS service
        const emailService = new EmailService();
        
        // Rate limiting configuration
        const RATE_LIMIT_KEY = 'contact_form_last_submission';
        const RATE_LIMIT_MINUTES = 2; // Minimum minutes between submissions

        function checkRateLimit() {
            const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
            if (lastSubmission) {
                const timeDiff = Date.now() - parseInt(lastSubmission);
                const minutesDiff = timeDiff / (1000 * 60);
                
                if (minutesDiff < RATE_LIMIT_MINUTES) {
                    const remainingTime = Math.ceil(RATE_LIMIT_MINUTES - minutesDiff);
                    return {
                        allowed: false,
                        remainingTime: remainingTime
                    };
                }
            }
            return { allowed: true };
        }

        function recordSubmission() {
            localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
        }
        
        // ⚠️  IMPORTANT: Replace these placeholder values with your actual EmailJS credentials
        // The form will NOT work until you update ALL THREE values below!
        // Get these values from your EmailJS dashboard at https://www.emailjs.com/
        // See EMAILJS_SETUP.md for detailed setup instructions
        //
        // 🔒 SECURITY NOTE: These values are SAFE to expose in client-side code:
        // - Public Key: Designed specifically for client-side use
        // - Service/Template IDs: Just identifiers, not sensitive credentials
        // - EmailJS only allows sending through your pre-configured templates
        // - Rate limiting and spam protection are handled server-side by EmailJS
        emailService.updateConfig({
            serviceId: 'service_c9q75w2',     
            templateId: 'template_svwobdh',  
            publicKey: 'RWVW5Ucp6OD6wT7nR'
        });

        // Add real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        // Validation helper functions
        function showFieldError(field, message) {
            field.classList.add('border-red-500', 'border-red-500/50');
            field.classList.remove('border-white/10');
            
            // Remove existing error message
            const existingError = field.parentNode.querySelector('.field-error');
            if (existingError) existingError.remove();
            
            // Add error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'field-error text-red-400 text-sm mt-1';
            errorDiv.textContent = message;
            field.parentNode.appendChild(errorDiv);
        }

        function clearFieldError(field) {
            field.classList.remove('border-red-500', 'border-red-500/50');
            field.classList.add('border-white/10');
            
            const existingError = field.parentNode.querySelector('.field-error');
            if (existingError) existingError.remove();
        }

        function validateField(field, value) {
            switch (field.id) {
                case 'name':
                    if (!value || value.trim().length < 2) {
                        showFieldError(field, 'Name must be at least 2 characters long');
                        return false;
                    } else if (value.length > 100) {
                        showFieldError(field, 'Name must be less than 100 characters');
                        return false;
                    }
                    break;
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!value || !emailRegex.test(value)) {
                        showFieldError(field, 'Please enter a valid email address');
                        return false;
                    }
                    break;
                case 'subject':
                    if (!value || value.trim().length < 5) {
                        showFieldError(field, 'Subject must be at least 5 characters long');
                        return false;
                    } else if (value.length > 200) {
                        showFieldError(field, 'Subject must be less than 200 characters');
                        return false;
                    }
                    break;
                case 'message':
                    if (!value || value.trim().length < 10) {
                        showFieldError(field, 'Message must be at least 10 characters long');
                        return false;
                    } else if (value.length > 2000) {
                        showFieldError(field, 'Message must be less than 2000 characters');
                        return false;
                    }
                    break;
            }
            clearFieldError(field);
            return true;
        }

        // Add real-time validation listeners
        [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
            if (field) {
                field.addEventListener('blur', () => {
                    validateField(field, field.value);
                });
                
                field.addEventListener('input', () => {
                    // Clear error on input if field was previously invalid
                    if (field.classList.contains('border-red-500')) {
                        validateField(field, field.value);
                    }
                });
            }
        });

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const submitText = submitBtn.querySelector('.submit-text');
            const loadingText = submitBtn.querySelector('.loading-text');
            const formMessage = document.getElementById('form-message');
            
            // Show loading state
            submitBtn.disabled = true;
            submitText.classList.add('hidden');
            loadingText.classList.remove('hidden');
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Honeypot spam detection
            const honeypot = formData.get('website');
            if (honeypot && honeypot.trim() !== '') {
                // Bot detected - silently fail
                console.log('Bot detected via honeypot field');
                
                // Reset button state
                submitBtn.disabled = false;
                submitText.classList.remove('hidden');
                loadingText.classList.add('hidden');
                
                // Show generic error message
                formMessage.innerHTML = '<div class="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">Unable to process request. Please try again later.</div>';
                formMessage.classList.remove('hidden');
                
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
                return;
            }
            
            // Check rate limiting
            const rateLimitCheck = checkRateLimit();
            if (!rateLimitCheck.allowed) {
                // Reset button state
                submitBtn.disabled = false;
                submitText.classList.remove('hidden');
                loadingText.classList.add('hidden');
                
                formMessage.innerHTML = `
                    <div class="text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-4">
                        <p class="mb-2">Please wait ${rateLimitCheck.remainingTime} minute(s) before sending another message.</p>
                        <p class="text-sm">For urgent matters: <a href="mailto:sushruthavn@gmail.com" class="text-indigo-400 hover:text-indigo-300 underline">Send direct email</a></p>
                    </div>
                `;
                formMessage.classList.remove('hidden');
                
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 8000);
                return;
            }

            // Validate all fields before submission
            let isValid = true;
            [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
                if (field && !validateField(field, field.value)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                // Reset button state if validation fails
                submitBtn.disabled = false;
                submitText.classList.remove('hidden');
                loadingText.classList.add('hidden');
                
                formMessage.innerHTML = '<div class="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">Please fix the errors above before submitting.</div>';
                formMessage.classList.remove('hidden');
                
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
                return;
            }
            
            try {
                // Send email using EmailJS service
                const result = await emailService.sendEmail(data);
                
                if (result.success) {
                    // Record successful submission for rate limiting
                    recordSubmission();
                    
                    // Show success message
                    formMessage.innerHTML = `<div class="text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4">${result.message}</div>`;
                    formMessage.classList.remove('hidden');
                    contactForm.reset();
                    
                    // Clear any field errors
                    [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
                        if (field) clearFieldError(field);
                    });
                } else {
                    throw new Error(result.message);
                }
                
            } catch (error) {
                // Show error message with fallback option
                const errorMsg = error.message || 'Failed to send message. Please try again or use direct email.';
                formMessage.innerHTML = `
                    <div class="text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                        <p class="mb-2">${errorMsg}</p>
                        <p class="text-sm">
                            Alternative: <a href="mailto:sushruthavn@gmail.com" class="text-indigo-400 hover:text-indigo-300 underline">Send direct email</a>
                        </p>
                    </div>
                `;
                formMessage.classList.remove('hidden');
                
                // Keep form data intact on error (don't reset)
                console.error('Contact form error:', error);
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitText.classList.remove('hidden');
                loadingText.classList.add('hidden');
                
                // Hide message after 8 seconds (longer for error messages)
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 8000);
            }
        });
    }

    // --- Cursor Glow Effect ---
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => cursorGlow.classList.add('active'));
            el.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));
        });
    }

    // --- Header Scroll Effect ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // --- Text Scramble Class Definition ---
    class TextScramble {
        constructor(el) { this.el = el; this.chars = '!<>-_\\/[]{}—=+*^?#________'; this.update = this.update.bind(this); }
        setText(newText) { const oldText = this.el.innerText; const length = Math.max(oldText.length, newText.length); const promise = new Promise((resolve) => this.resolve = resolve); this.queue = []; for (let i = 0; i < length; i++) { const from = oldText[i] || ''; const to = newText[i] || ''; const start = Math.floor(Math.random() * 40); const end = start + Math.floor(Math.random() * 40); this.queue.push({ from, to, start, end }); } cancelAnimationFrame(this.frameRequest); this.frame = 0; this.update(); return promise; }
        update() { let output = ''; let complete = 0; for (let i = 0, n = this.queue.length; i < n; i++) { let { from, to, start, end, char } = this.queue[i]; if (this.frame >= end) { complete++; output += to; } else if (this.frame >= start) { if (!char || Math.random() < 0.28) { char = this.randomChar(); this.queue[i].char = char; } output += `<span class="opacity-50">${char}</span>`; } else { output += from; } } this.el.innerHTML = output; if (complete === this.queue.length) { this.resolve(); } else { this.frameRequest = requestAnimationFrame(this.update); this.frame++; } }
        randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
    }

    // --- Scroll Reveal Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('text-scramble')) {
                    const fx = new TextScramble(entry.target);
                    fx.setText(entry.target.textContent);
                }
                const delay = entry.target.style.transitionDelay ? parseInt(entry.target.style.transitionDelay.replace('ms', '')) : 0;
                setTimeout(() => entry.target.classList.add('visible'), delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-reveal, .text-scramble').forEach(el => observer.observe(el));

    // --- Dynamic Active Navigation Link (FIXED) ---
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        if (document.body.classList.contains('is-project-page') && link.getAttribute('href') === 'work.html') {
            link.classList.add('active');
        }
    });

    // --- Simple Mobile-First Particle Canvas ---
    function initParticleCanvas() {
        console.log('🎨 Initializing particle canvas...');
        
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) {
            console.log('❌ Canvas element not found');
            return;
        }

        // Force canvas to be visible and properly positioned
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
        canvas.style.pointerEvents = 'none';
        canvas.style.display = 'block';

        const ctx = canvas.getContext('2d');
        const particles = [];
        const mouse = { x: null, y: null };
        
        // Simple mobile detection
        const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        console.log('📱 Device type:', isMobile ? 'Mobile' : 'Desktop');

        // Simple canvas sizing
        function setupCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            console.log(`📐 Canvas size: ${canvas.width}x${canvas.height}`);
        }

        // Mouse and touch handling
        function updateMouse(x, y) {
            mouse.x = x;
            mouse.y = y;
        }

        if (isMobile) {
            // Touch events for mobile
            canvas.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                updateMouse(touch.clientX, touch.clientY);
            }, { passive: false });

            canvas.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const touch = e.touches[0];
                updateMouse(touch.clientX, touch.clientY);
            }, { passive: false });

            canvas.addEventListener('touchend', () => {
                mouse.x = null;
                mouse.y = null;
            });
        } else {
            // Mouse events for desktop
            document.addEventListener('mousemove', (e) => {
                updateMouse(e.clientX, e.clientY);
            });
        }

        // Simple particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * (isMobile ? 1 : 2);
                this.vy = (Math.random() - 0.5) * (isMobile ? 1 : 2);
                this.size = isMobile ? 1 : 1.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                
                // Adapt particle color based on theme
                const isLightMode = document.documentElement.classList.contains('light');
                const baseOpacity = isMobile ? 0.4 : 0.6;
                const particleColor = isLightMode ? 
                    `rgba(99, 102, 241, ${baseOpacity})` :  // Darker indigo for light mode
                    `rgba(165, 180, 252, ${baseOpacity})`; // Light indigo for dark mode
                
                ctx.fillStyle = particleColor;
                ctx.fill();
            }
        }

        // Create particles
        function createParticles() {
            particles.length = 0;
            const count = isMobile ? 70 : 160;
            console.log(`✨ Creating ${count} particles`);
            
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        // Draw connections
        function drawConnections() {
            const maxDistance = isMobile ? 160 : 200;
            const maxDistanceSquared = maxDistance * maxDistance; // Avoid sqrt for performance
            
            // Particle to particle connections
            for (let i = 0; i < particles.length; i++) {
                let connectionCount = 0;
                const maxConnections = isMobile ? 4 : 6; // Limit connections per particle for performance
                
                for (let j = i + 1; j < particles.length && connectionCount < maxConnections; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distanceSquared = dx * dx + dy * dy;

                    if (distanceSquared < maxDistanceSquared) {
                        const distance = Math.sqrt(distanceSquared);
                        const opacity = (1 - distance / maxDistance) * (isMobile ? 0.7 : 0.9);
                        
                        // Adapt connection color based on theme
                        const isLightMode = document.documentElement.classList.contains('light');
                        const connectionColor = isLightMode ? 
                            `rgba(99, 102, 241, ${opacity})` :  // Darker indigo for light mode
                            `rgba(165, 180, 252, ${opacity})`; // Light indigo for dark mode
                        
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = connectionColor;
                        ctx.lineWidth = isMobile ? 0.5 : 0.8;
                        ctx.stroke();
                        connectionCount++;
                    }
                }
            }

            // Mouse/touch to particle connections
            if (mouse.x !== null && mouse.y !== null) {
                const mouseDistance = isMobile ? 180 : 220;
                const mouseDistanceSquared = mouseDistance * mouseDistance;
                let mouseConnections = 0;
                const maxMouseConnections = isMobile ? 8 : 12;
                
                for (let i = 0; i < particles.length && mouseConnections < maxMouseConnections; i++) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const distanceSquared = dx * dx + dy * dy;

                    if (distanceSquared < mouseDistanceSquared) {
                        const distance = Math.sqrt(distanceSquared);
                        const opacity = (1 - distance / mouseDistance) * (isMobile ? 0.6 : 0.8);
                        
                        // Adapt color based on theme
                        const isLightMode = document.documentElement.classList.contains('light');
                        const mouseColor = isLightMode ? '50, 50, 50' : '255, 255, 255'; // Dark gray for light mode, white for dark mode
                        
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(${mouseColor}, ${opacity})`;
                        ctx.lineWidth = isMobile ? 1 : 1.5;
                        ctx.stroke();
                        mouseConnections++;
                    }
                }
            }
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            drawConnections();
            requestAnimationFrame(animate);
        }

        // Initialize
        setupCanvas();
        createParticles();
        animate();

        // Handle resize
        window.addEventListener('resize', () => {
            setupCanvas();
            createParticles();
        });

        console.log('✅ Particle canvas initialized successfully');
    }

    // =================================================================
    //  PAGE-SPECIFIC INITIALIZATION
    // =================================================================

    const heroTitle = document.getElementById('hero-title');
    const activityList = document.getElementById('activity-list');

    if (heroTitle) {
        // --- HOME PAGE SCRIPT ---
        const fullText = "Designing Tomorrow's Digital Experiences.";
        const gradientWord = "Tomorrow's";
        const words = fullText.split(' ');
        const html = words.map(word => {
            const chars = word.split('').map(char => `<span class="hero-char ${word.includes(gradientWord) ? 'gradient-text' : ''}">${char}</span>`).join('');
            return `<span class="hero-word">${chars}</span>`;
        }).join(' ');
        heroTitle.innerHTML = html;

        const allSpans = heroTitle.querySelectorAll('.hero-char');
        heroTitle.addEventListener('mousemove', (e) => {
            const rect = heroTitle.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            allSpans.forEach(span => {
                const spanRect = span.getBoundingClientRect();
                const spanX = spanRect.left + spanRect.width / 2 - rect.left;
                const spanY = spanRect.top + spanRect.height / 2 - rect.top;
                const dist = Math.sqrt((x - spanX) ** 2 + (y - spanY) ** 2);
                if (dist < 200) {
                    const force = 1 - (dist / 200);
                    const moveX = ((x - spanX) / dist) * force * -20;
                    const moveY = ((y - spanY) / dist) * force * -20;
                    span.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    span.style.transform = '';
                }
            });
        });
        heroTitle.addEventListener('mouseleave', () => {
            allSpans.forEach(span => span.style.transform = '');
        });

    } else if (activityList) {
        // --- WORK PAGE SCRIPT ---
        document.querySelectorAll('.group[style*="preserve-3d"]').forEach(card => {
            const glow = card.querySelector('.project-card-glow');
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateX = (y - rect.height / 2) / 20;
                const rotateY = (rect.width / 2 - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                if (glow) glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });

        const GITHUB_USERNAME = 'Sushrutha05';
        const loadingIndicator = document.getElementById('loading-indicator');
        const contentWrapper = document.getElementById('content-wrapper');

        async function fetchGitHubActivity() {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public`);
                if (!response.ok) throw new Error(`Network response error`);
                const events = await response.json();

                const filteredEvents = events
                    .filter(event => ['PushEvent', 'CreateEvent', 'PullRequestEvent', 'IssuesEvent'].includes(event.type))
                    .slice(0, 8);

                if (filteredEvents.length === 0) {
                    activityList.innerHTML = `<div class="glass-card p-6 rounded-lg text-center text-gray-400">No recent activity found.</div>`;
                    return;
                }

                const activityHTML = filteredEvents.map(event => {
                    const date = new Date(event.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    });

                    let actionText = '';
                    let iconColor = 'from-gray-500 to-gray-600';
                    let iconText = '•';

                    switch (event.type) {
                        case 'PushEvent':
                            const commitCount = event.payload.commits ? event.payload.commits.length : 1;
                            actionText = `Pushed ${commitCount} commit${commitCount > 1 ? 's' : ''} to`;
                            iconColor = 'from-green-500 to-green-600';
                            iconText = '↑';
                            break;
                        case 'CreateEvent':
                            actionText = `Created ${event.payload.ref_type}`;
                            iconColor = 'from-blue-500 to-blue-600';
                            iconText = '+';
                            break;
                        case 'PullRequestEvent':
                            actionText = `${event.payload.action} pull request in`;
                            iconColor = 'from-purple-500 to-purple-600';
                            iconText = '⤴';
                            break;
                        case 'IssuesEvent':
                            actionText = `${event.payload.action} issue in`;
                            iconColor = 'from-orange-500 to-orange-600';
                            iconText = '!';
                            break;
                    }

                    return `
                        <div class="glass-card p-6 rounded-lg hover:bg-white/5 transition-all duration-300 scroll-reveal">
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-gradient-to-br ${iconColor} rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    ${iconText}
                                </div>
                                <div class="flex-grow min-w-0">
                                    <div class="flex items-center justify-between mb-2">
                                        <p class="text-white font-medium">
                                            ${actionText} <span class="text-indigo-300">${event.repo.name.split('/')[1]}</span>
                                        </p>
                                        <span class="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full flex-shrink-0">${date}</span>
                                    </div>
                                    ${event.payload.commits && event.payload.commits[0] ?
                            `<p class="text-gray-400 text-sm truncate">${event.payload.commits[0].message}</p>` :
                            `<p class="text-gray-400 text-sm">View on <a href="https://github.com/${event.repo.name}" class="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">GitHub</a></p>`
                        }
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                activityList.innerHTML = activityHTML;

            } catch (error) {
                console.error('GitHub API Error:', error);
                activityList.innerHTML = `<div class="glass-card p-6 rounded-lg text-center text-red-400">Could not fetch GitHub activity. Please check your connection.</div>`;
            } finally {
                if (loadingIndicator) loadingIndicator.style.display = 'none';
                if (contentWrapper) contentWrapper.classList.remove('hidden');
                document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
                initParticleCanvas(); // IMPORTANT: Init canvas AFTER content is loaded
            }
        }
        fetchGitHubActivity();
    }

    // --- UNIVERSAL PARTICLE CANVAS CHECK ---
    // If we are not on the work page, initialize the canvas immediately.
    if (!activityList) {
        initParticleCanvas();
    }

});

// --- Global Functions ---
function shareProject(title, description) {
    if (navigator.share) {
        navigator.share({
            title: `${title} - Sushrutha Nayak`,
            text: description,
            url: window.location.href
        });
    } else {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href).then(() => {
            // Show temporary notification
            const notification = document.createElement('div');
            notification.className = 'fixed top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg z-50';
            notification.textContent = 'Link copied to clipboard!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        });
    }
}