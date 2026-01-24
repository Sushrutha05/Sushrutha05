import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { Award, Shield, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
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
                className="block h-full group relative bg-machine-surface border border-white/5 p-8 hover:border-machine-accent/50 transition-colors duration-300 cursor-pointer"
            >
                <div className="absolute top-0 right-0 p-4 transition-opacity duration-300 opacity-50 group-hover:opacity-100">
                    {!imageError && cert.logo ? (
                        <img
                            src={cert.logo}
                            alt={`${cert.title} logo`}
                            className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <Shield className="w-12 h-12 text-machine-accent" strokeWidth={1} />
                    )}
                </div>

                <div className="mb-6">
                    <span className="text-machine-accent font-mono text-xs mb-2 block flex items-center gap-2">
                        {cert.id}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-machine-platinum/60 text-sm">{cert.issuer}</p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                    <span className="text-machine-platinum/40 text-xs uppercase tracking-widest">{cert.type}</span>
                    <span className="text-white font-mono text-xs">{cert.year}</span>
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
            // Optional: Scroll back to top of grid or keep position? 
            // Usually better to scroll to top of grid if list was very long, 
            // but for now let's just collapse.
        } else {
            setVisibleCount(SiteConfig.certifications.length);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20">
            <SEO
                title="Certifications"
                description="Verified certifications and credentials in Machine Learning, Cloud Computing, and Software Development."
                keywords="certifications, credentials, machine learning, cloud computing, software development"
            />
            <section className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">CREDENTIALS<br />& VERIFICATION</h1>
                    <p className="text-machine-platinum/60 text-lg font-light max-w-2xl">
                        Validated technical competencies and industry-standard certifications.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-6">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                            className="group flex items-center gap-2 px-8 py-4 bg-machine-surface border border-white/10 hover:border-machine-accent/50 text-white font-display font-bold tracking-widest uppercase text-sm transition-all duration-300 hover:bg-white/5"
                        >
                            {isExpanded ? (
                                <>
                                    Show Less
                                    <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                                </>
                            ) : (
                                <>
                                    View All Certifications
                                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
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
                        <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
                            <Award className="w-6 h-6 text-machine-accent" />
                            DIGITAL BADGES
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
