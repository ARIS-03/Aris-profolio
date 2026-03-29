import { motion } from "motion/react";

export default function WhatIBring() {
  const points = [
    { title: "Brand Storytelling", desc: "Crafting narratives that resonate with audiences." },
    { title: "Audience-Focused", desc: "Communication strategies built around user needs." },
    { title: "Execution-Driven", desc: "Turning high-level ideas into measurable results." }
  ];

  return (
    <section className="bg-[#121212] py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Core Strengths</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-zinc-400 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
