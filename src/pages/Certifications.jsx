import React from 'react';
import { motion } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Certifications = () => {
    return (
        <main className="min-h-screen pt-32 pb-20">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SiteConfig.certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-machine-surface border border-white/5 p-8 hover:border-machine-accent/50 transition-colors duration-300"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                                <Shield className="w-12 h-12 text-machine-accent" strokeWidth={1} />
                            </div>

                            <div className="mb-6">
                                <span className="text-machine-accent font-mono text-xs mb-2 block">{cert.id}</span>
                                <h3 className="text-xl font-display font-bold text-white mb-1">{cert.title}</h3>
                                <p className="text-machine-platinum/60 text-sm">{cert.issuer}</p>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                                <span className="text-machine-platinum/40 text-xs uppercase tracking-widest">{cert.type}</span>
                                <span className="text-white font-mono text-xs">{cert.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Certifications;
