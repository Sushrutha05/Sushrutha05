import React from 'react';
import { SiteConfig } from '../../config/site-config';

const Footer = () => {
    return (
        <footer className="bg-machine-black border-t border-white/5 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="font-display font-bold text-lg tracking-widest uppercase text-white mb-2">Sushrutha Nayak</h3>
                    <p className="text-machine-platinum/40 text-xs tracking-wider">
                        &copy; {new Date().getFullYear()} Engineering Portfolio. All Systems Nominal.
                    </p>
                </div>

                <div className="flex items-center gap-8">
                    <a href={SiteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-machine-platinum/60 hover:text-white transition-colors text-xs uppercase tracking-wider">GitHub</a>
                    <a href={SiteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-machine-platinum/60 hover:text-white transition-colors text-xs uppercase tracking-wider">LinkedIn</a>
                    <a href={SiteConfig.social.email} className="text-machine-platinum/60 hover:text-white transition-colors text-xs uppercase tracking-wider">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
