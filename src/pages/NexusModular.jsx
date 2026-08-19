import React, { useEffect, useRef, useState, memo } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ChevronRight, Cpu, Zap, Settings, Activity, Layers, Target, Sparkles, Box, Shield, Gamepad2, Plus, ArrowRight, MousePointer2, Monitor, Battery, Wifi } from 'lucide-react';
import SEO from '../components/seo/SEO';

// Optimized Mouse Position Hook
const useMousePosition = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return { x: mouseX, y: mouseY };
};

const MagneticButton = memo(({ children, className, href, variant = "primary" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "bg-white text-black hover:bg-[#ff3131] hover:text-white",
    outline: "bg-transparent text-white border border-white/20 hover:border-[#ff3131] hover:text-[#ff3131]",
    nothing: "bg-black text-white border border-white/10 hover:bg-white hover:text-black font-mono"
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
});

const BentoCard = memo(({ title, subtitle, description, icon: Icon, className = "", children, dark = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-[32px] border border-white/5 group ${dark ? 'bg-[#0a0a0a]' : 'bg-[#111]'} ${className}`}
    >
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="p-8 md:p-10 relative z-10 h-full flex flex-col">
        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#ff3131] transition-all duration-500">
            <Icon className="w-6 h-6 text-white" />
          </div>
        )}
        {subtitle && <span className="text-nothing text-[10px] text-[#ff3131] mb-2 block">{subtitle}</span>}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{title}</h3>
        {description && <p className="text-[#a1a1a6] text-lg font-medium leading-relaxed mb-6">{description}</p>}
        <div className="mt-auto">
          {children}
        </div>
      </div>
      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#ff3131] opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
    </motion.div>
  );
});

const SectionWrapper = ({ children, className = "", id, dotGrid = false }) => {
  return (
    <section id={id} className={`relative py-32 md:py-48 overflow-hidden ${className}`}>
      {dotGrid && <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />}
      {children}
    </section>
  );
};

const LineupCard = ({ model, status, specs, image }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="flex flex-col items-center text-center p-12 rounded-[40px] bg-[#0a0a0a] border border-white/5 group hover:border-[#ff3131]/30 transition-all"
    >
      <div className="h-64 flex items-center justify-center mb-12 relative">
        <img src={image} alt={model} className="h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-radial from-[#ff3131]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className="text-nothing text-[10px] text-[#ff3131] mb-2">Nexus Config</span>
      <h4 className="text-3xl font-black mb-4">{model}</h4>
      <p className="text-[#a1a1a6] mb-8 font-mono text-sm">{specs}</p>
      <div className="text-xl font-bold mb-10 text-white font-mono uppercase tracking-wider">{status}</div>
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-[#ff3131] hover:text-white transition-all">View Details</button>
      </div>
    </motion.div>
  );
};

const NexusModular = () => {
  const containerRef = useRef(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 25, restDelta: 0.001 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      ref={containerRef}
      className="bg-black text-white font-sans selection:bg-[#ff3131]/30"
    >
      <SEO
        title="Nexus Modular - Custom Gamepad Design"
        description="Experience the raw power of modularity. Designed with transparent enclosures and hardware config layout structures."
        keywords="Nothing Phone, Modular Gamepad, Esports, Gaming, Hardware Prototyping"
      />

      {/* Nothing Style Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#ff3131] z-[110] origin-left shadow-[0_0_10px_#ff3131]"
        style={{ scaleX: smoothProgress }}
      />

      {/* Minimalist Nav */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-black/60 backdrop-blur-xl py-6">
        <div className="container mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-nothing text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer"
            >
              NEXUS MODULAR
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff3131] animate-pulse" />
            </motion.div>
            <div className="hidden lg:flex items-center gap-8">
              {["Core", "Modularity", "Performance", "Series"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] text-nothing text-[#86868b] hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <MagneticButton href="https://github.com/Sushrutha05/Nexus-Gamepad" className="px-6 py-2 text-xs uppercase font-mono tracking-widest rounded-none border border-white/10" variant="nothing">
              GitHub Code
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* Hero Section - Nothing + Apple Mix */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
        <div className="container mx-auto px-8 relative z-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 px-4 py-1 border border-[#ff3131]/30 rounded-full bg-[#ff3131]/5 text-[#ff3131] text-[10px] text-nothing"
          >
            Hardware Prototyping Concept
          </motion.div>
          
          <h1 className="text-7xl md:text-[140px] font-black tracking-tighter leading-[0.85] mb-12 flex flex-col">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-nothing"
            >
              NEXUS
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[#86868b]"
            >
              MODULAR
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-[#a1a1a6] font-medium max-w-2xl mb-16 leading-tight tracking-tight font-mono"
          >
            PROTOTYPE STUDY. <br /> 
            TRANSPARENT DESIGN. <br />
            HOT-SWAPPABLE MODULES.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <MagneticButton href="https://github.com/Sushrutha05/Nexus-Gamepad" variant="primary" className="rounded-2xl px-12 py-6 text-xl">
              Explore Design
            </MagneticButton>
            <a href="#core" className="flex items-center gap-2 group text-nothing text-xs hover:text-[#ff3131] transition-colors">
              Explore features <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating Hero Product */}
        <motion.div
          style={{ 
            y: useTransform(scrollYProgress, [0, 0.2], [0, -200]),
            rotateX: useTransform(mouseY, [0, 1000], [5, -5]),
            rotateY: useTransform(mouseX, [0, 1920], [-5, 5])
          }}
          className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120%] md:w-[70%] pointer-events-none opacity-40 mix-blend-screen"
        >
          <img src="/nexus/hero.png" alt="Nexus Hero" className="w-full h-auto" />
        </motion.div>
      </section>

      {/* Bento Grid - Core Features */}
      <SectionWrapper id="core" dotGrid>
        <div className="container mx-auto px-8">
          <div className="text-center mb-32">
            <h2 className="text-nothing text-4xl md:text-6xl font-black mb-6">THE CONCEPT.</h2>
            <p className="text-[#86868b] font-mono text-lg">A gamepad built around hardware modularity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <BentoCard 
              className="md:col-span-8 h-[500px]"
              subtitle="Transparency"
              title="See inside."
              description="A transparent polycarbonate enclosure that exposes internal circuit paths and layout design."
            >
              <div className="absolute bottom-0 right-0 w-3/4 opacity-40 group-hover:opacity-80 transition-opacity duration-700">
                <img src="/nexus/glow.png" alt="Glow" className="w-full h-auto translate-x-1/4 translate-y-1/4" />
              </div>
            </BentoCard>

            <BentoCard 
              className="md:col-span-4"
              icon={Cpu}
              subtitle="Latency"
              title="Low Latency"
              description="High polling rate controller logic for responsive inputs."
            />

            <BentoCard 
              className="md:col-span-4"
              icon={Battery}
              subtitle="Power"
              title="USB-C Charging"
              description="Internal battery charge system mapping."
            />

            <BentoCard 
              className="md:col-span-8 h-[500px]"
              subtitle="Haptics"
              title="Vibration Motors"
              description="Standard haptic actuators mapped to standard game-controller protocols."
              dark
            >
               <div className="flex gap-4 mt-8">
                  {[...Array(12)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ height: [20, 60, 30, 80, 20] }}
                      transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                      className="w-1 bg-[#ff3131]/40 rounded-full"
                    />
                  ))}
               </div>
            </BentoCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Lineup Section - Apple Inspiration */}
      <SectionWrapper id="series" className="bg-[#050505]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase">Prototype Layouts</h2>
            <p className="text-[#86868b] text-xl font-medium">Four experimental configurations under design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <LineupCard 
              model="Nexus Air"
              status="Completed Layout"
              specs="Ultra-light • 60h Battery • Basic modules"
              image="/nexus/hero.png"
            />
            <LineupCard 
              model="Nexus Pro"
              status="PCB Finished"
              specs="Transparent • 100h Battery • Debug interface"
              image="/nexus/glow.png"
            />
            <LineupCard 
              model="Nexus Ultra"
              status="CAD Model"
              specs="Magnesium Alloy • OLED Screen • Custom mapping"
              image="/nexus/modules.png"
            />
            <LineupCard 
              model="Nexus Custom"
              status="Handmade Concept"
              specs="3D printed • Tailored layout • Prototype 1"
              image="/nexus/hero.png"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Tech Specs Bento - Apple Spec Style */}
      <SectionWrapper id="performance" dotGrid>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-12">
              <h3 className="text-nothing text-5xl font-black leading-tight">HARDWARE <br /> SPECS.</h3>
              <div className="space-y-8">
                {[
                  { label: "Weight", val: "180g" },
                  { label: "Latency", val: "0.5ms" },
                  { label: "Polling", val: "8000Hz" },
                  { label: "MCU Core", val: "RP2040" }
                ].map((spec) => (
                  <div key={spec.label} className="border-b border-white/5 pb-6">
                    <span className="text-nothing text-[10px] text-[#ff3131] block mb-2">{spec.label}</span>
                    <span className="text-3xl font-bold font-mono">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 rounded-[48px] overflow-hidden bg-[#0a0a0a] border border-white/10 p-12 relative group">
                <div className="absolute top-12 right-12 flex gap-4">
                  <Wifi className="text-[#ff3131]" />
                  <span className="text-nothing text-[10px] self-center">I2C / SPI Bus Active</span>
                </div>
                <h4 className="text-nothing text-4xl font-bold mb-12">Modular <br /> Architecture.</h4>
                <div className="relative h-[400px]">
                  <motion.img 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    src="/nexus/modules.png" 
                    className="h-full mx-auto drop-shadow-[0_0_100px_rgba(255,49,49,0.2)]" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[120%] h-1 bg-gradient-to-r from-transparent via-[#ff3131]/20 to-transparent rotate-12" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA - Minimalist Apple/Nothing style */}
      <SectionWrapper className="bg-white text-black py-64">
        <div className="container mx-auto px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[180px] font-black tracking-tighter mb-20 leading-[0.8] uppercase italic"
          >
            Open <br /> Design.
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
             <a href="https://github.com/Sushrutha05/Nexus-Gamepad" className="px-20 py-8 bg-black text-white rounded-none font-bold text-3xl hover:bg-[#ff3131] transition-all text-nothing text-center inline-block">
               View Code
             </a>
             <Link to="/work" className="text-3xl font-bold hover:text-[#ff3131] transition-all underline decoration-2 underline-offset-8">
               Back to Projects
             </Link>
          </div>
          <div className="mt-32 text-nothing text-[10px] text-black/40">
             Conceptual hardware project design study by Sushrutha.
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div>
              <h5 className="text-nothing text-[10px] text-white mb-8">Layouts</h5>
              <ul className="space-y-4 text-[#86868b] text-sm">
                <li>Nexus Air</li>
                <li>Nexus Pro</li>
                <li>Nexus Ultra</li>
              </ul>
            </div>
            <div>
              <h5 className="text-nothing text-[10px] text-white mb-8">Concepts</h5>
              <ul className="space-y-4 text-[#86868b] text-sm">
                <li>Modularity</li>
                <li>Actuators</li>
                <li>High Speed Polling</li>
              </ul>
            </div>
            <div>
              <h5 className="text-nothing text-[10px] text-white mb-8">Author</h5>
              <ul className="space-y-4 text-[#86868b] text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">About Sushrutha</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Get in Touch</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-nothing text-[10px] text-white mb-8">Links</h5>
              <ul className="space-y-4 text-[#86868b] text-sm">
                <li><a href="https://github.com/Sushrutha05" className="hover:text-white transition-colors">GitHub Profile</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
            <div className="text-nothing text-2xl font-black">NEXUS MODULAR</div>
            <div className="text-[10px] text-[#86868b] font-mono">
              Designed as a hardware exploration concept study.
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default NexusModular;
