import React from 'react';
import { motion } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const Work = () => {
    return (
        <main className="min-h-screen pt-32 pb-20 relative">
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
            
            <SEO
                title="Work"
                description="Explore Sushrutha's portfolio of engineering projects and low-level code explorations."
                keywords="projects, software engineering, portfolio, embedded systems, signals, audio processing"
            />
            
            <section className="container mx-auto px-6 mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="text-machine-accent font-mono text-xs uppercase tracking-widest block mb-3 font-semibold text-glow-cyan">
                        Projects & Experiments
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">Things I've Built</h1>
                    <p className="text-machine-platinum/60 text-lg font-light max-w-2xl leading-relaxed">
                        A catalog of experimental prototypes and systems built to investigate concepts in embedded hardware, signal analysis, computer vision, and machine learning.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-6 relative z-10">
                <div className="space-y-24">
                    {SiteConfig.projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lab-panel p-8 md:p-12 hover:border-machine-accent/50 transition-all duration-300 relative group"
                        >
                            {/* Corner indicators */}
                            <div className="absolute top-2 right-4 font-mono text-[9px] text-machine-border">
                                Project 0{index + 1}
                            </div>

                            {/* Project Header */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-machine-border pb-6">
                                <div>
                                    <span className="text-machine-accent font-mono text-xs mb-1 block uppercase tracking-wider">{project.domain}</span>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">{project.title}</h2>
                                    <p className="text-machine-platinum/50 font-mono text-xs mt-1">{project.subtitle}</p>
                                </div>
                                <Link to={project.link} className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-machine-border group-hover:border-machine-accent text-white hover:bg-machine-accent hover:text-machine-black font-mono text-xs uppercase transition-all duration-250">
                                    Learn More <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Project Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                {/* Image Area */}
                                {project.image && (
                                    <div className="lg:col-span-7 relative overflow-hidden bg-machine-black/40 aspect-video border border-machine-border/60">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                                        />
                                    </div>
                                )}

                                {/* Details Area */}
                                <div className={`${project.image ? 'lg:col-span-5' : 'lg:col-span-12'} flex flex-col justify-between space-y-6`}>
                                    <div className="space-y-4 font-sans text-sm text-machine-platinum/80 leading-relaxed pl-2 border-l border-machine-border">
                                        <div>
                                            <strong className="text-machine-accent font-mono text-[11px] uppercase block mb-0.5">The Problem:</strong>
                                            <p className="font-light text-xs sm:text-sm">{project.problem}</p>
                                        </div>
                                        <div>
                                            <strong className="text-machine-accent-amber font-mono text-[11px] uppercase block mb-0.5">Solution:</strong>
                                            <p className="font-light text-xs sm:text-sm">{project.solution || project.description}</p>
                                        </div>
                                        <div>
                                            <strong className="text-machine-accent font-mono text-[11px] uppercase block mb-0.5">What I Learned:</strong>
                                            <p className="font-light text-xs sm:text-sm">{project.learning}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <strong className="text-white font-mono text-[11px] uppercase block mb-2">Technologies Used:</strong>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-2 py-1 bg-machine-black border border-machine-border/60 text-machine-platinum/60 font-mono text-[10px]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link to={project.link} className="md:hidden flex items-center justify-center gap-2 px-6 py-3 border border-machine-accent text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                        Learn More <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Work;
