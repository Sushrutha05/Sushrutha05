import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { ArrowLeft, CheckCircle, Layers, Cpu, Github, ExternalLink, Download } from 'lucide-react';
import SEO from '../components/seo/SEO';

const ProjectPage = () => {
    const { id } = useParams();
    const project = SiteConfig.projects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/work" replace />;
    }

    return (
        <main className="min-h-screen pt-32 pb-20">
            <SEO
                title={project.title}
                description={project.description}
                keywords={project.tags.join(', ')}
                image={project.image}
                url={project.link}
            />
            <section className="container mx-auto px-6 mb-12">
                <Link to="/work" className="inline-flex items-center gap-2 text-machine-platinum/60 hover:text-white transition-colors text-xs uppercase tracking-widest mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-machine-accent font-mono text-xs mb-4 block">PROJECT // {project.id.toUpperCase()}</span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">{project.title}</h1>
                    <p className="text-xl text-machine-platinum/60 font-light max-w-2xl">{project.subtitle}</p>
                </motion.div>
            </section>

            {project.image && (
                <section className="container mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-video w-full bg-machine-surface border border-white/5 overflow-hidden"
                    >
                        <img src={project.image} alt={project.title} className="w-full h-full object-contain bg-machine-black/50 opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-machine-black via-transparent to-transparent" />
                    </motion.div>
                </section>
            )}

            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-2xl font-display font-bold text-white mb-6">ENGINEERING OVERVIEW</h2>
                            <p className="text-machine-platinum/80 text-lg leading-relaxed font-light mb-12">
                                {project.overview}
                            </p>

                            <h3 className="text-xl font-display font-bold text-white mb-6">KEY CAPABILITIES</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 p-4 border border-white/5 bg-machine-surface/50">
                                        <CheckCircle className="w-5 h-5 text-machine-accent shrink-0" />
                                        <span className="text-machine-platinum text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            {/* Actions / Links */}
                            <div className="p-6 border border-white/5 bg-machine-surface/50">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4 text-machine-accent" /> Actions
                                </h3>
                                <div className="flex flex-col gap-3">
                                    {project.links?.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-machine-accent/50 transition-all duration-300 group"
                                        >
                                            <span className="text-machine-platinum text-sm group-hover:text-white">View on GitHub</span>
                                            <Github className="w-4 h-4 text-machine-platinum group-hover:text-white" />
                                        </a>
                                    )}
                                    {project.links?.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-3 bg-machine-accent/10 hover:bg-machine-accent/20 border border-machine-accent/20 hover:border-machine-accent/50 transition-all duration-300 group"
                                        >
                                            <span className="text-machine-accent text-sm group-hover:text-white">Live Demo</span>
                                            <ExternalLink className="w-4 h-4 text-machine-accent group-hover:text-white" />
                                        </a>
                                    )}
                                    {project.links?.external && (
                                        <a
                                            href={project.links.external.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-between px-4 py-3 bg-machine-accent/10 hover:bg-machine-accent/20 border border-machine-accent/20 hover:border-machine-accent/50 transition-all duration-300 group"
                                        >
                                            <span className="text-machine-accent text-sm group-hover:text-white">{project.links.external.label}</span>
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
                            <div className="p-6 border border-white/5 bg-machine-surface/50">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-machine-accent" /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 text-machine-platinum text-xs border border-white/5">
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
