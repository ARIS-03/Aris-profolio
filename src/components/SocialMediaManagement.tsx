import { motion } from "motion/react";

export default function SocialMediaManagement() {
  const purple = "#4B2C82";
  const yellow = "#F9E47C";

  return (
    <section className="py-24 px-6 bg-[#F9E47C] overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] text-[#4B2C82]">
            Social Media <br />
            Management
          </h2>
        </motion.div>

        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Left Column: Strategy Boxes & Logos */}
          <div className="lg:col-span-3 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-lg leading-tight">
                Built content around the <span className="font-black">brand’s key USPs</span>: farm-fresh quality products, happy-cows philosophy, and doorstep delivery.
              </p>
            </motion.div>

            <div className="flex justify-start pl-4">
              <img src="Screenshot 2026-03-28 193426.png" alt="Milkmor Logo" className="h-14 object-contain mix-blend-multiply" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-lg leading-tight">
                Wrote <span className="font-black">post copy, reel scripts, and captions</span> while visualising concepts for the design team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-lg leading-tight">
                Created <span className="font-black">trend-aligned content</span> by staying updated with current topics and audience behaviour.
              </p>
            </motion.div>

            <div className="flex justify-start pl-4">
              <img src="Screenshot 2026-03-28 193426.png" alt="Milkmor Logo" className="h-14 object-contain mix-blend-multiply" />
            </div>
          </div>

          {/* Center Column: Phone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center lg:-mt-24">
            <div className="mb-6 text-center">
              <h3 className="text-3xl font-black text-[#4B2C82] uppercase tracking-tighter">Milk More</h3>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-4 border-2 border-dashed border-[#4B2C82] rounded-[3.5rem]"
            >
              <div className="w-full max-w-[380px] bg-[#121212] rounded-[2.8rem] border-[10px] border-[#121212] shadow-2xl overflow-hidden relative text-white aspect-[9/19]">
                <img 
                  src="IMG_20260328_202119.jpg.jpeg" 
                  alt="Social Media Feed" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Strategy Boxes & Swipe Post */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-lg leading-tight">
                Managed the <span className="font-black">monthly social media calendar</span> and end-to-end content execution for Milkmor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-lg leading-tight">
                Developed a balanced content mix, <span className="font-black">educational, product-focused, kid & health-centric & trending/fun posts</span>, to drive awareness & engagement.
              </p>
            </motion.div>

            {/* Swipe Post Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl bg-white p-1"
            >
              <div className="grid grid-cols-2 gap-1 rounded-xl overflow-hidden relative">
                <div className="aspect-square relative">
                  <img src="milkmorindia-20260328-0002.jpg.jpeg" alt="Swipe 1" className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-2.48 2.48-.73.03-1.13-.41-1.96-.41-.83 0-1.27.4-1.93.43-.69.03-1.63-1.25-2.48-2.48-1.74-2.52-3.07-7.11-1.26-10.25 1.07-1.87 3-3.04 5.08-3.07 1.58-.03 3.07 1.06 4.03 1.06.96 0 2.73-1.31 4.6-1.11 1.87.2 3.31 1.05 4.1 2.2-3.88 2.29-3.25 7.28.74 9.56-.75 1.88-1.72 3.75-3.03 5.59z"/></svg>
                  </div>
                  <div className="absolute top-2 right-2">
                    <img src="Screenshot 2026-03-28 193426.png" alt="Logo" className="h-4 object-contain mix-blend-multiply brightness-0 invert" />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center px-1">
                    <p className="text-[9px] font-black text-white uppercase tracking-tighter drop-shadow-md">How to become a gir cow?</p>
                  </div>
                </div>
                <div className="aspect-square relative">
                  <img src="milkmorindia-20260328-0003.jpg.jpeg" alt="Swipe 2" className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-2.48 2.48-.73.03-1.13-.41-1.96-.41-.83 0-1.27.4-1.93.43-.69.03-1.63-1.25-2.48-2.48-1.74-2.52-3.07-7.11-1.26-10.25 1.07-1.87 3-3.04 5.08-3.07 1.58-.03 3.07 1.06 4.03 1.06.96 0 2.73-1.31 4.6-1.11 1.87.2 3.31 1.05 4.1 2.2-3.88 2.29-3.25 7.28.74 9.56-.75 1.88-1.72 3.75-3.03 5.59z"/></svg>
                  </div>
                  <div className="absolute top-2 right-2">
                    <img src="Screenshot 2026-03-28 193426.png" alt="Logo" className="h-4 object-contain mix-blend-multiply brightness-0 invert" />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center px-1">
                    <p className="text-[9px] font-black text-white uppercase tracking-tighter drop-shadow-md">Why did you swipe?</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row: 3 Large Posts */}
        <div className="flex justify-end mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="milkmorindia-20260328-0004.jpg.jpeg" alt="Post 1" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="milkmorindia-20260328-0001.jpg.jpeg" alt="Post 2" className="w-full h-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="WhatsApp Image 2026-03-29 at 4.29.21 PM.jpeg" alt="Post 3" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
