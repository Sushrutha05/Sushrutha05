import React from 'react';
import { SiteConfig } from '../../config/site-config';

const Footer = () => {
    return (
        <footer className="bg-machine-black border-t border-machine-border/60 py-12 relative z-10 font-mono text-xs">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-sm tracking-widest uppercase text-white mb-1">Sushrutha</h3>
                    <p className="text-machine-platinum/40 tracking-wider">
                        &copy; {new Date().getFullYear()} // Systems Explorer. All Systems Nominal.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href={SiteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-machine-platinum/60 hover:text-machine-accent transition-colors tracking-wider">[GitHub]</a>
                    <a href={SiteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-machine-platinum/60 hover:text-machine-accent transition-colors tracking-wider">[LinkedIn]</a>
                    <a href={`mailto:${SiteConfig.social.email}`} className="text-machine-platinum/60 hover:text-machine-accent transition-colors tracking-wider">[Email]</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
