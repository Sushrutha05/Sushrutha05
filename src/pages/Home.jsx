import React, { Suspense } from 'react';
import { m } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Linkedin, Mail, FileText, ChevronRight, HelpCircle, Code, Settings } from 'lucide-react';
import SEO from '../components/seo/SEO';

const AboutSection = React.lazy(() => import('../components/home/AboutSection'));
const SkillsSection = React.lazy(() => import('../components/home/SkillsSection'));

const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const Home = () => {
    return (
        <main className="min-h-screen pb-20 relative">
            <SEO
                title="Home"
                description="Sushrutha's portfolio showcasing hands-on engineering explorations in embedded systems, signal processing, and systems software."
            />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden border-b border-machine-border/40">
                {/* Blueprint grid layout */}
                <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-machine-black/50 to-machine-black pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <m.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Simple student badge */}
                        <m.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-machine-border bg-machine-dark/80 backdrop-blur-sm font-mono text-[11px] text-machine-platinum/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-machine-accent" />
                            <span>Engineering Student & Programmer</span>
                        </m.div>

                        {/* Name Block */}
                        <m.div variants={fadeInUp} className="mb-4">
                            <h1 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none">
                                Sushrutha
                            </h1>
                        </m.div>

                        {/* Subtitles / Roles */}
                        <m.div variants={fadeInUp} className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-machine-accent font-mono text-sm md:text-base border-l-2 border-machine-border pl-4">
                            <span>Engineering Student</span>
                            <span className="text-machine-border">•</span>
                            <span>Programmer</span>
                            <span className="text-machine-border">•</span>
                            <span>Builder</span>
                        </m.div>

                        {/* Primary Headline */}
                        <m.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-display font-medium text-white mb-6 leading-tight tracking-tight">
                            I build projects to understand how things work underneath.
                        </m.h2>

                        {/* Supporting Text */}
                        <m.p variants={fadeInUp} className="text-machine-platinum/70 text-base md:text-lg leading-relaxed mb-12 max-w-2xl font-light">
                            I am a student driven by curiosity. I enjoy building things to learn about embedded hardware, audio signal processing, and low-level computer concepts.
                        </m.p>

                        {/* Actions & Links */}
                        <m.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 md:gap-6">
                            {/* Resume button */}
                            <a 
                                href={SiteConfig.site.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-machine-accent hover:bg-machine-accent/90 text-machine-black font-mono font-bold text-xs uppercase tracking-widest transition-all duration-200"
                            >
                                <FileText className="w-4 h-4" /> Resume.pdf
                            </a>
                            
                            {/* Navigation links */}
                            <a 
                                href="https://github.com/Sushrutha05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-machine-border hover:border-machine-accent/60 bg-machine-dark/40 text-machine-platinum hover:text-white transition-all"
                                title="GitHub Profile"
                             >
                                <Github className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/sushrutha-nayak-528775293"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-machine-border hover:border-machine-accent/60 bg-machine-dark/40 text-machine-platinum hover:text-white transition-all"
                                title="LinkedIn Profile"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a 
                                href="#contact-section"
                                className="p-3 border border-machine-border hover:border-machine-accent/60 bg-machine-dark/40 text-machine-platinum hover:text-white transition-all"
                                title="Contact Details"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </m.div>
                    </m.div>
                </div>
            </section>

            {/* Suspended Home Sections */}
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-machine-accent font-mono">Loading...</div>}>
                {/* About mindset section */}
                <AboutSection />
                
                {/* What I'm Exploring section */}
                <SkillsSection />
                
                {/* Featured Projects section */}
                <section className="container mx-auto px-6 py-32 border-t border-machine-border/60">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 text-center"
                    >
                        <span className="text-machine-accent-amber font-mono text-xs uppercase tracking-widest block mb-3 font-semibold text-glow-amber">
                            Projects & Experiments
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Things I've Built</h2>
                        <p className="text-machine-platinum/60 text-sm max-w-xl mx-auto font-mono">
                            A selection of projects built to explore programming, systems, and hardware.
                        </p>
                    </m.div>

                    <div className="space-y-16">
                        {SiteConfig.projects.map((project, idx) => (
                            <m.article
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="lab-panel p-8 md:p-12 hover:border-machine-accent/50 transition-all duration-300 relative group"
                            >
                                {/* Corner indicators */}
                                <div className="absolute top-2 right-4 font-mono text-[9px] text-machine-border">
                                    Project 0{idx + 1}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                    <div className="lg:col-span-7 space-y-6">
                                        <div>
                                            <span className="text-machine-accent font-mono text-xs block mb-1 uppercase tracking-wider">
                                                {project.domain}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-machine-platinum/50 font-mono text-xs mt-1">{project.subtitle}</p>
                                        </div>

                                        <div className="space-y-4 font-sans text-sm text-machine-platinum/80 leading-relaxed border-l-2 border-machine-border pl-4">
                                            <div>
                                                <strong className="text-machine-accent font-mono text-xs uppercase block mb-1">Goal:</strong>
                                                <p className="font-light">{project.goal}</p>
                                            </div>
                                            <div>
                                                <strong className="text-machine-accent-amber font-mono text-xs uppercase block mb-1">The Problem:</strong>
                                                <p className="font-light">{project.problem}</p>
                                            </div>
                                            <div>
                                                <strong className="text-machine-accent font-mono text-xs uppercase block mb-1">What I Learned:</strong>
                                                <p className="font-light">{project.learning}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-machine-black border border-machine-border/60 text-machine-platinum/60 font-mono text-[10px]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
                                        {project.image && (
                                            <div className="w-full aspect-video border border-machine-border/60 bg-machine-black/40 overflow-hidden relative">
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title} 
                                                    className="w-full h-full object-contain opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
                                                />
                                            </div>
                                        )}
                                        
                                        <div className="flex justify-end pt-4">
                                            <Link 
                                                to={project.link}
                                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-machine-border group-hover:border-machine-accent text-white hover:bg-machine-accent hover:text-machine-black font-mono text-xs uppercase transition-all duration-200"
                                            >
                                                Learn More <ArrowUpRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </m.article>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/work" className="inline-flex items-center gap-1.5 font-mono text-xs text-machine-accent hover:text-white transition-colors uppercase tracking-widest">
                            View all projects <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

                {/* Current Learning Journey Timeline */}
                <section className="container mx-auto px-6 py-32 border-t border-machine-border/60 relative">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 text-center"
                    >
                        <span className="text-machine-accent font-mono text-xs uppercase tracking-widest block mb-3 font-semibold text-glow-cyan">
                            Learning Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Active Areas of Study</h2>
                        <p className="text-machine-platinum/60 text-sm max-w-xl mx-auto font-mono">
                            Topics I'm currently studying to deepen my understanding of computer systems.
                        </p>
                    </m.div>

                    <div className="max-w-3xl mx-auto relative border-l border-machine-border/60 pl-8 space-y-12">
                        {[
                            {
                                topic: "Modern C++",
                                desc: "Learning about smart pointers, memory management, move semantics, and template internals.",
                                status: "Active Study"
                            },
                            {
                                topic: "Low-Level Programming",
                                desc: "Studying how code compiles to Assembly, register allocation, and executing basic binary analysis.",
                                status: "Current Focus"
                            },
                            {
                                topic: "Embedded Development",
                                desc: "Exploring microcontrollers, hardware registers, SPI/I2C protocols, and writing basic device drivers.",
                                status: "Hands-on Projects"
                            },
                            {
                                topic: "Computer Networks",
                                desc: "Learning how network packets are constructed, socket programming in C, and TCP/IP stack fundamentals.",
                                status: "Active Study"
                            },
                            {
                                topic: "System Internals",
                                desc: "Studying database storage layouts, caching levels, and index execution logic.",
                                status: "Reading & Research"
                            }
                        ].map((item, idx) => (
                            <m.div 
                                key={item.topic}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative group"
                            >
                                {/* Circle timeline marker */}
                                <div className="absolute -left-[38px] top-1.5 w-[20px] h-[20px] border border-machine-border bg-machine-black flex items-center justify-center group-hover:border-machine-accent transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-machine-accent" />
                                </div>

                                <div className="lab-panel p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                        <h3 className="text-white font-display font-bold text-lg">{item.topic}</h3>
                                        <span className="text-machine-accent font-mono text-[9px] uppercase font-semibold">
                                            [{item.status}]
                                        </span>
                                    </div>
                                    <p className="text-machine-platinum/70 text-sm font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </section>

                {/* Future Experiments */}
                <section className="container mx-auto px-6 py-32 border-t border-machine-border/60">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 text-center"
                    >
                        <span className="text-machine-accent font-mono text-xs uppercase tracking-widest block mb-3 font-semibold text-glow-cyan">
                            Next Steps
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Planned Experiments</h2>
                        <p className="text-machine-platinum/60 text-sm max-w-xl mx-auto font-mono">
                            Ideas and engineering topics I hope to tackle in future projects to learn how they work.
                        </p>
                    </m.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                challenge: "Write a Toy Compiler",
                                focus: "Lexer, AST generation, and compiling a simple language into target instructions.",
                                category: "Compiler Design"
                            },
                            {
                                challenge: "Write a Simple OS Kernel",
                                focus: "Creating a basic x86 bootloader and learning about memory paging and task scheduler logic.",
                                category: "Operating Systems"
                            },
                            {
                                challenge: "Audio Signal Processing",
                                focus: "Designing digital filters, Z-transforms, and real-time audio convolution functions.",
                                category: "Digital Signal Processing"
                            },
                            {
                                challenge: "Custom PCB Design",
                                focus: "Designing schematic boards in KiCad, routing traces, and soldering components.",
                                category: "Hardware Design"
                            },
                            {
                                challenge: "Network Packet Analyzer",
                                focus: "Reading raw sockets to parse packets and analyze standard networking protocol formats.",
                                category: "Networking"
                            }
                        ].map((exp, idx) => (
                            <m.div
                                key={exp.challenge}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="lab-panel p-6 border-dashed hover:border-solid hover:border-machine-accent/60 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start gap-4 mb-4">
                                    <HelpCircle className="w-5 h-5 text-machine-accent" />
                                    <span className="text-machine-platinum/40 font-mono text-[9px] uppercase tracking-wider">{exp.category}</span>
                                </div>
                                <h3 className="text-white font-display font-semibold text-base mb-2">{exp.challenge}</h3>
                                <p className="text-machine-platinum/60 text-xs leading-relaxed font-light font-mono">
                                    {exp.focus}
                                </p>
                            </m.div>
                        ))}
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="bg-machine-dark py-24 border-t border-machine-border/60 text-center relative overflow-hidden">
                    <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="blueprint-divider mb-12 blueprint-divider-cyan" />
                        <h2 className="text-machine-accent font-mono text-xs uppercase tracking-widest mb-6 font-semibold">
                            Approach
                        </h2>
                        
                        <div className="max-w-2xl mx-auto space-y-6 text-white font-display font-medium text-lg md:text-xl italic leading-relaxed text-glow-subtle">
                            <p>"I learn best by building."</p>
                            <p>"Understanding fundamentals creates better engineers."</p>
                            <p>"Every project is an opportunity to explore something new."</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact-section" className="container mx-auto px-6 py-32 border-t border-machine-border/60">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center space-y-8"
                    >
                        <span className="text-machine-accent font-mono text-xs uppercase tracking-widest block font-semibold text-glow-cyan">
                            Get in Touch
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Let's Connect</h2>
                        <p className="text-machine-platinum/60 text-base md:text-lg leading-relaxed font-light">
                            Have a question about one of my projects, want to discuss programming, or just want to chat about hardware and software engineering? Feel free to reach out.
                        </p>

                        <div className="blueprint-divider my-8" />

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-mono text-sm pt-4">
                            <a 
                                href={SiteConfig.social.email}
                                className="flex items-center gap-2.5 px-6 py-3 border border-machine-border hover:border-machine-accent bg-machine-black/40 text-machine-platinum hover:text-white transition-all w-full sm:w-auto justify-center"
                            >
                                <Mail className="w-4 h-4 text-machine-accent" /> sushruthar05@gmail.com
                            </a>
                            <a 
                                href={SiteConfig.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 px-6 py-3 border border-machine-border hover:border-machine-accent bg-machine-black/40 text-machine-platinum hover:text-white transition-all w-full sm:w-auto justify-center"
                            >
                                <Linkedin className="w-4 h-4 text-machine-accent" /> linkedin.com/in/sushrutha-nayak
                            </a>
                            <Link 
                                to="/contact"
                                className="flex items-center gap-2.5 px-6 py-3 border border-machine-border hover:border-machine-accent bg-machine-black/40 text-machine-platinum hover:text-white transition-all w-full sm:w-auto justify-center"
                            >
                                <Settings className="w-4 h-4 text-machine-accent" /> Send Message
                            </Link>
                        </div>
                    </m.div>
                </section>
            </Suspense>
        </main>
    );
};

export default Home;
