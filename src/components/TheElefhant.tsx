import { motion } from "motion/react";

export default function TheElefhant() {
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
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.8] text-[#4B2C82]">
            Building Awareness for a <br />
            Toy Library Startup: <br />
            <span className="italic">The Elefhant</span>
          </h2>
        </motion.div>

        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Left Column: Strategy Boxes */}
          <div className="lg:col-span-3 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-base md:text-lg leading-tight">
                Developed a <span className="font-black">launch strategy</span> for a unique toy library concept, focusing on sustainability and child development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-base md:text-lg leading-tight">
                Created <span className="font-black">educational content</span> that highlights the benefits of play-based learning and the convenience of toy rentals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-base md:text-lg leading-tight">
                Managed <span className="font-black">community engagement</span> to build trust with parents and establish the brand as a reliable resource.
              </p>
            </motion.div>
          </div>

          {/* Center Column: Phone Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center lg:-mt-24">
            <div className="mb-6 text-center">
              <h3 className="text-3xl font-black text-[#4B2C82] uppercase tracking-tighter">The Elefhant</h3>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-4 border-2 border-dashed border-[#4B2C82] rounded-[3.5rem]"
            >
              <div className="w-full max-w-[380px] bg-[#121212] rounded-[2.8rem] border-[10px] border-[#121212] shadow-2xl overflow-hidden relative text-white aspect-[9/19]">
                <img 
                  src="/IMG_20260329_170933.jpg.jpeg" 
                  alt="The Elefhant Feed" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Strategy Boxes */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-base md:text-lg leading-tight">
                Optimized <span className="font-black">social media profiles</span> for better visibility and a professional look that appeals to modern parents.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-2 border-dashed border-[#4B2C82] p-6 rounded-[1.5rem] bg-transparent"
            >
              <p className="text-[#4B2C82] font-bold text-base md:text-lg leading-tight">
                Implemented <span className="font-black">targeted ad campaigns</span> to reach local families and drive subscriptions for the toy library.
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
                  <img 
                    src="/Screenshot_2026-03-29-17-49-47-44_1c337646f29875672b5a61192b9010f9.jpg.jpeg" 
                    alt="Elefhant Post 1" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square relative">
                  <img 
                    src="/Screenshot_2026-03-29-17-50-45-85_1c337646f29875672b5a61192b9010f9.jpg.jpeg" 
                    alt="Elefhant Post 2" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
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
              <img 
                src="/Screenshot_2026-03-29-17-49-47-44_1c337646f29875672b5a61192b9010f9.jpg.jpeg" 
                alt="Post 1" 
                className="w-full h-auto" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/Screenshot_2026-03-29-17-50-45-85_1c337646f29875672b5a61192b9010f9.jpg.jpeg" 
                alt="Post 2" 
                className="w-full h-auto" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/Screenshot_2026-03-29-17-51-09-01_1c337646f29875672b5a61192b9010f9.jpg.jpeg" 
                alt="Post 3" 
                className="w-full h-auto" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
