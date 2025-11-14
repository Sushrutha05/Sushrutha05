/**
 * Site Configuration
 * Centralized configuration for the portfolio website
 */

const SiteConfig = {
    // Site Information
    site: {
        name: "Sushrutha Nayak",
        title: "Multi-disciplinary Developer & Designer",
        description: "Engineering student passionate about building technology that blends software, hardware, and intelligence.",
        url: "https://sushruthanayak.com",
        email: "sushruthavn@gmail.com",
        resume: "Sushrutha-Resume.pdf"
    },

    // Social Links
    social: {
        github: "https://github.com/Sushrutha05",
        linkedin: "https://www.linkedin.com/in/sushrutha-nayak-528775293/",
        email: "mailto:sushruthavn@gmail.com"
    },

    // Navigation Configuration
    navigation: {
        main: [
            { name: "Home", href: "home.html", page: "home" },
            { name: "Work", href: "work.html", page: "work" },
            { name: "Certifications", href: "certifications.html", page: "certifications" },
            { name: "Contact", href: "contact.html", page: "contact" }
        ]
    },

    // Skills Configuration
    skills: [
        {
            title: "Core",
            icon: "CORE",
            items: ["Software", "Hardware", "Intelligence"],
            color: "indigo"
        },
        {
            title: "Languages", 
            icon: "LANG",
            items: ["Python", "C++", "Java", "Flutter", "JavaScript", "SQL"],
            color: "purple"
        },
        {
            title: "Domains",
            icon: "DOM", 
            items: ["AI/ML", "Embedded Systems", "Mobile Development", "Networking"],
            color: "green"
        },
        {
            title: "Tools",
            icon: "TOOL",
            items: ["Supabase", "OpenCV", "MediaPipe", "Git", "Notion"],
            color: "orange"
        }
    ],

    // Projects Configuration
    projects: [
        {
            id: "naadswar",
            title: "NaadSwar",
            description: "Music streaming app built with Flutter",
            image: "naadswar/image.png",
            tags: ["Flutter"],
            link: "naadswar_project_page.html",
            category: "Mobile App"
        },
        {
            id: "tabkeep",
            title: "TabKeep", 
            description: "Browser extension for tab management",
            image: "tabkeep/icon128.png",
            tags: ["JavaScript", "Chrome Extension API"],
            link: "tabkeep_project_page.html",
            category: "Browser Extension"
        },
        {
            id: "fingersense",
            title: "FingerSense",
            description: "Computer vision system for gesture recognition", 
            image: "fingersense/FingerSenseDemo.png",
            tags: ["Python", "OpenCV", "MediaPipe"],
            link: "fingersense_project_page.html",
            category: "Computer Vision"
        }
    ],

    // Certifications Configuration
    certifications: {
        "cloud": [
            {
                title: "AWS Cloud Practitioner",
                issuer: "Amazon Web Services",
                year: "2024",
                description: "Foundational understanding of AWS cloud services, security, and pricing models.",
                category: "Cloud Computing",
                icon: "AWS",
                color: "orange",
                link: "#"
            },
            {
                title: "Google Cloud Digital Leader", 
                issuer: "Google Cloud",
                year: "2024",
                description: "Digital transformation capabilities and Google Cloud solutions for business challenges.",
                category: "Cloud Strategy",
                icon: "GCP",
                color: "blue",
                link: "#"
            }
        ],
        "programming": [
            {
                title: "Python Institute PCAP",
                issuer: "Python Institute", 
                year: "2024",
                description: "Certified Associate in Python Programming demonstrating proficiency in Python fundamentals.",
                category: "Python",
                icon: "PY",
                color: "yellow",
                link: "#"
            },
            {
                title: "Flutter Development",
                issuer: "Flutter Community",
                year: "2023", 
                description: "Complete Flutter & Dart development certification for cross-platform mobile applications.",
                category: "Mobile Dev",
                icon: "FL",
                color: "blue",
                link: "#"
            }
        ]
    },

    // Contact Methods
    contactMethods: [
        {
            name: "Email",
            description: "Best for project inquiries and collaboration",
            icon: "@",
            color: "indigo",
            link: "mailto:sushruthavn@gmail.com",
            action: "Send Message"
        },
        {
            name: "LinkedIn", 
            description: "Professional networking and opportunities",
            icon: "IN",
            color: "purple",
            link: "https://www.linkedin.com/in/sushrutha-nayak-528775293/",
            action: "Connect"
        },
        {
            name: "GitHub",
            description: "Code collaboration and open source", 
            icon: "GH",
            color: "green",
            link: "https://github.com/Sushrutha05",
            action: "Follow"
        }
    ],

    // Theme Configuration
    theme: {
        default: "dark",
        colors: {
            primary: "indigo",
            secondary: "purple", 
            accent: "blue"
        }
    },

    // Particle System Configuration
    particles: {
        mobile: {
            count: 70,
            connectionDistance: 160,
            mouseDistance: 180,
            opacity: 0.7
        },
        desktop: {
            count: 160,
            connectionDistance: 200, 
            mouseDistance: 220,
            opacity: 0.9
        }
    },

    // Animation Configuration
    animations: {
        scrollReveal: {
            threshold: 0.1,
            delay: 200
        },
        textScramble: {
            chars: "!<>-_\\/[]{}—=+*^?#________",
            speed: 40
        }
    },

    // SEO Configuration
    seo: {
        defaultImage: "https://sushruthanayak.com/headshot.png",
        twitterHandle: "@sushrutha",
        keywords: "Sushrutha Nayak, developer, engineer, AI, machine learning, mobile development, Flutter, Python, portfolio"
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SiteConfig;
} else {
    window.SiteConfig = SiteConfig;
}