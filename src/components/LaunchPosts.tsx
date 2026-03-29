import { motion } from "motion/react";
import { Info } from "lucide-react";

export default function LaunchPosts() {
  const purple = "#4B2C82";
  const yellow = "#F9E47C";

  return (
    <section className="py-24 px-6 bg-[#F9E47C] overflow-hidden font-sans text-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-16 text-[#4B2C82]"
        >
          Launch Posts
        </motion.h2>

        <div className="space-y-24">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Poster 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 shadow-2xl rounded-lg overflow-hidden"
            >
              <img 
                src="/Screenshot_2026-03-29_191452.png" 
                alt="Launch Poster 1" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Content 1 */}
            <div className="lg:col-span-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xl md:text-2xl font-bold">with</span>
                  <span className="bg-[#4B2C82] text-white px-4 py-1 text-2xl md:text-3xl font-black rounded-sm">
                    955+ saves
                  </span>
                </div>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                  this is the top ranking posts when it comes to <span className="text-blue-600">Hyderabadi Food Keyword</span> on Pinterest
                </p>
              </motion.div>

              {/* Performance Card 1 Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="shadow-xl rounded-2xl overflow-hidden"
              >
                <img 
                  src="/Screenshot_2026-03-29_191529.png" 
                  alt="Performance Stats 1" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Poster 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 shadow-2xl rounded-lg overflow-hidden"
            >
              <img 
                src="/Screenshot_2026-03-29_191545.png" 
                alt="Launch Poster 2" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Content 2 */}
            <div className="lg:col-span-8">
              {/* Performance Card 2 Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="shadow-xl rounded-2xl overflow-hidden"
              >
                <img 
                  src="/Screenshot_2026-03-29_191605.png" 
                  alt="Performance Stats 2" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
