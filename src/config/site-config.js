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
            id: "naadswar",
            title: "NaadSwar",
            subtitle: "Real-time pitch detection for Indian classical music",
            domain: "Audio Processing",
            goal: "Provide musicians with real-time feedback on swaras and octaves.",
            learning: "Learined about Fast Fourier Transforms (FFT) and frequency extraction from microphone inputs.",
            description: "A pitch recognition tool built to help vocalists and instrumentalists see their exact pitch and swara mapping in real-time.",
            image: "/naadswar/image.png",
            tags: ["Signal Processing", "Flutter", "Real-time Audio", "FFT"],
            link: "/naadswar-premium",
            problem: "Indian Classical Music relies on precise microtones (Shrutis) that standard Western chromatic tuners fail to capture accurately. I wanted to build a tuner that understands the scale intervals and note types of classical vocals.",
            solution: "NaadSwar maps incoming frequency inputs to the closest Swar across three classical octaves (Mandra, Madhya, Taar) in real-time.",
            architecture: "Built with Flutter for cross-platform interface rendering. Audio inputs from the microphone are analyzed using a Fast Fourier Transform (FFT) calculation to extract fundamental pitch values.",
            outcome: "A simple, low-latency pitch visualizer that provides vocalists with clear indicators of their intonation.",
            features: [
                "Microphone frequency extraction using FFT analysis",
                "Debug settings to tune audio gain and buffer sizing",
                "Visual swar feedback histogram",
                "Reference table of Indian classical notes and saptaks",
                "Adjustable base Sa frequency setup"
            ],
            links: {
                external: {
                    url: "https://drive.google.com/uc?export=download&id=1VkXRROFYG7HVIse-xmvWeDH5XDb_vsbq",
                    label: "Download App"
                }
            }
        },
        {
            id: "esp32-mp3",
            title: "ESP32 MP3 Player",
            subtitle: "Hardware music player built using ESP32 and I2S audio",
            domain: "Embedded Systems",
            goal: "Build a physical MP3 player to understand how digital audio is handled at the hardware level.",
            learning: "Learned about hardware interfaces, microcontrollers, memory layouts, and communication protocols like I2S.",
            description: "A microcontroller project that reads MP3 files from storage and decodes them to sound waves via an external amplifier.",
            image: "/esp32-mp3.png",
            tags: ["ESP32", "C++", "I2S Audio", "SPIFFS", "Embedded Systems"],
            link: "/projects/esp32-mp3",
            problem: "Using modern operating systems makes it hard to see how digital bytes are converted to analog sound pressure waves.",
            solution: "I wired an ESP32 microcontroller to an external digital-to-analog converter (DAC) and wrote firmware to decode and play MP3 files.",
            architecture: "Written in C++ using the Helix library to decode MP3 stream bytes. The decoded PCM data is transferred over the I2S protocol to a MAX98357A amplifier connected to a speaker.",
            outcome: "A working prototype that reads files from the ESP32's flash memory and plays audio smoothly using buttons for hardware interrupts.",
            features: [
                "Reads music files from the local SPIFFS filesystem",
                "Buffered I2S data stream routing to prevent playback stuttering",
                "Helix software decoder optimization for microcontroller cores",
                "Interrupt-driven buttons for play, pause, and volume control"
            ],
            links: {
                github: "https://github.com/Sushrutha05/ESP32-Audio-Player"
            }
        },
        {
            id: "ann-from-scratch",
            title: "ANN From Scratch",
            subtitle: "Vectorized neural network library implemented in NumPy",
            domain: "Machine Learning Fundamentals",
            goal: "Write model layers and learning steps manually to understand the mathematical concepts.",
            learning: "Learned matrix calculus, backpropagation formulas, and vector mathematics.",
            description: "A machine learning project built with Python and NumPy to demonstrate how backpropagation works step-by-step.",
            image: "/ann-from-scratch.png",
            tags: ["Python", "NumPy", "Matrix Calculus", "Machine Learning"],
            link: "/projects/ann-from-scratch",
            problem: "Standard libraries make it easy to train models in a single line, which conceals the mathematics of how neural networks actually optimize parameters.",
            solution: "I built a feedforward neural network from scratch using only matrix math in NumPy, implementing both forward passes and manual parameter updates.",
            architecture: "Designed as modular layer objects with custom forward and backward functions, implementing derivatives for activations (ReLU, Sigmoid, Softmax) and loss calculations.",
            outcome: "Successfully classified handwritten digits from standard test datasets, validating the correctness of the underlying calculus codes.",
            features: [
                "Vectorized forward passes implementing basic matrix products",
                "Manual backpropagation implementing chain rule derivative steps",
                "Layer functions supporting ReLU, Sigmoid, and Softmax activations",
                "Mini-batch gradient descent updates calculated without external framework aid"
            ],
            links: {
                github: "https://github.com/Sushrutha05/ANN-From-Scratch"
            }
        },
        {
            id: "middle-finger-blur",
            title: "Middle Finger Blur",
            subtitle: "Detects specific hand gestures and applies real-time blur",
            domain: "Computer Vision",
            goal: "Detect hand shapes in a video feed and blur out specific gestures.",
            learning: "Learned about image coordinate systems, landmark tracking, and real-time frames-per-second constraints.",
            description: "A computer vision utility that uses hand tracking coordinates to identify targets and apply a visual blur filter.",
            image: "/fingersense/FingerSenseDemo.png",
            tags: ["Computer Vision", "Python", "OpenCV", "MediaPipe", "Real-Time Systems"],
            link: "/projects/middle-finger-blur",
            problem: "I wanted to learn how computer vision can detect gestures and perform localized filters in a live video stream without causing lag.",
            solution: "I built a Python script that tracks hand landmark points, determines if a gesture matches target coordinate configurations, and applies a blur filter.",
            architecture: "Utilizes MediaPipe for hand landmark coordinates, runs simple distance calculations between joints to detect gesture matches, and uses OpenCV to render a Gaussian blur over the target area.",
            outcome: "A simple gesture-matching program that runs in real-time on standard laptop cameras.",
            features: [
                "Hand coordinate tracking using MediaPipe landmarks",
                "Simple vector calculation based on finger joint angles",
                "Temporal filters to reduce flickering detections",
                "Gaussian blur applied dynamically over hand coordinates"
            ],
            links: {
                github: "https://github.com/Sushrutha05/FingerSense"
            }
        },
        {
            id: "modular-controller",
            title: "Modular Controller",
            subtitle: "Customizable gamepad hardware with hot-swappable buttons",
            domain: "Embedded Hardware",
            goal: "Create a game controller with modular buttons to explore hardware modularity.",
            learning: "Learned about hardware buses (I2C, SPI), electronic layouts, and custom device firmware.",
            description: "A physical game controller prototype that allows modular blocks to be swapped out dynamically.",
            image: "/nexus/hero.png",
            tags: ["C/C++", "Embedded Hardware", "I2C", "SPI", "Product Modularity"],
            link: "/nexus-modular",
            problem: "Traditional game controllers are glued or soldered together, making it difficult to replace worn-out joysticks or reconfigure button layouts.",
            solution: "I designed a prototype gamepad with hot-swappable hardware modules, letting buttons and sticks connect and configure on the fly.",
            architecture: "Uses a central microcontroller to communicate with modular input slots over I2C and SPI buses, using a custom protocol to detect when a module is plugged in.",
            outcome: "A physical prototype showcasing layout flexibility and automatic input routing in microcontroller firmware.",
            features: [
                "Firmware protocol to identify hot-swapped components in C++",
                "Input routing utilizing standard I2C and SPI communication protocols",
                "Transparent cover showcasing internal wires and circuits",
                "Low-latency input processing for responsive gaming controls"
            ],
            links: {
                demo: "/nexus-modular"
            }
        }
    ],

    certifications: [
        {
            title: "Docker:A Project-Based Approach To Learning",
            issuer: "Udemy",
            year: "2026",
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