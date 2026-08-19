import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { Award, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/seo/SEO';

const CertificationCard = ({ cert, index }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="h-full"
        >
            <a
                href={cert.verificationLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group relative lab-panel p-8 hover:border-machine-accent/50 transition-colors duration-300 cursor-pointer"
            >
                <div className="absolute top-0 right-0 p-4 transition-opacity duration-300 opacity-50 group-hover:opacity-100">
                    {!imageError && cert.logo ? (
                        <img
                            src={cert.logo}
                            alt={`${cert.title} logo`}
                            className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <Shield className="w-10 h-10 text-machine-accent/80" strokeWidth={1} />
                    )}
                </div>

                <div className="mb-6">
                    <span className="text-machine-accent font-mono text-[10px] mb-2 block flex items-center gap-1">
                        {cert.id}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-machine-platinum/60 text-xs font-mono">{cert.issuer}</p>
                </div>

                <div className="flex items-center justify-between border-t border-machine-border/60 pt-4 mt-auto">
                    <span className="text-machine-platinum/40 text-[10px] font-mono uppercase tracking-wider">{cert.type}</span>
                    <span className="text-white font-mono text-[10px]">{cert.year}</span>
                </div>
            </a>
        </motion.article>
    );
};

const Certifications = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const displayedCerts = SiteConfig.certifications.slice(0, visibleCount);
    const isExpanded = visibleCount >= SiteConfig.certifications.length;

    const toggleView = () => {
        if (isExpanded) {
            setVisibleCount(6);
        } else {
            setVisibleCount(SiteConfig.certifications.length);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 relative">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

            <SEO
                title="Certifications"
                description="Verified certifications and credentials in Machine Learning, Cloud Computing, and Software Development."
                keywords="certifications, credentials, machine learning, cloud computing, software development"
            />
            
            <section className="container mx-auto px-6 mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="text-machine-accent font-mono text-xs uppercase tracking-widest block mb-3 font-semibold text-glow-cyan">
                        Certifications
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">Credentials</h1>
                    <p className="text-machine-platinum/60 text-lg font-light max-w-2xl leading-relaxed">
                        A list of certifications and completed technical training programs.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-6 relative z-10">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <AnimatePresence>
                        {displayedCerts.map((cert, index) => (
                            <CertificationCard key={cert.id} cert={cert} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {SiteConfig.certifications.length > 6 && (
                    <div className="flex justify-center mb-20">
                        <button
                            onClick={toggleView}
                            className="group flex items-center gap-2 px-6 py-3 border border-machine-border hover:border-machine-accent text-white font-mono text-xs uppercase tracking-wider transition-all duration-300 bg-machine-black/40 hover:bg-machine-accent hover:text-machine-black"
                        >
                            {isExpanded ? (
                                <>
                                    Collapse List
                                    <ChevronUp className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    View All Certifications
                                    <ChevronDown className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </div>
                )}

                {SiteConfig.badges && SiteConfig.badges.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                            <Award className="w-5 h-5 text-machine-accent" />
                            Digital Badges
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                            {SiteConfig.badges.map((badge, index) => (
                                <motion.div
                                    key={badge.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05, duration: 0.5 }}
                                    className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl hover:border-machine-accent hover:ring-1 hover:ring-machine-accent/50 transition-all duration-300 shadow-lg hover:shadow-machine-accent/20 hover:-translate-y-1"
                                >
                                    <div
                                        data-iframe-width="150"
                                        data-iframe-height="270"
                                        data-share-badge-id={badge.id}
                                        data-share-badge-host="https://www.credly.com"
                                    ></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </section>
        </main>
    );
};

export default Certifications;
