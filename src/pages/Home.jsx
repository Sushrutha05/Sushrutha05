import React, { Suspense } from 'react';
import { m } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const AboutSection = React.lazy(() => import('../components/home/AboutSection'));
const SkillsSection = React.lazy(() => import('../components/home/SkillsSection'));

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
            <SEO
                title="Home"
                description="Sushrutha's engineering portfolio showcasing projects in machine learning, full-stack development, and embedded systems."
            />
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-32 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-machine-accent/5 to-transparent pointer-events-none opacity-20" />
                <img
                    src="/mobile-hero.png"
                    className="absolute inset-0 w-full h-full object-cover md:hidden -z-10 opacity-60"
                    alt="Background"
                    fetchPriority="high"
                />

                <m.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-5xl mx-auto text-center"
                >
                    <m.div variants={fadeInUp} className="inline-block mb-6 px-4 py-1 border border-machine-accent/30 rounded-full bg-machine-accent/5 backdrop-blur-sm">
                        <span className="text-machine-accent text-xs font-bold tracking-[0.2em] uppercase">System Online</span>
                    </m.div>

                    <m.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-8 leading-none">
                        ENGINEERING<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-machine-platinum to-machine-border">THE FUTURE</span>
                    </m.h1>

                    <m.p variants={fadeInUp} className="text-lg md:text-xl text-machine-platinum/60 max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
                        {SiteConfig.site.description}
                    </m.p>

                    <m.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link to="/work" className="group relative px-8 py-4 bg-white text-black font-display font-bold tracking-widest uppercase text-sm overflow-hidden">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
                            <div className="absolute inset-0 bg-machine-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        </Link>
                        <Link to="/contact" className="group px-8 py-4 border border-white/20 text-white font-display font-bold tracking-widest uppercase text-sm hover:bg-white/5 transition-colors duration-300">
                            Contact Me
                        </Link>
                    </m.div>
                </m.div>
            </section>

            <Suspense fallback={<div className="h-96 flex items-center justify-center text-machine-accent">Loading...</div>}>
                <AboutSection />
                <SkillsSection />
            </Suspense>
        </main>
    );
};

export default Home;
