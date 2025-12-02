import React from 'react';
import { motion } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { ArrowRight, Cpu, Code, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Home = () => {
    return (
        <main className="min-h-screen pt-32 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-32 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-machine-accent/5 to-transparent pointer-events-none opacity-20" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-5xl mx-auto text-center"
                >
                    <motion.div variants={fadeInUp} className="inline-block mb-6 px-4 py-1 border border-machine-accent/30 rounded-full bg-machine-accent/5 backdrop-blur-sm">
                        <span className="text-machine-accent text-xs font-bold tracking-[0.2em] uppercase">System Online</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-8 leading-none">
                        ENGINEERING<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-machine-platinum to-machine-border">THE FUTURE</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-lg md:text-xl text-machine-platinum/60 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
                        {SiteConfig.site.description}
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link to="/work" className="group relative px-8 py-4 bg-white text-black font-display font-bold tracking-widest uppercase text-sm overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
                            <div className="absolute inset-0 bg-machine-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        </Link>
                        <Link to="/contact" className="group px-8 py-4 border border-white/20 text-white font-display font-bold tracking-widest uppercase text-sm hover:bg-white/5 transition-colors duration-300">
                            Contact Me
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* About / Philosophy Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
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
                    </motion.div>

                    <motion.div
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
                                <h3 className="text-white font-display font-bold text-3xl mb-2">15+</h3>
                                <p className="text-machine-platinum/40 text-xs uppercase tracking-widest">Projects Shipped</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="bg-machine-surface py-32 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <motion.div
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
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SiteConfig.skills.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="col-span-1 md:col-span-2"
                            >
                                <h3 className="text-white font-display font-bold text-xl mb-8 flex items-center gap-3">
                                    {idx === 0 ? <Cpu className="text-machine-accent" /> : <Code className="text-machine-accent" />}
                                    {category.category}
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {category.items.map((skill) => (
                                        <div key={skill.name} className="group flex items-center justify-between p-4 border border-white/5 bg-machine-surface/50 hover:border-machine-accent/50 transition-colors duration-300">
                                            <span className="text-machine-platinum font-medium tracking-wide group-hover:text-white transition-colors">{skill.name}</span>
                                            <div className="w-1.5 h-1.5 bg-machine-accent/50 rounded-full group-hover:bg-machine-accent group-hover:shadow-[0_0_8px_rgba(70,150,255,0.5)] transition-all duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
