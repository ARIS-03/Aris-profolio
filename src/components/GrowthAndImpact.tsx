import { motion } from "motion/react";

export default function GrowthAndImpact() {
  const purple = "#4B2C82";
  const yellow = "#F9E47C";
  const dashColor = "#8B5CF6"; // Vibrant purple for dashed borders

  return (
    <section className="py-24 px-6 bg-[#F9E47C] overflow-hidden font-sans text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Title and Charts */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.8] mb-6 text-[#4B2C82]">
                Growth & Impact
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight max-w-2xl text-black">
                Generated <span className="font-black">37M+ views, 52K profile visits & 5K+ links clicks</span> through organic & influencer-led content.
              </p>
            </motion.div>

            {/* Charts Containers */}
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
              {/* Container 1: Audience Growth */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="border-[4px] border-dashed border-[#8B5CF6] rounded-[2.5rem] p-4 bg-transparent flex-1 flex items-center justify-center"
              >
                <div className="w-full aspect-square overflow-hidden rounded-2xl shadow-sm">
                  <img src="/WhatsApp_Image_2026-03-29_at_6.08.23_PM.jpeg" alt="Audience Growth Chart" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Container 2: Reach & Engagement */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border-[4px] border-dashed border-[#8B5CF6] rounded-[2.5rem] p-4 bg-transparent flex-[2] flex gap-4 items-center"
              >
                <div className="flex-1 aspect-square overflow-hidden rounded-2xl shadow-sm">
                  <img src="/WhatsApp_Image_2026-03-29_at_6.08.55_PM.jpeg" alt="Views Chart" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 aspect-square overflow-hidden rounded-2xl shadow-sm">
                  <img src="/WhatsApp_Image_2026-03-29_at_6.09.27_PM.jpeg" alt="Interactions Chart" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Bottom Left Text Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#4B2C82]">Audience Growth:</h3>
                <p className="text-3xl md:text-4xl font-black text-black">40.8K Followers</p>
                <p className="text-xl md:text-2xl font-bold text-black">Grew from 35K → 40.8K</p>
                <p className="text-xl md:text-2xl font-bold text-black">16% growth in 2.5 months</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#4B2C82]">Reach & Engagement:</h3>
                <p className="text-xl md:text-2xl font-bold text-black">• <span className="font-black">37.2M Content Views</span> with 446K+ organic views</p>
                <p className="text-xl md:text-2xl font-bold text-black">• <span className="font-black">54.8K total interactions</span> with 20K+ organic interactions</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Dashboards and Stats */}
          <div className="lg:col-span-5 space-y-12">
            {/* Container 3: Profile Activity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border-[4px] border-dashed border-[#8B5CF6] rounded-[2.5rem] p-4 bg-transparent flex gap-4 items-start"
            >
              <div className="flex-[0.8] overflow-hidden rounded-2xl shadow-sm">
                <img src="/WhatsApp_Image_2026-03-29_at_6.11.02_PM.jpeg" alt="Linktree Dashboard" className="w-full h-auto" />
              </div>
              <div className="flex-1 overflow-hidden rounded-2xl shadow-sm">
                <img src="/WhatsApp_Image_2026-03-29_at_6.13.31_PM.jpeg" alt="Profile Activity" className="w-full h-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#4B2C82]">Traffic Generated:</h3>
              <ul className="space-y-2">
                <li className="text-xl md:text-2xl font-bold flex items-start gap-2 text-black">
                  <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0" />
                  <span><span className="font-black text-2xl md:text-3xl">52.1K</span> Profile Visits - +82.9% increase</span>
                </li>
                <li className="text-xl md:text-2xl font-bold flex items-start gap-2 text-black">
                  <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0" />
                  <span><span className="font-black text-2xl md:text-3xl">5.1K</span> External Link Taps - +107.5% increase</span>
                </li>
                <li className="text-xl md:text-2xl font-bold flex items-start gap-2 text-black">
                  <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0" />
                  <span><span className="font-black text-2xl md:text-3xl">4.65K</span> Link-in-bio Clicks</span>
                </li>
              </ul>
            </motion.div>

            {/* Container 4: Campaign Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="border-[4px] border-dashed border-[#8B5CF6] rounded-[2.5rem] p-4 bg-transparent overflow-hidden"
            >
              <img src="/WhatsApp_Image_2026-03-29_at_6.14.03_PM.jpeg" alt="Campaign Dashboard" className="w-full h-auto rounded-2xl shadow-sm" />
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#4B2C82]">Influencer Impact:</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4 flex-1"
                >
                  <ul className="space-y-2">
                    <li className="text-xl md:text-2xl font-bold flex items-start gap-2 text-black">
                      <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0" />
                      <span><span className="font-black">150+</span> Clicks & organic signups</span>
                    </li>
                    <li className="text-xl md:text-2xl font-bold flex items-start gap-2 text-black">
                      <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0" />
                      <span><span className="font-black">100K+</span> Views, 3.9K Shares & 1.2 K Saves</span>
                    </li>
                  </ul>
                </motion.div>
                {/* Container 5: Influencer Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="border-[4px] border-dashed border-[#8B5CF6] rounded-[2.5rem] p-4 bg-transparent overflow-hidden flex-1 flex items-center justify-center"
                >
                  <img src="/WhatsApp_Image_2026-03-29_at_6.14.03_PM.jpeg" alt="Influencer Stats" className="w-full h-auto rounded-2xl shadow-sm" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
