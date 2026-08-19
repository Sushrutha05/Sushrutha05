import React, { useEffect, useRef, useState, memo } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence, useMotionValue, motionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ChevronRight, BarChart2, Music, Zap, Settings, Activity, Layers, Target, Info, Sparkles } from 'lucide-react';
import SEO from '../components/seo/SEO';

// Optimized Mouse Position Hook - Uses MotionValues to avoid re-renders
const useMousePosition = () => {
  const mouseX = motionValue(0);
  const mouseY = motionValue(0);

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

const MagneticButton = memo(({ children, className, href }) => {
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
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
});

const PremiumCard = memo(({ title, description, icon: Icon, delay = 0, className = "", children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.8], [100, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className={`glass-panel rounded-[40px] p-10 md:p-14 border border-white/5 hover:border-white/20 transition-all duration-700 group relative overflow-hidden will-change-transform ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d55]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, 0] }}
          className="w-14 h-14 rounded-2xl bg-[#1c1c1e] border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#ff2d55] transition-all duration-500 shadow-xl"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-none">{title}</h3>
        <p className="text-[#a1a1a6] text-xl leading-relaxed font-medium group-hover:text-white/80 transition-colors">{description}</p>
        {children}
      </div>
    </motion.div>
  );
});

const SectionWrapper = ({ children, className = "", id, offset = ["start end", "end start"] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  });

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      {typeof children === 'function' ? children(scrollYProgress) : children}
    </section>
  );
};

const NaadSwarPremium = () => {
  const containerRef = useRef(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 25, restDelta: 0.001 });

  // Mouse Interaction Transforms - Optimized for GPU
  const springMouseX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const springMouseY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  const rotateX = useTransform(springMouseY, [0, 1000], [2, -2]);
  const rotateY = useTransform(springMouseX, [0, 1920], [-2, 2]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroCharacters = "NaadSwar".split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      ref={containerRef}
      className="relative bg-black text-white font-sans selection:bg-[#ff2d55]/30 perspective-1000"
    >
      <SEO
        title="NaadSwar - Pitch Tracking Project"
        description="Experience pitch awareness for Indian Classical music. Low-latency, microtone accurate, and real-time audio processing."
        keywords="Indian Classical Music, Pitch Detection, Swara, Riyaaz, Carnatic, Hindustani"
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff2d55] to-[#5e5ce6] z-[110] origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Ultra Glass Nav */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-black/40 backdrop-blur-3xl py-5">
        <div className="container mx-auto px-8 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#ff2d55] flex items-center justify-center relative">
              <Music className="w-4 h-4 text-white z-10" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-[#ff2d55] rounded-lg"
              />
            </div>
            NaadSwar
          </motion.div>
          <div className="hidden md:flex items-center gap-10">
            {["Experience", "Inner Workings"].map((item, idx) => (
              <motion.a
                key={item}
                href={idx === 0 ? "#features" : "#tech"}
                whileHover={{ y: -2, color: "#ff2d55" }}
                className="text-sm font-bold text-[#a1a1a6] transition-all uppercase tracking-widest"
              >
                {item}
              </motion.a>
            ))}
            <MagneticButton
              href="https://drive.google.com/uc?export=download&id=1VkXRROFYG7HVIse-xmvWeDH5XDb_vsbq"
              className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-[#ff2d55] hover:text-white transition-all shadow-lg"
            >
              Download APK
            </MagneticButton>
          </div>
        </div>
      </nav>

      {/* Epic Hero Section - Initial state set to visible (scroll 0) */}
      <SectionWrapper offset={["start start", "end start"]} className="h-screen flex items-center justify-center">
        {(progress) => {
          // Now progress starts at 0 when the page is at the top.
          const opacity = useTransform(progress, [0, 0.3], [1, 0]);
          const scale = useTransform(progress, [0, 0.3], [1, 0.8]);
          const y = useTransform(progress, [0, 0.3], [0, -100]);

          return (
            <>
              <motion.div
                style={{ opacity, scale, y, rotateX, rotateY }}
                className="container mx-auto px-8 text-center z-20 will-change-transform"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block px-4 py-1.5 rounded-full bg-[#1c1c1e] border border-white/10 text-[#ff2d55] text-xs font-black uppercase tracking-[0.2em] mb-10"
                >
                  <Sparkles className="w-3 h-3 inline mr-2" />
                  Audio Prototyping Project
                </motion.div>

                <h1 className="text-7xl md:text-[140px] font-black tracking-tighter leading-[0.85] mb-10">
                  {heroCharacters.map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block bg-gradient-to-b from-white via-white to-[#333] bg-clip-text text-transparent"
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="text-2xl md:text-4xl text-[#86868b] font-medium max-w-4xl mx-auto mb-16 leading-tight tracking-tight"
                >
                  An exploration of acoustic precision and real-time visualization of Shrutis.
                </motion.p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <MagneticButton
                    href="https://drive.google.com/uc?export=download&id=1VkXRROFYG7HVIse-xmvWeDH5XDb_vsbq"
                    className="px-12 py-6 bg-[#ff2d55] text-white rounded-full font-black text-xl transition-all shadow-2xl shadow-[#ff2d55]/40 flex items-center gap-3 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Download APK</span>
                    <Download className="w-6 h-6 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                      whileHover={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 0.5 }}
                    />
                  </MagneticButton>
                  <a
                    href="#features"
                    className="text-white hover:text-[#ff2d55] font-black text-xl flex items-center gap-2 group transition-all"
                  >
                    Explore Concept <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </motion.div>

              {/* Background Parallax tied to local progress */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <motion.div
                  style={{
                    y: useTransform(progress, [0, 1], [0, 300]),
                    x: useTransform(springMouseX, [0, 1920], [10, -10])
                  }}
                  className="absolute top-0 right-0 w-full h-full will-change-transform"
                >
                  <img
                    src="naadswar_texture_soundwave_1773339575851.png"
                    className="w-full h-full object-cover opacity-30 scale-125 saturate-150"
                    alt="Background Texture"
                  />
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#ff2d55]/20 via-transparent to-transparent rounded-full blur-[140px] opacity-60 animate-pulse" />
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>
            </>
          );
        }}
      </SectionWrapper>

      {/* Feature Bento Section */}
      <SectionWrapper id="features" className="py-40 bg-black">
        {(progress) => {
          const titleY = useTransform(progress, [0, 0.3], [100, 0]);
          const titleOpacity = useTransform(progress, [0, 0.3], [0, 1]);

          return (
            <div className="container mx-auto px-8">
              <div className="text-center mb-32">
                <motion.h2
                  style={{ y: titleY, opacity: titleOpacity }}
                  className="text-6xl md:text-[140px] font-black tracking-tighter mb-10 leading-none will-change-transform"
                >
                  The Science <br /> of Sound.
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <PremiumCard
                  className="lg:col-span-12 h-[650px] !p-0 overflow-hidden group/hero"
                  title="Real-Time Visualization"
                  description="Capture vocal input oscillations with a real-time visual histogram."
                  icon={Activity}
                >
                  <div className="absolute top-0 right-0 p-10">
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [10, 40, 15, 30, 10] }}
                          transition={{ duration: 1 + i * 0.2, repeat: Infinity }}
                          className="w-1.5 bg-[#ff2d55] rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-3/5 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5 }}
                      src="/naadswar/image.png"
                      className="w-full h-full object-cover opacity-50 group-hover/hero:opacity-90 transition-opacity duration-1000"
                      alt="App UI"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>
                </PremiumCard>

                <PremiumCard
                  className="lg:col-span-7"
                  title="Pitch Calibration"
                  description="Adjust the base Sa frequency and calibrate the pitch matrix dynamically. Accuracy to within ±0.1 cents."
                  icon={Target}
                />

                <PremiumCard
                  className="lg:col-span-5 hover:border-[#ff2d55]/40"
                  title="Low-Latency Processing"
                  description="Optimized audio capture code blocks ensure low-latency feedback between voice input and visualization."
                  icon={Zap}
                />

                <motion.div
                  whileHover={{ y: -10 }}
                  className="lg:col-span-12 glass-panel rounded-[60px] overflow-hidden min-h-[600px] flex flex-col md:flex-row items-center border border-white/5 group/maestro will-change-transform"
                >
                  <div className="md:w-1/2 p-20">
                    <h3 className="text-6xl font-black mb-10 tracking-tighter leading-none">Built for Swara Riyaaz</h3>
                    <p className="text-[#a1a1a6] text-3xl font-medium leading-tight mb-12">NaadSwar acts as a visual guide to assist singers in exploring microtone scales.</p>
                    <div className="flex gap-6">
                      {[
                        { val: "48kHz", label: "Sampling", bg: "#5e5ce6" },
                        { val: "Mono", label: "Precision", bg: "#ff2d55" }
                      ].map((item) => (
                        <motion.div
                          whileHover={{ scale: 1.1, backgroundColor: item.bg }}
                          key={item.label}
                          className="p-6 rounded-[30px] bg-white/5 border border-white/10 transition-colors cursor-default"
                        >
                          <span className="block text-4xl font-black text-white">{item.val}</span>
                          <span className="text-sm uppercase font-black opacity-60 tracking-widest">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/2 h-[600px] bg-gradient-to-br from-[#1c1c1e] to-black relative flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 20, repeat: Infinity }}
                      className="absolute inset-0 bg-[#ff2d55]/10 mix-blend-overlay"
                    />
                    <motion.img
                      whileHover={{ scale: 1.1, rotateY: 10 }}
                      src="naadswar_app_ui_mockup_1773295755920.png"
                      className="w-3/4 h-auto drop-shadow-[0_0_100px_rgba(255,45,85,0.3)] z-10 transition-transform duration-700"
                      alt="Mockup"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          );
        }}
      </SectionWrapper>

      {/* Comparison: Tuning Differences */}
      <SectionWrapper className="py-40 bg-[#050505]">
        {(progress) => {
          const xOffset = useTransform(progress, [0, 1], [50, -50]);

          return (
            <div className="container mx-auto px-8">
              <motion.h2
                style={{ x: xOffset }}
                className="text-6xl md:text-[120px] font-black tracking-tighter text-center mb-40 leading-none will-change-transform"
              >
                Tuning Differences
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[50px] overflow-hidden shadow-2xl">
                <div className="p-20 bg-black/60 backdrop-blur-3xl">
                  <h4 className="text-[#86868b] uppercase font-black tracking-[0.4em] text-sm mb-16 underline decoration-[#ff2d55]/30">Standard Tuners</h4>
                  <ul className="space-y-12">
                    {["Tempered Scale Only", "Standard A=440Hz Reference", "General Audio Latency"].map((text) => (
                      <li key={text} className="flex items-center gap-8 opacity-30 transition-opacity">
                        <div className="w-3 h-3 rounded-full bg-white/20" />
                        <span className="text-2xl font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-20 bg-gradient-to-br from-[#1c1c1e] to-black relative group/winning">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-10 right-10 px-6 py-2 rounded-full bg-[#ff2d55] text-xs font-black uppercase tracking-widest"
                  >
                    Microtonal
                  </motion.div>
                  <h4 className="text-[#ff2d55] uppercase font-black tracking-[0.4em] text-sm mb-16">NaadSwar App</h4>
                  <ul className="space-y-12">
                    {[
                      { icon: Zap, text: "22 Shrutis Mapped" },
                      { icon: Layers, text: "Fluid Octave Tracking" },
                      { icon: Activity, text: "Low-Lag Processing" }
                    ].map((item, i) => (
                      <li key={item.text} className="flex items-center gap-10">
                        <item.icon className="w-8 h-8 text-[#ff2d55] group-hover/winning:scale-125 transition-transform" />
                        <span className="text-3xl font-black">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        }}
      </SectionWrapper>

      {/* Extreme Final CTA - Optimized performance */}
      <SectionWrapper className="py-60 bg-black overflow-hidden">
        {(progress) => {
          const scale = useTransform(progress, [0, 0.8], [0.8, 1]);
          const opacity = useTransform(progress, [0, 0.8], [0.3, 1]);

          return (
            <div className="container mx-auto px-8 text-center z-10 relative">
              <motion.div style={{ scale, opacity }} className="will-change-transform">
                <h2 className="text-7xl md:text-[220px] font-black tracking-tighter mb-20 leading-[0.8] text-white">
                  Explore <br /> Sound.
                </h2>
                <div className="flex flex-col items-center gap-12">
                  <MagneticButton
                    href="https://drive.google.com/uc?export=download&id=1VkXRROFYG7HVIse-xmvWeDH5XDb_vsbq"
                    className="px-24 py-10 bg-white text-black rounded-full font-black text-4xl transition-all shadow-[0_0_100px_rgba(255,255,255,0.2)] hover:bg-[#ff2d55] hover:text-white"
                  >
                    Download App
                  </MagneticButton>
                  <div className="flex items-center gap-4 text-[#ff2d55] font-black uppercase tracking-[0.3em] text-sm animate-pulse">
                    <Sparkles className="w-5 h-5" /> Android App Project
                  </div>
                </div>
              </motion.div>

              {/* Optimized Background Glow - Reduced blur and simplified animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#ff2d55]/20 to-[#5e5ce6]/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            </div>
          );
        }}
      </SectionWrapper>

      <footer className="py-40 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-32">
          <div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-8xl font-black tracking-tighter mb-16 cursor-default"
            >
              NaadSwar.
            </motion.div>
            <div className="flex flex-wrap gap-12 text-[#a1a1a6] text-sm font-black uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors">Portfolio Home</Link>
              <Link to="/work" className="hover:text-white transition-colors">Projects</Link>
              <a href="https://github.com/Sushrutha05" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-[#86868b] text-2xl font-medium max-w-md ml-auto leading-relaxed">
              A project investigating real-time audio visualization for classical Indian scales.
              <br />
              <span className="text-white font-black mt-8 block">Designed by Sushrutha.</span>
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default NaadSwarPremium;
