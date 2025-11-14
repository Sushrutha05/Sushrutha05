/**
 * Component System for Modular Portfolio
 * Handles dynamic component loading and rendering
 */

class ComponentSystem {
    constructor() {
        this.components = new Map();
        this.config = window.SiteConfig || {};
    }

    /**
     * Register a component
     */
    register(name, component) {
        this.components.set(name, component);
    }

    /**
     * Render a component with data
     */
    render(name, data = {}) {
        const component = this.components.get(name);
        if (!component) {
            console.warn(`Component '${name}' not found`);
            return '';
        }
        return component.render(data);
    }

    /**
     * Initialize all components on page load
     */
    init() {
        // Auto-initialize components based on data attributes
        document.querySelectorAll('[data-component]').forEach(element => {
            const componentName = element.dataset.component;
            const componentData = element.dataset.componentData ? 
                JSON.parse(element.dataset.componentData) : {};
            
            const html = this.render(componentName, componentData);
            if (html) {
                element.innerHTML = html;
            }
        });

        // Initialize navigation active states
        this.initNavigation();
        
        // Initialize theme system
        this.initTheme();
    }

    /**
     * Initialize navigation active states
     */
    initNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'home.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            const page = link.dataset.page;
            if (link.getAttribute('href') === currentPage || 
                (currentPage.includes('project') && page === 'work')) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Initialize theme system
     */
    initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.classList.toggle('light', savedTheme === 'light');
        
        const themeToggle = document.getElementById('theme-toggle');
        const darkIcon = document.querySelector('.dark-icon');
        const lightIcon = document.querySelector('.light-icon');
        
        if (savedTheme === 'light' && darkIcon && lightIcon) {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        }
    }

    /**
     * Generate page stats
     */
    generateStats(type = 'work') {
        const stats = {
            work: [
                { label: 'Projects', value: this.config.projects?.length || 3, icon: '3+' },
                { label: 'Technologies', value: 5, icon: '5+' },
                { label: 'Years', value: 2, icon: '2+' }
            ],
            certifications: [
                { label: 'Certifications', value: 8, icon: '8+' },
                { label: 'Latest Year', value: 2024, icon: '2024' },
                { label: 'Domains', value: 5, icon: '5' }
            ]
        };

        return stats[type] || stats.work;
    }
}

// Component Definitions
const components = {
    // Hero Section Component
    hero: {
        render(data) {
            return `
                <section id="hero" class="min-h-screen flex flex-col justify-center items-center text-center relative">
                    <div class="max-w-4xl scroll-reveal relative z-10">
                        <h1 id="hero-title" class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                            ${data.title || "Designing Tomorrow's Digital Experiences."}
                        </h1>
                        <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                            ${data.subtitle || window.SiteConfig?.site?.description || ''}
                        </p>
                    </div>
                    <a href="#about" class="absolute bottom-10 animate-bounce z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </section>
            `;
        }
    },

    // Stats Section Component
    stats: {
        render(data) {
            const componentSystem = new ComponentSystem();
            const stats = data.stats || componentSystem.generateStats(data.type);
            
            return `
                <section class="mt-24 mb-24">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-reveal">
                        ${stats.map((stat, index) => `
                            <div class="glass-card p-8 rounded-xl text-center hover:bg-white/5 transition-all duration-300">
                                <div class="w-12 h-12 bg-gradient-to-br from-${['indigo', 'purple', 'green'][index]}-500 to-${['indigo', 'purple', 'green'][index]}-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                                    ${stat.icon}
                                </div>
                                <h3 class="text-2xl font-bold text-white mb-2">${stat.label}</h3>
                                <p class="text-gray-400">${stat.description || `${stat.label.toLowerCase()} and systems`}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }
    },

    // Page Header Component
    pageHeader: {
        render(data) {
            return `
                <div class="text-center mb-16 scroll-reveal">
                    <h2 class="text-4xl md:text-5xl font-bold tracking-tighter mb-4 gradient-text">${data.title}</h2>
                    <p class="text-lg text-gray-400 max-w-2xl mx-auto">${data.description}</p>
                </div>
            `;
        }
    }
};

// Initialize component system
const componentSystem = new ComponentSystem();

// Register all components
Object.entries(components).forEach(([name, component]) => {
    componentSystem.register(name, component);
});

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    componentSystem.init();
});

// Export for global use
window.ComponentSystem = componentSystem;