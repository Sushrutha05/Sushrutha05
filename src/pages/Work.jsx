import React from 'react';
import { motion } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { ArrowUpRight, Layers, Zap, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <main className="min-h-screen pt-32 pb-20">
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">ENGINEERED<br />SOLUTIONS</h1>
                    <p className="text-machine-platinum/60 text-lg font-light max-w-2xl">
                        A collection of high-performance systems and applications designed for scale, efficiency, and user experience.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-6">
                <div className="space-y-32">
                    {SiteConfig.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group"
                        >
                            {/* Project Header */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/10 pb-4">
                                <div>
                                    <span className="text-machine-accent font-mono text-xs mb-2 block">0{index + 1} // {project.tags[0].toUpperCase()}</span>
                                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">{project.title}</h2>
                                    <p className="text-machine-platinum/60 text-lg mt-2">{project.subtitle}</p>
                                </div>
                                <Link to={project.link} className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                    Explore System <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Project Card */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                {/* Image Area */}
                                <div className="lg:col-span-8 relative overflow-hidden bg-machine-surface aspect-video group-hover:border-machine-accent/50 border border-white/5 transition-colors duration-500">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain bg-machine-black/50 transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />


                                </div>

                                {/* Details Area */}
                                <div className="lg:col-span-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Overview</h3>
                                        <p className="text-machine-platinum/60 leading-relaxed mb-8 font-light text-sm">
                                            {project.description}
                                        </p>

                                        <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-3 py-1 border border-white/10 text-machine-platinum/60 text-xs uppercase tracking-wider hover:border-machine-accent/50 hover:text-white transition-colors cursor-default">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link to={project.link} className="md:hidden mt-8 flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                                        Explore System <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Work;
