import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiteConfig } from '../config/site-config';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { emailService } from '../utils/emailService';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await emailService.sendEmail(formData);
        setStatus(res.success ? 'Message Transmitted.' : 'Transmission Failed.');
        setLoading(false);
    };

    return (
        <main className="min-h-screen pt-32 pb-20">
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">INITIATE<br />CONTACT</h1>
                        <p className="text-machine-platinum/60 text-lg font-light mb-12 max-w-md">
                            Available for engineering collaborations and technical consultation.
                        </p>

                        <div className="space-y-8">
                            <a href={SiteConfig.social.email} className="group flex items-center gap-6 p-6 border border-white/5 hover:border-machine-accent/50 bg-machine-surface/50 hover:bg-machine-surface transition-all duration-300">
                                <Mail className="w-6 h-6 text-machine-platinum group-hover:text-machine-accent transition-colors" />
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-machine-platinum/40 mb-1">Email Protocol</p>
                                    <p className="text-white font-mono text-sm">sushruthavn@gmail.com</p>
                                </div>
                            </a>
                            <div className="grid grid-cols-2 gap-4">
                                <a href={SiteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 p-4 border border-white/5 hover:border-machine-accent/50 hover:bg-white/5 transition-all duration-300">
                                    <Linkedin className="w-5 h-5 text-machine-platinum group-hover:text-white" />
                                    <span className="text-xs uppercase tracking-widest text-machine-platinum group-hover:text-white">LinkedIn</span>
                                </a>
                                <a href={SiteConfig.social.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 p-4 border border-white/5 hover:border-machine-accent/50 hover:bg-white/5 transition-all duration-300">
                                    <Github className="w-5 h-5 text-machine-platinum group-hover:text-white" />
                                    <span className="text-xs uppercase tracking-widest text-machine-platinum group-hover:text-white">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-machine-platinum/40">Identity</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-machine-surface border border-white/10 p-4 text-white focus:border-machine-accent focus:outline-none transition-colors"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-machine-platinum/40">Return Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-machine-surface border border-white/10 p-4 text-white focus:border-machine-accent focus:outline-none transition-colors"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-machine-platinum/40">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-machine-surface border border-white/10 p-4 text-white focus:border-machine-accent focus:outline-none transition-colors"
                                    placeholder="Inquiry Topic"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-machine-platinum/40">Transmission</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full bg-machine-surface border border-white/10 p-4 text-white focus:border-machine-accent focus:outline-none transition-colors resize-none"
                                    placeholder="Message Content..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-5 bg-white text-black font-display font-bold tracking-widest uppercase text-sm hover:bg-machine-accent hover:text-white transition-colors duration-300 disabled:opacity-50"
                            >
                                {loading ? 'Transmitting...' : 'Send Transmission'}
                            </button>

                            {status && (
                                <p className={`text-center text-xs uppercase tracking-widest ${status.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
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
