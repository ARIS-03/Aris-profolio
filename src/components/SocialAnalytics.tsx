import { motion } from "motion/react";

export default function SocialAnalytics() {
  const purple = "#4B2C82";
  const yellow = "#F9E47C";

  return (
    <section className="py-24 px-6 bg-[#F9E47C] overflow-hidden font-sans text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Facebook Analysis Column */}
          <div className="flex flex-col items-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#4B2C82] text-white px-6 md:px-10 py-3 rounded-full text-xl md:text-2xl font-bold shadow-lg text-center"
            >
              Facebook analysis
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full shadow-2xl rounded-[2.5rem] overflow-hidden bg-white"
            >
              <img 
                src="/assets/Screenshot_2026-03-29_192546.png" 
                alt="Facebook Analysis" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Instagram Analysis Column */}
          <div className="flex flex-col items-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#4B2C82] text-white px-6 md:px-10 py-3 rounded-full text-xl md:text-2xl font-bold shadow-lg text-center"
            >
              Instagram analysis
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full shadow-2xl rounded-[2.5rem] overflow-hidden bg-white"
            >
              <img 
                src="/assets/Screenshot_2026-03-29_192602.png" 
                alt="Instagram Analysis" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
