import React from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Code } from 'lucide-react';
import { SiteConfig } from '../../config/site-config';

const SkillsSection = () => {
    return (
        <section className="bg-machine-surface py-32 border-t border-white/5">
            <div className="container mx-auto px-6">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex items-end justify-between"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">TECHNICAL ARSENAL</h2>
                        <div className="h-[2px] w-24 bg-machine-accent" />
                    </div>
                    <Link to="/work" className="hidden md:flex items-center gap-2 text-machine-platinum hover:text-white transition-colors text-sm uppercase tracking-widest group">
                        View All Work <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </m.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(SiteConfig.skills).map(([category, skills], idx) => (
                        <m.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="col-span-1 md:col-span-2"
                        >
                            <h3 className="text-white font-display font-bold text-xl mb-8 flex items-center gap-3 capitalize">
                                {idx === 0 ? <Cpu className="text-machine-accent" /> : <Code className="text-machine-accent" />}
                                {category}
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {skills.map((skill) => (
                                    <div key={skill} className="group flex items-center justify-between p-4 border border-white/5 bg-machine-surface/50 hover:border-machine-accent/50 transition-colors duration-300">
                                        <span className="text-machine-platinum font-medium tracking-wide group-hover:text-white transition-colors">{skill}</span>
                                        <div className="w-1.5 h-1.5 bg-machine-accent/50 rounded-full group-hover:bg-machine-accent group-hover:shadow-[0_0_8px_rgba(70,150,255,0.5)] transition-all duration-300" />
                                    </div>
                                ))}
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
