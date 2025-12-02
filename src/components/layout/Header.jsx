import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SiteConfig } from '../../config/site-config';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-machine-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="group flex items-center gap-2 z-50 relative">
                    <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold font-display text-lg rounded-sm group-hover:bg-machine-accent transition-colors duration-300">
                        S
                    </div>
                    <span className="font-display font-bold text-xl tracking-widest uppercase text-white group-hover:text-machine-accent transition-colors duration-300">
                        Nayak
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {SiteConfig.navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="relative group py-2"
                        >
                            <span className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${location.pathname === item.href ? 'text-white' : 'text-machine-platinum/60 group-hover:text-white'}`}>
                                {item.name}
                            </span>
                            <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-machine-accent transform origin-left transition-transform duration-300 ${location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href={SiteConfig.site.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-2 border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        CV
                    </a>
                    <a
                        href={SiteConfig.site.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-machine-accent hover:text-white transition-all duration-300"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 relative text-white hover:text-machine-accent transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-machine-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden overflow-y-auto"
                            style={{ height: '100dvh' }}
                        >
                            {SiteConfig.navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-3xl font-display font-bold uppercase tracking-widest ${location.pathname === item.href ? 'text-white' : 'text-machine-platinum/40'}`}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="flex flex-col gap-4 mt-12 w-64">
                                <a
                                    href={SiteConfig.site.cv}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-6 py-4 border border-white/10 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    View CV
                                </a>
                                <a
                                    href={SiteConfig.site.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center px-6 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-machine-accent hover:text-white transition-all duration-300"
                                >
                                    View Resume
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
