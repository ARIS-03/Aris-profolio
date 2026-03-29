import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Users, BarChart2, Instagram } from "lucide-react";

const achievements = [
  "Increased followers & engagement through consistent, high-quality content.",
  "Designed and optimized Instagram and Facebook profiles for a professional, branded look.",
  "Implemented social media strategies based on Meta's algorithm, using trending audio and formats.",
  "Community management to engage with followers, respond to inquiries, and build brand loyalty."
];

const skills = [
  "Social Media Management Analytics",
  "Social Media Marketing Strategy",
  "Social Media Audience Research",
  "Social Media Optimization",
  "Social Media Advertising Analytics"
];

const insightImages = [
  {
    title: "Reach Insights",
    url: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800",
    description: "Significant growth in accounts reached over 90 days."
  },
  {
    title: "Follower Growth",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Consistent upward trend in follower acquisition."
  },
  {
    title: "Professional Dashboard",
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    description: "High engagement rates and content performance."
  }
];

export default function SocialMediaInsights() {
  return (
    <section className="py-24 px-6 bg-[#121212] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-bold mb-6"
              >
                <Instagram className="w-4 h-4" />
                Case Study
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                Social Media <br />
                <span className="text-orange-500">Growth.</span>
              </h2>
              <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
                Driving measurable results through data-backed strategies and creative content optimization.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <TrendingUp className="text-orange-500" />
                Key Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <CheckCircle2 className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 text-lg leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Skills & Deliverables</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Content / Insights */}
          <div className="space-y-8">
            {insightImages.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white/5 rounded-[32px] overflow-hidden border border-white/10 hover:border-orange-500/50 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={insight.url}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-2xl font-bold">{insight.title}</h4>
                    <BarChart2 className="text-orange-500 w-6 h-6" />
                  </div>
                  <p className="text-gray-400">{insight.description}</p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-orange-500/20 blur-2xl group-hover:bg-orange-500/40 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
