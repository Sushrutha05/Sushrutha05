import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { ArrowLeft, CheckCircle, Layers, Github, ExternalLink, Download } from 'lucide-react';
import SEO from '../components/seo/SEO';

const ProjectPage = () => {
    const { id } = useParams();
    const project = SiteConfig.projects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/work" replace />;
    }

    return (
        <main className="min-h-screen pt-32 pb-20 relative">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

            <SEO
                title={project.title}
                description={project.description}
                keywords={project.tags.join(', ')}
                image={project.image}
                url={project.link}
            />
            
            <section className="container mx-auto px-6 mb-12 relative z-10">
                <Link to="/work" className="inline-flex items-center gap-2 text-machine-platinum/60 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-machine-accent font-mono text-xs mb-3 block">Project Detail</span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">{project.title}</h1>
                    <p className="text-xl text-machine-platinum/60 font-light max-w-2xl">{project.subtitle}</p>
                </motion.div>
            </section>

            {project.image && (
                <section className="container mx-auto px-6 mb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-video w-full bg-machine-black/40 border border-machine-border/60 overflow-hidden flex items-center justify-center p-4"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-contain opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-machine-black via-transparent to-transparent opacity-60" />
                    </motion.div>
                </section>
            )}

            <section className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12"
                        >
                            {/* Problem & Solution */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-xs font-mono font-bold text-machine-accent uppercase tracking-widest mb-4">The Challenge / Problem</h2>
                                    <p className="text-machine-platinum/80 text-base leading-relaxed font-light pl-4 border-l border-machine-border">
                                        {project.problem || project.description}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-xs font-mono font-bold text-machine-accent uppercase tracking-widest mb-4">The Solution</h2>
                                    <p className="text-machine-platinum/80 text-base leading-relaxed font-light pl-4 border-l border-machine-border">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Architecture */}
                            {project.architecture && (
                                <div>
                                    <h2 className="text-xs font-mono font-bold text-machine-accent uppercase tracking-widest mb-4">How it works</h2>
                                    <p className="text-machine-platinum/80 text-base leading-relaxed font-light pl-4 border-l border-machine-border">
                                        {project.architecture}
                                    </p>
                                </div>
                            )}

                            {/* Outcome */}
                            {project.outcome && (
                                <div>
                                    <h2 className="text-xs font-mono font-bold text-machine-accent uppercase tracking-widest mb-4">Outcome</h2>
                                    <p className="text-machine-platinum/80 text-base leading-relaxed font-light pl-4 border-l border-machine-border">
                                        {project.outcome}
                                    </p>
                                </div>
                            )}

                            {/* Key Features */}
                            <div>
                                <h3 className="text-lg font-mono font-bold text-white mb-6 uppercase tracking-wider">Features</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 p-4 border border-machine-border/60 bg-machine-dark/40 font-mono text-xs">
                                            <CheckCircle className="w-4 h-4 text-machine-accent shrink-0 mt-0.5" />
                                            <span className="text-machine-platinum/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            {/* Actions / Links */}
                            <div className="lab-panel p-6">
                                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4 text-machine-accent" /> Links
                                </h3>
                                <div className="flex flex-col gap-3 font-mono text-xs">
                                    {project.links?.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-3 bg-machine-black/40 border border-machine-border hover:border-machine-accent/50 transition-all duration-300 group"
                                        >
                                            <span className="text-machine-platinum group-hover:text-white">View on GitHub</span>
                                            <Github className="w-4 h-4 text-machine-platinum group-hover:text-white" />
                                        </a>
                                    )}
                                    {project.links?.demo && (
                                        <Link
                                            to={project.links.demo}
                                            className="flex items-center justify-between px-4 py-3 bg-machine-black/40 border border-machine-border hover:border-machine-accent/50 transition-all duration-300 group"
                                        >
                                            <span className="text-machine-accent group-hover:text-white">Live Demo</span>
                                            <ExternalLink className="w-4 h-4 text-machine-accent group-hover:text-white" />
                                        </Link>
                                    )}
                                    {project.links?.external && (
                                        <a
                                            href={project.links.external.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-3 bg-machine-black/40 border border-machine-border hover:border-machine-accent/50 transition-all duration-300 group"
                                        >
                                            <span className="text-machine-accent group-hover:text-white">{project.links.external.label}</span>
                                            {project.links.external.label.toLowerCase().includes('download') ? (
                                                <Download className="w-4 h-4 text-machine-accent group-hover:text-white" />
                                            ) : (
                                                <ExternalLink className="w-4 h-4 text-machine-accent group-hover:text-white" />
                                            )}
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="lab-panel p-6">
                                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-machine-accent" /> Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2.5 py-1 bg-machine-black text-machine-platinum/60 text-xs border border-machine-border/60 font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProjectPage;
