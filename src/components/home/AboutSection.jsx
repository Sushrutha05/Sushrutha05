import React from 'react';
import { m } from 'framer-motion';
import { SiteConfig } from '../../config/site-config';

const AboutSection = () => {
    return (
        <section className="container mx-auto px-6 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <m.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center md:justify-start"
                >
                    <div className="aspect-[4/5] w-full max-w-xs bg-machine-surface rounded-sm overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-machine-black via-transparent to-transparent z-10" />
                        <img src="/headshot.png" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                            <div className="h-[1px] w-8 bg-machine-accent mb-2" />
                            <p className="text-white font-display font-bold text-xl tracking-wide">SUSHRUTHA NAYAK</p>
                            <p className="text-machine-accent text-xs tracking-widest uppercase">Engineer</p>
                        </div>
                    </div>
                </m.div>

                <m.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
                        PRECISION.<br />
                        INTELLIGENCE.<br />
                        SCALE.
                    </h2>
                    <p className="text-machine-platinum/60 text-lg leading-relaxed mb-8 font-light">
                        I approach software engineering with the mindset of a high-performance vehicle designer. Every line of code is a component, every function a mechanism. My goal is not just to build software, but to engineer systems that are robust, scalable, and elegantly efficient.
                    </p>
                    <p className="text-machine-platinum/60 text-lg leading-relaxed mb-12 font-light">
                        From embedded systems to full-stack applications, I bridge the gap between hardware constraints and software possibilities.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-white font-display font-bold text-3xl mb-2">3+</h3>
                            <p className="text-machine-platinum/40 text-xs uppercase tracking-widest">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-white font-display font-bold text-3xl mb-2">{SiteConfig.projects.length}</h3>
                            <p className="text-machine-platinum/40 text-xs uppercase tracking-widest">Projects Shipped</p>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
};

export default AboutSection;
