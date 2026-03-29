import { motion } from "motion/react";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function AIWorkflow() {
  const steps = [
    "Brainstorming campaign themes and content directions",
    "Generating multiple caption or headline variations",
    "Refining tone to better match brand voice",
    "Repurposing one idea into multiple content formats",
    "Checking clarity and consistency in early drafts",
    "Speeding up first-draft ideation while preserving final editorial control"
  ];

  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 mr-2 text-indigo-400" />
            08 / Efficiency
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            How I Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">AI.</span>
          </h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto leading-relaxed">
            I use AI as a support tool to make content workflows faster, more flexible, and more consistent. It helps reduce friction, but the judgment, tone, and final communication decisions remain human.
          </p>
        </motion.div>

        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 mt-12">
          <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">Ways I integrate AI:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle2 className="w-6 h-6 mr-4 text-purple-500 shrink-0" />
                <span className="text-neutral-300 leading-relaxed">{step}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-center"
          >
            <p className="text-purple-200 font-medium">
              "AI supports the process. It does not replace strategic thinking, audience understanding, or brand judgment."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
