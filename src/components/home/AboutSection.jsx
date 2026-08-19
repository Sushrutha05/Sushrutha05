import React from 'react';
import { m } from 'framer-motion';
import { SiteConfig } from '../../config/site-config';

const AboutSection = () => {
    return (
        <section className="container mx-auto px-6 mb-32 relative">
            <div className="blueprint-divider mb-20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Visual Representation: Technical Notebook Style Profile */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-4 flex flex-col items-center lg:items-start"
                >
                    <div className="relative p-2 bg-machine-dark border border-machine-border shadow-inner max-w-sm w-full group">
                        {/* Blueprint Corner Accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-machine-accent" />
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-machine-accent" />
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-machine-accent" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-machine-accent" />

                        <div className="aspect-[4/5] w-full bg-machine-black overflow-hidden relative border border-machine-border/60">
                            <div className="absolute inset-0 bg-machine-accent/5 mix-blend-overlay" />
                            <img src="/headshot.png" alt="Sushrutha Profile" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        
                        <div className="mt-4 p-4 border-t border-machine-border/60 bg-machine-black/40 font-mono text-xs text-machine-platinum/60">
                            <div className="flex justify-between mb-1">
                                <span>Name:</span>
                                <span className="text-machine-accent font-semibold">Sushrutha</span>
                            </div>
                            <div className="flex justify-between mb-1">
                                <span>Focus:</span>
                                <span>Systems & Embedded</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Status:</span>
                                <span>Learning & Building</span>
                            </div>
                        </div>
                    </div>
                </m.div>

                {/* Mindset Text */}
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-8 flex flex-col justify-between"
                >
                    <div>
                        <span className="text-machine-accent font-mono text-xs uppercase tracking-widest block mb-3 font-semibold text-glow-cyan">
                            About Me
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight leading-tight">
                            Building to understand.<br />
                            Learning by doing.
                        </h2>
                        
                        <div className="space-y-6 text-machine-platinum/80 text-lg font-light leading-relaxed max-w-3xl font-sans">
                            <p>
                                I approach programming not just as a tool for creating apps, but as a gateway to understanding how computers function beneath the surface. I enjoy building things from scratch because it forces me to confront the engineering decisions that high-level abstractions hide away.
                            </p>
                            <p>
                                Whether it is implementing neural network modules using NumPy, wiring components to microcontrollers, or analyzing audio frequencies, my focus is on learning how things work. I believe that hands-on building is the most effective way to grasp complex concepts.
                            </p>
                            <p className="text-base text-machine-platinum/60 italic border-l-2 border-machine-accent/40 pl-4 py-1">
                                "The best way to understand a complex system is to build a minimal version of it yourself."
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-machine-border/40">
                        <div>
                            <p className="text-machine-platinum/40 text-xs uppercase tracking-widest mb-1 font-mono">Role</p>
                            <h3 className="text-white font-display font-semibold text-lg">Engineering Student</h3>
                        </div>
                        <div>
                            <p className="text-machine-platinum/40 text-xs uppercase tracking-widest mb-1 font-mono">Core Focus</p>
                            <h3 className="text-white font-display font-semibold text-lg">Systems Programming</h3>
                        </div>
                        <div>
                            <p className="text-machine-platinum/40 text-xs uppercase tracking-widest mb-1 font-mono">Completed</p>
                            <h3 className="text-white font-display font-semibold text-lg">{SiteConfig.projects.length} Projects</h3>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
};

export default AboutSection;
