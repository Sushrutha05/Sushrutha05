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
        proficient: ["Docker", "Java", "SQL", "Git", "TensorFlow", "Scikit-Learn"],
        familiar: ["AWS", "C++", "Flutter"]
    },

    projects: [
        {
            id: "leetgitbot",
            title: "LeetGitBot",
            subtitle: "Automated Coding Progress Tracking for Discord Communities",
            description: "A Discord bot that automates LeetCode progress tracking and GitHub activity updates to encourage consistent problem-solving and peer accountability.",
            image: "/leetgitbot/image.png",
            tags: ["Python", "Discord API", "Automation", "REST APIs", "Developer Productivity"],
            link: "/projects/leetgitbot",
            problem: "Developers often struggle to maintain consistency in daily coding practice and lack a unified, social way to track progress across different platforms like LeetCode and GitHub.",
            solution: "I engineered a Discord bot that bridges this gap by automating the retrieval and broadcasting of coding metrics. It creates a feedback loop of accountability by visualizing daily achievements within the community.",
            architecture: "Built with Python and discord.py, the bot interfaces with LeetCode's GraphQL API and GitHub's REST API. It uses a polling mechanism to fetch updates and maintains a local database for user mapping and streak tracking.",
            outcome: "The bot successfully drives engagement in developer communities, transforming individual coding efforts into a shared, gamified experience that encourages consistency.",
            features: [
                "Automated retrieval of LeetCode statistics via APIs",
                "Real-time progress updates posted to Discord channels",
                "GitHub activity integration to reflect coding consistency",
                "Command-based controls for users and servers",
                "Designed for low-latency, scalable community use"
            ],
            links: {
                github: "https://github.com/Sushrutha05/LeetGitBot"
            }
        },
        {
            id: "naadswar",
            title: "NaadSwar",
            subtitle: "Acoustic Analysis Engine",
            description: "Real-time frequency analysis and pitch correction system for Indian Classical Music.",
            image: "/naadswar/image.png",
            tags: ["Signal Processing", "Flutter", "Real-time Audio"],
            link: "/projects/naadswar",
            problem: "Indian Classical Music relies on precise microtones (Shrutis) that standard Western tuners fail to capture accurately. Musicians need a tool that understands the nuances of the varying saptaks and note types.",
            solution: "NaadSwar is a Flutter-based mobile application designed specifically for this context. It performs real-time pitch detection and maps frequencies to the closest Swar, supporting all three octaves (Mandra, Madhya, Taar).",
            architecture: "The app leverages Flutter for a high-performance cross-platform UI. Under the hood, it utilizes native audio processing libraries to perform Fast Fourier Transform (FFT) on microphone input, converting raw audio signals into precise frequency data in real-time.",
            outcome: "A minimal, low-latency tool that provides vocalists and instrumentalists with immediate, accurate visual feedback, aiding in the perfection of intonation.",
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
            subtitle: "Real-Time Gesture Intent Detection System",
            description: "Real-time detection of offensive hand gestures with adaptive blur-based censorship using computer vision.",
            image: "/fingersense/FingerSenseDemo.png",
            tags: ["Computer Vision", "Python", "OpenCV", "MediaPipe", "HCI"],
            link: "/projects/fingersense",
            problem: "Automated content moderation in live video feeds is challenging, particularly when it comes to detecting and censoring specific, offensive gestures in real-time without false positives.",
            solution: "FingerSense is a computer vision system that identifies offensive hand gestures and applies localized censorship. It focuses on intent recognition rather than just shape matching to ensure accuracy.",
            architecture: "The system uses Python, OpenCV, and MediaPipe for hand landmark detection. It implements a custom logic layer that analyzes the relative positions of finger landmarks and uses temporal voting to stabilize detections across video frames.",
            outcome: "A robust, real-time censorship tool that effectively blurs offensive gestures while handling motion blur and partial occlusions, suitable for live streaming applications.",
            features: [
                "Finger-level landmark analysis using MediaPipe",
                "Middle-finger gesture detection logic",
                "Temporal voting to reduce flicker and false positives",
                "Localized Gaussian blur for real-time censorship",
                "Graceful handling of hand entry and exit from frame"
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
            problem: "Modern workflows often lead to an explosion of open browser tabs, causing high memory usage, system slowdowns, and cognitive overload for the user.",
            solution: "TabKeep is a Chrome extension designed to declutter the browser. It allows users to save active sessions, suspend inactive tabs to free up RAM, and organize their digital workspace.",
            architecture: "Built with JavaScript and the Chrome Extensions API, it interacts with the `tabs`, `storage`, and `alarms` permissions to manage tab states and persist session data locally.",
            outcome: "Significantly improved browser performance and user focus by reducing memory footprint and providing a structured way to manage browsing sessions.",
            features: [
                "Save and restore tab sessions",
                "Auto-suspend inactive tabs",
                "Search across open tabs",
                "Dark mode support"
            ],
            links: {
                github: "https://github.com/Sushrutha05/TabKeep"
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
            problem: "Converting simple text files into professional, printable PDF documents often requires heavy word processing software or manual formatting, which is inefficient for batch operations.",
            solution: "TextToPDF is a lightweight desktop utility that automates this conversion. It provides a simple interface to convert text files while handling pagination, fonts, and margins automatically.",
            architecture: "Written in Python, the tool uses the FPDF library for PDF generation. It parses text input and renders it onto PDF pages, handling layout calculations dynamically.",
            outcome: "A streamlined, standalone executable that simplifies document archiving and report generation for users who deal with raw text data.",
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
            problem: "Customer churn is a critical issue for telecom providers, directly impacting revenue. Identifying at-risk customers before they leave is essential for retention strategies.",
            solution: "I developed a machine learning pipeline to analyze customer behavior and predict the likelihood of churn. This enables proactive intervention.",
            architecture: "The project uses a Python data science stack (Pandas, Scikit-Learn). It involves a comprehensive pipeline: data cleaning, exploratory data analysis (EDA), feature engineering, and the training of ensemble models like Random Forest and XGBoost.",
            outcome: "The model provides actionable insights into the key drivers of churn and delivers accurate predictions, allowing businesses to target retention efforts effectively.",
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
            problem: "For students and practitioners, understanding the practical trade-offs between different machine learning algorithms can be abstract without direct comparison.",
            solution: "This project serves as a rigorous benchmark study, implementing and comparing multiple classification and regression algorithms on the standard Iris dataset.",
            architecture: "Implemented in Python using Scikit-Learn, the project systematically trains and evaluates models like KNN, Logistic Regression, SVM, and Decision Trees, logging performance metrics for comparison.",
            outcome: "A clear, empirical demonstration of how different algorithms perform on the same data, providing a reference for model selection and behavior.",
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
            problem: "High-level libraries like TensorFlow or Scikit-Learn abstract away the mathematical foundations of machine learning, making it difficult to grasp the low-level mechanics.",
            solution: "mllib is a custom-built machine learning library written in pure C. It implements core algorithms from scratch without external dependencies, prioritizing educational clarity and efficiency.",
            architecture: "The library is architected around a custom matrix operations engine. It implements algorithms like Linear Regression using Gradient Descent, managing memory manually for maximum performance.",
            outcome: "A highly efficient, portable library that demonstrates the internal workings of ML algorithms and serves as a solid foundation for embedded ML applications.",
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
            title: "Docker:A Project-Based Approach To Learning",
            issuer: "Udemy",
            year: "2025",
            id: "Udemy-DO",
            type: "DevOps",
            logo: "/certifications/udemy-docker-a-project-based-approach-to-learning.png",
            verificationLink: "https://www.udemy.com/certificate/UC-2c9c4f33-3bde-4850-9280-e182ae2b9c1c/"
        },
        {
            title: "Database Management Essentials",
            issuer: "Coursera",
            year: "2025",
            id: "Coursera-DB",
            type: "Database",
            logo: "/certifications/coursera-database-management-essentials.png",
            verificationLink: "https://coursera.org/verify/YQIEW90HTPHZ"
        },
        {
            title: "AI Infrastructure And Operational Fundamentals",
            issuer: "Coursera",
            year: "2025",
            id: "Coursera-AI",
            type: "AI",
            logo: "/certifications/coursera-ai-infrastructure-and-operational-fundamentals.png",
            verificationLink: "https://coursera.org/verify/X6RRP2D8A108"
        },
        {
            title: "Introduction To SQL for Big Query And Cloud SQL",
            issuer: "Coursera",
            year: "2025",
            id: "Coursera-SQL",
            type: "SQL",
            logo: "/certifications/coursera-introduction-to-sql-for-bigquery-and-cloud-sql.png",
            verificationLink: "https://coursera.org/verify/ZXHTGUTU41LH"
        },
        {
            title: "Introduction To Git And Github",
            issuer: "Coursera",
            year: "2025",
            id: "Coursera-Git",
            type: "Git",
            logo: "/certifications/coursera-introduction-to-git-and-github.png",
            verificationLink: "https://coursera.org/verify/S7ZEHBRXPGMX"
        },
        {
            title: "Developing with GitHub Copilot and VS Code",
            issuer: "Coursera",
            year: "2025",
            id: "Coursera-Copilot",
            type: "Copilot",
            logo: "/certifications/coursera-developing-with-github-copilot-and-vs-code.png",
            verificationLink: "https://coursera.org/verify/S87ONUO7YGMW"
        },
        {
            title: "Introduction to Responsible AI",
            issuer: "Coursera",
            year: "2025",
            id: "Coursera-Responsible-AI",
            type: "AI",
            logo: "/certifications/coursera-introduction-to-responsible-ai.png",
            verificationLink: "https://coursera.org/verify/I391YXL86A25"
        },
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
        { id: "98462389-0fd0-45be-a619-67a069a08966" },
        { id: "ca64a94a-8fa7-4e04-aa1f-759130cc2546" },
        { id: "3f8e2ef5-9432-4e03-b525-93a3d9722b28" },
        { id: "17ca4ff9-e680-4d35-ac39-e9c74c432b3a" },
        { id: "cb444099-2b8c-42a7-a7bd-01e1d0a92854" }
    ]
};