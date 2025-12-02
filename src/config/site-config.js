/**
 * Site Configuration
 * Precision Engineering & Luxury Aesthetic
 */

export const SiteConfig = {
    site: {
        name: "Sushrutha Nayak",
        title: "Engineering The Future",
        tagline: "Precision. Intelligence. Scale.",
        description: "Designing high-performance systems at the intersection of software, hardware, and artificial intelligence.",
        url: "https://sushruthanayak.com",
        email: "sushruthavn@gmail.com",
        resume: "Sushrutha-Resume.pdf",
        cv: "Sushrutha-CV.pdf"
    },

    social: {
        github: "https://github.com/Sushrutha05",
        linkedin: "https://www.linkedin.com/in/sushrutha-nayak-528775293/",
        email: "mailto:sushruthavn@gmail.com"
    },

    navigation: [
        { name: "Overview", href: "/", id: "home" },
        { name: "Projects", href: "/work", id: "work" },
        { name: "Credentials", href: "/certifications", id: "certifications" },
        { name: "Contact", href: "/contact", id: "contact" }
    ],

    skills: [
        {
            category: "Core Engineering",
            items: [
                { name: "System Architecture", level: 90 },
                { name: "Full-Stack Development", level: 85 },
                { name: "Embedded Systems", level: 80 },
                { name: "AI Integration", level: 75 }
            ]
        },
        {
            category: "Technologies",
            items: [
                { name: "Python / C++", level: 95 },
                { name: "React / Next.js", level: 90 },
                { name: "Flutter / Dart", level: 85 },
                { name: "TensorFlow / PyTorch", level: 70 }
            ]
        }
    ],

    projects: [
        {
            id: "naadswar",
            title: "NaadSwar",
            subtitle: "Acoustic Analysis Engine",
            description: "Real-time frequency analysis and pitch correction system for Indian Classical Music.",
            image: "/naadswar/image.png",
            tags: ["Signal Processing", "Flutter", "Real-time Audio"],
            link: "/projects/naadswar",
            overview: "NaadSwar is an engineered solution for acoustic precision. By leveraging Fast Fourier Transform (FFT) algorithms, it decomposes audio signals in real-time to provide instantaneous visual feedback on pitch accuracy. The system is calibrated for the micro-tonal nuances of Indian Classical Music.",
            features: [
                "Real-time FFT Audio Analysis",
                "Dynamic Noise Cancellation",
                "Visual Histogram Feedback",
                "Adaptive Frequency Mapping"
            ]
        },
        {
            id: "tabkeep",
            title: "TabKeep",
            subtitle: "Session Management Protocol",
            description: "High-performance browser resource optimization and state management extension.",
            image: "/tabkeep/icon128.png",
            tags: ["Chrome API", "State Management", "Performance"],
            link: "/projects/tabkeep",
            overview: "TabKeep optimizes browser memory usage by serializing and storing inactive session states. It interfaces directly with the Chrome Extensions API to manage tab lifecycles, reducing system resource consumption while maintaining persistent state across devices.",
            features: [
                "Session Serialization",
                "Cross-Device State Sync",
                "Memory Leak Prevention",
                "O(1) Tab Retrieval"
            ]
        },
        {
            id: "fingersense",
            title: "FingerSense",
            subtitle: "Computer Vision Pipeline",
            description: "Real-time gesture recognition system using MediaPipe and OpenCV.",
            image: "/fingersense/FingerSenseDemo.png",
            tags: ["Computer Vision", "Python", "MediaPipe"],
            link: "/projects/fingersense",
            overview: "FingerSense implements a robust computer vision pipeline for gesture recognition. Utilizing MediaPipe's hand landmark model, it calculates geometric vectors between keypoints to classify gestures in real-time with high confidence intervals.",
            features: [
                "21-Point Hand Tracking",
                "Vector-Based Gesture Logic",
                "Real-time Gaussian Blur",
                "Multi-Threaded Processing"
            ]
        }
    ],

    certifications: [
        {
            title: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            year: "2024",
            id: "AWS-CP",
            type: "Cloud Infrastructure"
        },
        {
            title: "Google Cloud Digital Leader",
            issuer: "Google Cloud",
            year: "2024",
            id: "GCP-DL",
            type: "Cloud Strategy"
        },
        {
            title: "PCAP – Python Associate",
            issuer: "Python Institute",
            year: "2024",
            id: "PCAP-31-03",
            type: "Language Proficiency"
        }
    ]
};