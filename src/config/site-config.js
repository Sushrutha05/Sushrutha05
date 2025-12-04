import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const SiteConfig = {
    metadata: {
        title: "Sushrutha",
        description: "Portfolio of Sushrutha - Computer Science Engineer & Developer",
        author: "Sushrutha",
        siteUrl: "https://sushrutha05.vercel.app/",
    },

    site: {
        cv: "/Sushrutha-CV.pdf",
        resume: "/Sushrutha-Resume.pdf"
    },

    social: {
        github: "https://github.com/Sushrutha05",
        linkedin: "https://www.linkedin.com/in/sushrutha-nayak-528775293",
        email: "mailto:sushruthar05@gmail.com",

    },

    navigation: [
        { name: "Home", href: "/" },
        { name: "Work", href: "/work" },
        { name: "Credentials", href: "/certifications" },
        { name: "Contact", href: "/contact" }
    ],

    skills: {
        expert: ["Python", "Machine Learning", "Data Analysis", "React", "C"],
        proficient: ["Java", "SQL", "Git", "TensorFlow", "Scikit-Learn"],
        familiar: ["Docker", "AWS", "C++", "Flutter"]
    },

    projects: [
        {
            id: "naadswar",
            title: "NaadSwar",
            subtitle: "Acoustic Analysis Engine",
            description: "Real-time frequency analysis and pitch correction system for Indian Classical Music.",
            image: "/naadswar/image.png",
            tags: ["Signal Processing", "Flutter", "Real-time Audio"],
            link: "/projects/naadswar",
            overview: "NaadSwar is a minimal, real-time pitch detection app built for Indian classical musicians. It listens to your voice or instrument and maps the detected pitch to the closest swar — covering all three saptaks (Mandra, Madhya, Taar) and all note types (Shuddh, Komal, and Teevra). Perfect for vocalists, bansuri players, and anyone practicing pitch precision. ",
            features: [
                "Live microphone input",
                "Debug Settings Screen with adjustable Gain, History Size, and Buffer Size",
                "Visual Histogram Feedback",
                "Notation Cheatsheet for quick reference",
                "Customizable base Sa frequency"
            ],
            links: {
                external: {
                    url: "https://drive.google.com/uc?export=download&id=1VkXRROFYG7HVIse-xmvWeDH5XDb_vsbq",
                    label: "Download App"
                }
            }
        },
        {
            id: "fingersense",
            title: "FingerSense",
            subtitle: "Biometric Authentication System",
            description: "High-precision fingerprint recognition algorithm using minutiae extraction.",
            image: "/fingersense/FingerSenseDemo.png",
            tags: ["Computer Vision", "Python", "Biometrics"],
            link: "/projects/fingersense",
            overview: "FingerSense is a biometric authentication system designed for high security and accuracy. It utilizes advanced image processing techniques to extract minutiae points from fingerprint images, creating a unique digital signature for each user. The system is robust against rotation and partial occlusion.",
            features: [
                "Minutiae extraction (ridge endings and bifurcations)",
                "Image enhancement and binarization",
                "Fast matching algorithm",
                "Secure template storage"
            ],
            links: {
                github: "https://github.com/Sushrutha05/FingerSense"
            }
        },
        {
            id: "tabkeep",
            title: "TabKeep",
            subtitle: "Browser Resource Manager",
            description: "Intelligent chrome extension for managing tab clutter and memory usage.",
            image: "/tabkeep/screenshot.png",
            tags: ["JavaScript", "Chrome API", "Productivity"],
            link: "/projects/tabkeep",
            overview: "TabKeep is a productivity-focused Chrome extension that helps users manage their browser tabs efficiently. It allows users to save groups of tabs, suspend inactive tabs to save memory, and quickly restore sessions. It's designed to reduce browser clutter and improve system performance.",
            features: [
                "Save and restore tab sessions",
                "Auto-suspend inactive tabs",
                "Search across open tabs",
                "Dark mode support"
            ],
            links: {
                github: "https://github.com/Sushrutha05/Tab-Manager"
            }
        },
        {
            id: "text-to-pdf",
            title: "TextToPDF",
            subtitle: "Document Conversion Tool",
            description: "Efficient utility for converting raw text files into formatted PDF documents.",
            image: "/texttopdf/texttopdf.png",
            tags: ["Python", "File Processing", "Automation"],
            link: "/projects/text-to-pdf",
            overview: "TextToPDF is a simple yet powerful utility for converting text files into professional-looking PDF documents. It supports custom fonts, page numbering, and margin adjustments. It's ideal for automating report generation or archiving text data.",
            features: [
                "Batch processing of text files",
                "Customizable font and layout settings",
                "Automatic table of contents generation",
                "Standalone .exe for easy installation"
            ],
            links: {
                github: "https://github.com/Sushrutha05/PDF-APP"
            }
        },
        {
            id: "telco-churn",
            title: "Telco Churn",
            subtitle: "Customer Retention Analysis",
            description: "Predicting customer churn in the telecom industry using machine learning models.",
            tags: ["Python", "Scikit-Learn", "Data Analysis", "EDA"],
            link: "/projects/telco-churn",
            overview: "This project focuses on predicting customer churn using the Telco Customer Churn dataset. It analyzes customer behavior and service usage patterns to determine the likelihood of a customer leaving their telecom provider. The goal is to build a robust machine learning pipeline for classification and pattern discovery.",
            features: [
                "Data Preprocessing: Handling missing values, encoding categorical variables, feature scaling",
                "Exploratory Data Analysis (EDA): Analyzing churn distribution, feature correlations, and patterns",
                "Model Training: Logistic Regression, Decision Trees, Random Forest, XGBoost",
                "Evaluation: Accuracy, Precision, Recall, and F1-score metrics"
            ],
            links: {
                github: "https://github.com/Sushrutha05/Telco-Customer-Churn"
            }
        },
        {
            id: "iris-ml-model",
            title: "Iris ML Model Comparison",
            subtitle: "Classification & Regression Analysis",
            description: "Comparing various ML models on the classic Iris dataset.",
            tags: ["Python", "Scikit-Learn", "Classification", "Regression"],
            link: "/projects/iris-ml-model",
            overview: "This project explores a variety of machine learning models applied to the classic Iris dataset. While the dataset is inherently a classification problem, both classification and regression models were implemented to deepen understanding of their behavior, performance, and use cases.",
            features: [
                "Classification Models: KNN, Logistic Regression, Decision Tree, SVC",
                "Regression Models: KNN, Linear, Decision Tree, SVR",
                "Performance Analysis: F1 Score 1.0 (Classification), R² Score 1.0 (Regression)"
            ],
            links: {
                github: "https://github.com/Sushrutha05/Iris-ML-Model"
            }
        },
        {
            id: "custom-ml-lib",
            title: "mllib",
            subtitle: "Machine Learning Library in C",
            description: "A lightweight and extensible ML library written in pure C.",
            tags: ["C", "Machine Learning", "Low-level", "No Dependencies"],
            link: "/projects/custom-ml-lib",
            overview: "mllib is a simple, efficient, and extensible machine learning library written in pure C. It’s designed for lightweight usage with no external dependencies and provides core functionality like Linear Regression, with plans to support other ML algorithms in the future. Ideal for C developers who want low-level control over ML logic.",
            features: [
                "Simple and efficient ML algorithms in pure C",
                "No external dependencies",
                "Easy-to-use API via #include \"mllib.h\"",
                "Open-source and extensible for new ML models"
            ],
            links: {
                github: "https://github.com/Sushrutha05/ML-C-Library"
            }
        }
    ],

    certifications: [
        {
            title: "Certified in Cybersecurity (CC)",
            issuer: "ISC2",
            year: "2025",
            id: "ISC2-CC",
            type: "Cybersecurity",
            logo: "/certifications/isc2-cc.png",
            verificationLink: "/certifications/isc2-cc.png"
        },
        {
            title: "Introduction to CIP",
            issuer: "OPSWAT",
            year: "2025",
            id: "OPSWAT-CIP",
            type: "Cybersecurity",
            logo: "/certifications/opswat-cip.png",
            verificationLink: "https://learn.opswatacademy.com/certificate/VZO8NRrayA"
        },
        {
            title: "JavaScript Essentials 1",
            issuer: "Cisco Networking Academy",
            year: "2025",
            id: "CISCO-JSE1",
            type: "Language Proficiency",
            logo: "/certifications/cisco-js-essentials.png",
            verificationLink: "https://www.credly.com/badges/98462389-0fd0-45be-a619-67a069a08966/linked_in_profile"
        },
        {
            title: "Machine Learning with Python",
            issuer: "Udemy",
            year: "2025",
            id: "UDEMY-ML",
            type: "Machine Learning",
            logo: "/certifications/udemy-ml-python.png",
            verificationLink: "https://www.udemy.com/certificate/UC-ea3af07d-7116-433f-b2e2-7b8554efc0d6/"
        },
        {
            title: "Complete Git and Github Course",
            issuer: "Geekster",
            year: "2025",
            id: "GEEKSTER-GIT",
            type: "Version Control",
            logo: "/certifications/geekster-git.png",
            verificationLink: "/certifications/geekster-git.png"
        },
        {
            title: "HTML & CSS Bootcamp",
            issuer: "LetsUpgrade",
            year: "2024",
            id: "LU-HTML-OCT",
            type: "Web Development",
            logo: "/certifications/letsupgrade-html-css-oct.png",
            verificationLink: "https://verify.letsupgrade.in/certificate/LUEHTMLOCT1241189"
        },
        {
            title: "HTML & CSS Bootcamp",
            issuer: "LetsUpgrade",
            year: "2024",
            id: "LU-HTML-SEP",
            type: "Web Development",
            logo: "/certifications/letsupgrade-html-css-sep.png",
            verificationLink: "https://verify.letsupgrade.in/certificate/LUEHTMLSEP1241473"
        },
        {
            title: "Statistics for R Programming",
            issuer: "Infosys Springboard",
            year: "2024",
            id: "INFOSYS-STATS-R",
            type: "Data Science",
            logo: "/certifications/infosys-stats-r.png",
            verificationLink: "/certifications/infosys-stats-r.png"
        },
        {
            title: "Introduction to R Programming",
            issuer: "Infosys Springboard",
            year: "2024",
            id: "INFOSYS-INTRO-R",
            type: "Data Science",
            logo: "/certifications/infosys-intro-r.png",
            verificationLink: "/certifications/infosys-intro-r.png"
        },
        {
            title: "Introduction to Artificial Intelligence",
            issuer: "Infosys Springboard",
            year: "2024",
            id: "INFOSYS-INTRO-AI",
            type: "Artificial Intelligence",
            logo: "/certifications/infosys-intro-ai.png",
            verificationLink: "/certifications/infosys-intro-ai.png"
        },
        {
            title: "Python (Basic)",
            issuer: "HackerRank",
            year: "2024",
            id: "HACKERRANK-PYTHON",
            type: "Language Proficiency",
            logo: "/certifications/hackerrank-python-basic.png",
            verificationLink: "/certifications/hackerrank-python-basic.png"
        },
        {
            title: "Prompt Engineering for ChatGPT",
            issuer: "Great Learning",
            year: "2024",
            id: "GL-PROMPT-ENG",
            type: "AI Engineering",
            logo: "/certifications/gl-prompt-engineering.png",
            verificationLink: "/certifications/gl-prompt-engineering.png"
        },
        {
            title: "Front End Development - HTML",
            issuer: "Great Learning",
            year: "2024",
            id: "GL-FRONTEND-HTML",
            type: "Web Development",
            logo: "/certifications/gl-frontend-html.png",
            verificationLink: "/certifications/gl-frontend-html.png"
        },
        {
            title: "UI/UX for Beginners",
            issuer: "Great Learning",
            year: "2024",
            id: "GL-UIUX",
            type: "Design",
            logo: "/certifications/gl-uiux.png",
            verificationLink: "/certifications/gl-uiux.png"
        },
        {
            title: "Introduction to Scikit Learn",
            issuer: "Great Learning",
            year: "2024",
            id: "GL-SCIKIT-LEARN",
            type: "Machine Learning",
            logo: "/certifications/gl-scikit-learn.png",
            verificationLink: "/certifications/gl-scikit-learn.png"
        },
        {
            title: "OpenCV BootCamp",
            issuer: "OpenCV University",
            year: "2024",
            id: "OPENCV-BOOTCAMP",
            type: "Computer Vision",
            logo: "/certifications/opencv-bootcamp.png",
            verificationLink: "/certifications/opencv-bootcamp.png"
        },
        {
            title: "Python for Beginners",
            issuer: "OpenCV University",
            year: "2024",
            id: "OPENCV-PYTHON",
            type: "Language Proficiency",
            logo: "/certifications/opencv-python.png",
            verificationLink: "/certifications/opencv-python.png"
        }
    ],

    badges: [
        { id: "5b00ca3d-f981-40fb-a841-cc7b24e951e4" },
        { id: "4b823ab6-7d5e-4703-b88d-e6fc360a5006" },
        { id: "98462389-0fd0-45be-a619-67a069a08966" },
        { id: "ca64a94a-8fa7-4e04-aa1f-759130cc2546" },
        { id: "3f8e2ef5-9432-4e03-b525-93a3d9722b28" },
        { id: "17ca4ff9-e680-4d35-ac39-e9c74c432b3a" },
        { id: "cb444099-2b8c-42a7-a7bd-01e1d0a92854" }
    ]
};