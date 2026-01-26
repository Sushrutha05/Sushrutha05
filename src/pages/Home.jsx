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
                {/* Unified Background: Radial Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,var(--color-machine-accent)_0%,transparent_40%)] opacity-20 pointer-events-none -z-10" />

                {/* Desktop-only: Tech Grid Pattern */}
                <div className="hidden md:block absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

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
