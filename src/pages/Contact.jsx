import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { Mail, Linkedin, Github } from 'lucide-react';
import { emailService } from '../utils/emailService';
import SEO from '../components/seo/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await emailService.sendEmail(formData);
        setStatus(res.message);
        setLoading(false);
    };

    return (
        <main className="min-h-screen pt-32 pb-20 relative">
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

            <SEO
                title="Contact"
                description="Get in touch with Sushrutha for engineering collaborations, technical consultation, or project inquiries."
                keywords="contact, email, linkedin, github, collaboration, hiring"
            />
            
            <section className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5"
                    >
                        <span className="text-machine-accent-amber font-mono text-xs uppercase tracking-widest block mb-3 font-semibold text-glow-amber">
                            [Communication Protocols]
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">INITIATE<br />CONTACT</h1>
                        <p className="text-machine-platinum/60 text-lg font-light mb-12 max-w-md leading-relaxed">
                            Available for engineering collaborations, low-level technical discussions, and system inquiries.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${SiteConfig.social.email}`} className="group flex items-center gap-6 p-6 border border-machine-border/60 hover:border-machine-accent/50 bg-machine-black/40 transition-all duration-300">
                                <Mail className="w-6 h-6 text-machine-platinum/80 group-hover:text-machine-accent transition-colors" />
                                <div>
                                    <p className="text-[10px] font-mono uppercase tracking-widest text-machine-platinum/40 mb-0.5">Email Link</p>
                                    <p className="text-white font-mono text-sm">sushruthavn@gmail.com</p>
                                </div>
                            </a>
                            <div className="grid grid-cols-2 gap-4">
                                <a href={SiteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 p-4 border border-machine-border/60 hover:border-machine-accent/50 bg-machine-black/40 transition-all duration-300">
                                    <Linkedin className="w-4 h-4 text-machine-platinum/80 group-hover:text-white" />
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-machine-platinum/80 group-hover:text-white">LinkedIn</span>
                                </a>
                                <a href={SiteConfig.social.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 p-4 border border-machine-border/60 hover:border-machine-accent/50 bg-machine-black/40 transition-all duration-300">
                                    <Github className="w-4 h-4 text-machine-platinum/80 group-hover:text-white" />
                                    <span className="text-[10px] font-mono uppercase tracking-wider text-machine-platinum/80 group-hover:text-white">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <form onSubmit={handleSubmit} className="lab-panel p-8 md:p-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-machine-platinum/40">Sender Identity</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-machine-black border border-machine-border/60 p-4 text-white focus:border-machine-accent focus:outline-none transition-colors font-mono text-sm"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono uppercase tracking-widest text-machine-platinum/40">Return Protocol Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-machine-black border border-machine-border/60 p-4 text-white focus:border-machine-accent focus:outline-none transition-colors font-mono text-sm"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase tracking-widest text-machine-platinum/40">Transmission Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-machine-black border border-machine-border/60 p-4 text-white focus:border-machine-accent focus:outline-none transition-colors font-mono text-sm"
                                    placeholder="Inquiry Topic"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-mono uppercase tracking-widest text-machine-platinum/40">Payload / Transmission Body</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-machine-black border border-machine-border/60 p-4 text-white focus:border-machine-accent focus:outline-none transition-colors resize-none font-mono text-sm"
                                    placeholder="Message Content..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 border border-machine-border hover:border-machine-accent bg-machine-black/40 hover:bg-machine-accent hover:text-machine-black text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-50"
                            >
                                {loading ? 'Transmitting Payload...' : 'Send Transmission'}
                            </button>

                            {status && (
                                <p className={`text-center text-xs uppercase tracking-widest font-mono ${status.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
