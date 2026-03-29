import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Megaphone, Rocket, Star, Phone, Quote } from "lucide-react";

export default function ScrollyCanvas() {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = ["Bonjour", "Hello", "Hola", "Namaste", "Ciao"];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#F9F9F9] flex flex-col items-center pt-16 px-6 overflow-hidden font-sans">
      {/* Animated Greeting Tag */}
      <div className="mb-6 h-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={greetings[greetingIndex]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="px-6 py-1.5 rounded-full border border-zinc-300 text-zinc-800 font-medium text-sm relative bg-white shadow-sm"
          >
            {greetings[greetingIndex]}
            <div className="absolute -top-2 -right-3 transform rotate-12">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 18C4 18 6 12 12 10" stroke="#F27D26" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 6C10 6 12 12 18 14" stroke="#F27D26" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Title */}
      <div className="text-center mb-16 relative z-30 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.1]">
          I'm <span className="text-[#F27D26]">Aris Ahmed</span> 👋, <br />
          A Brand & Marketing Specialist
        </h1>
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
           <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M10 40C10 40 15 25 30 20" stroke="#F27D26" strokeWidth="2" strokeLinecap="round"/>
              <path d="M20 50C20 50 25 35 40 30" stroke="#F27D26" strokeWidth="2" strokeLinecap="round"/>
           </svg>
        </div>
      </div>

      {/* Central Visual Container */}
      <div className="relative w-full max-w-5xl flex justify-center items-end mt-auto">
        
        {/* The Orange Circle Background */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-[-10%] w-[320px] h-[320px] md:w-[580px] md:h-[580px] bg-[#F27D26] rounded-full -z-0"
        />

        {/* User Image - Centered and Scaled */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-20 w-[300px] md:w-[500px] flex justify-center"
        >
          <div className="relative">
            <img
              src="src/components/WhatsApp Image 2026-03-28 at 4.10.48 PM.jpeg"
              alt="Aris Ahmed - Brand & Marketing Specialist"
              className="w-full h-auto object-cover rounded-b-full drop-shadow-2xl max-h-[600px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* --- Precisely Positioned Tags --- */}
        
        {/* Marketing - Top Left */}
        <div className="absolute top-[15%] left-[5%] md:left-[15%] z-30">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl border border-white/10"
          >
            <Megaphone className="w-4 h-4 text-zinc-300" />
            <span className="text-sm font-bold tracking-wide">Marketing</span>
          </motion.div>
        </div>

        {/* Ads - Top Right */}
        <div className="absolute top-[35%] right-[5%] md:right-[15%] z-30">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl border border-white/10"
          >
            <Rocket className="w-4 h-4 text-zinc-300" />
            <span className="text-sm font-bold tracking-wide">Ads</span>
          </motion.div>
        </div>

        {/* Brand - Bottom Left */}
        <div className="absolute bottom-[25%] left-[8%] md:left-[22%] z-30">
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl border border-white/10"
          >
            <Star className="w-4 h-4 text-zinc-300" />
            <span className="text-sm font-bold tracking-wide">Brand</span>
          </motion.div>
        </div>

        {/* Social Media - Bottom Right */}
        <div className="absolute bottom-[10%] right-[8%] md:right-[22%] z-30">
          <motion.div
            animate={{ x: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl border border-white/10"
          >
            <Phone className="w-4 h-4 text-zinc-300" />
            <span className="text-sm font-bold tracking-wide">Social Media</span>
          </motion.div>
        </div>

        {/* Left Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute left-0 bottom-[15%] max-w-[240px] hidden xl:block z-30"
        >
          <Quote className="w-8 h-8 text-[#F27D26] mb-4 opacity-50" />
          <p className="text-[#4A4A4A] text-sm font-medium leading-relaxed italic">
            "working under Aris, and I can confidently say he is an exceptional marketer and brand strategist"
          </p>
        </motion.div>

        {/* Right Experience Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute right-0 bottom-[15%] text-right hidden xl:block z-30"
        >
          <h3 className="text-5xl font-extrabold text-[#1A1A1A] mb-1">2 Years</h3>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] leading-tight">
            in Brand & Marketing<br />Experience
          </p>
        </motion.div>
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
    </section>
  );
}
