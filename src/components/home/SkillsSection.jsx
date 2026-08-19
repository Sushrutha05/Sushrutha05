import React from 'react';
import { m } from 'framer-motion';
import { Cpu, Terminal, GitBranch, Share2 } from 'lucide-react';

const explorationCategories = [
    {
        title: "Programming Languages",
        icon: Terminal,
        items: [
            { name: "C", focus: "Low-level structures, manual memory management" },
            { name: "C++", focus: "Modern object models, hardware abstractions" },
            { name: "Python", focus: "Data science, computer vision pipelines" },
            { name: "Java", focus: "Application development, object orientation" },
            { name: "JavaScript", focus: "Web logic, event loops, reactive UI" }
        ]
    },
    {
        title: "Systems Architecture",
        icon: Cpu,
        items: [
            { name: "Operating Systems", focus: "Processes, scheduling, memory structures" },
            { name: "Computer Networks", focus: "Socket programming, TCP/IP, protocols" },
            { name: "Database Systems", focus: "Relational queries, index engines, storage" },
            { name: "Computer Architecture", focus: "Instruction sets, CPU cycles, buses" }
        ]
    },
    {
        title: "Engineering Interests",
        icon: GitBranch,
        items: [
            { name: "Embedded Systems", focus: "MCU firmware, registers, physical buses" },
            { name: "Signal Processing", focus: "Continuous/Discrete signals, transforms" },
            { name: "Audio Processing", focus: "FFT algorithms, real-time frequency analysis" },
            { name: "Real-Time Systems", focus: "Determinism, interrupt scheduling, low-latency" }
        ]
    }
];

const SkillsSection = () => {
    return (
        <section className="bg-machine-dark py-32 border-t border-machine-border/60 relative overflow-hidden">
            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="text-machine-accent font-mono text-xs uppercase tracking-widest block mb-3 font-semibold text-glow-cyan">
                        Skills & Interests
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">What I'm Exploring</h2>
                    <p className="text-machine-platinum/60 text-sm max-w-xl mx-auto font-mono">
                        Topics I am interested in and languages I use for projects.
                    </p>
                </m.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {explorationCategories.map((category, catIdx) => {
                        const Icon = category.icon;
                        return (
                            <m.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIdx * 0.15, duration: 0.6 }}
                                className="lab-panel p-8 flex flex-col justify-between relative"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-8 border-b border-machine-border pb-4">
                                        <div className="p-2 border border-machine-border bg-machine-black/40 text-machine-accent">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-display font-bold text-lg">{category.title}</h3>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {category.items.map((item, itemIdx) => (
                                            <div 
                                                key={item.name} 
                                                className="group p-3 border border-machine-border/40 bg-machine-black/30 hover:border-machine-accent/40 hover:bg-machine-black/60 transition-all duration-300"
                                            >
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-white font-mono text-sm font-semibold tracking-wide group-hover:text-machine-accent transition-colors">
                                                        {item.name}
                                                    </span>
                                                    <div className="w-1.5 h-1.5 border border-machine-border bg-machine-dark rounded-full group-hover:bg-machine-accent group-hover:border-machine-accent transition-all duration-300" />
                                                </div>
                                                <p className="text-machine-platinum/50 text-[11px] font-sans group-hover:text-machine-platinum/80 transition-colors leading-tight">
                                                    {item.focus}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="mt-8 pt-4 border-t border-machine-border/30 flex items-center justify-between text-machine-platinum/40 font-mono text-[10px]">
                                    <span>Learning Area</span>
                                    <Share2 className="w-3 h-3 hover:text-machine-accent cursor-pointer transition-colors" />
                                </div>
                            </m.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
