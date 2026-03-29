import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <section className="bg-[#121212] py-24 px-6 relative z-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
            What I Bring <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">to the Table.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-8 text-neutral-300 text-xl md:text-2xl leading-relaxed"
        >
          <p>
            I bring a combination of <span className="text-white font-medium">brand storytelling</span>, <span className="text-white font-medium">audience-focused communication</span>, and <span className="text-white font-medium">execution-driven marketing</span>. My experience across client-facing growth, digital campaigns, and early-stage brand building has helped me develop a strong understanding of how to communicate clearly, build engagement, and maintain consistency across touchpoints.
          </p>
          <p>
            I am not only someone who can think creatively about brand voice and content, but also someone who can execute with structure, collaborate across teams, and use data to improve performance. Through my work and entrepreneurial experience, I have developed hands-on exposure to social media promotion, audience engagement, campaign planning, CRM workflows, Google Ads, Meta Ads, GA4, and AI-assisted content processes.
          </p>
          <p className="border-l-2 border-white/20 pl-6 text-neutral-400 italic mt-8 font-light">
            "What sets me apart is that I approach brand communication with both creativity and ownership. I care deeply about how a brand is perceived, how people connect with it, and how communication can drive trust, recall, and growth. I am thoughtful in my writing, comfortable working across functions, and eager to contribute ideas while also doing the day-to-day execution work that helps a marketing team move faster and better."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
