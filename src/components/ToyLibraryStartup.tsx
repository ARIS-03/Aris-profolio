import { motion } from "motion/react";

export default function ToyLibraryStartup() {
  const purple = "#4B2C82";
  const yellow = "#F9E47C";

  return (
    <section className="py-24 px-6 bg-[#F9E47C] overflow-hidden font-sans relative">
      {/* Elephant Icon */}
      <div className="absolute top-8 left-8 w-12 h-12">
        <img 
          src="/assets/whatsapp_profile.jpeg" 
          alt="Elefant Icon" 
          className="w-full h-full object-contain mix-blend-multiply" 
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-[#4B2C82] mb-8">
                Building Awareness for a Toy Library Startup - the EleFant
              </h2>
              
              <div className="space-y-6 text-[#1a1a1a]">
                <div>
                  <h4 className="text-xl font-black mb-2">About the Brand:</h4>
                  <p className="text-lg leading-snug">
                    The EleFant is a <span className="font-black">toy subscription platform</span> that allows parents to rent toys instead of buying them, helping reduce clutter while giving children access to age-appropriate toys regularly.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#1a1a1a]"
            >
              <h4 className="text-xl font-black mb-2">My Role:</h4>
              <p className="text-lg leading-snug">
                Worked as a Social Media Manager in a fast-paced startup environment, closely collaborating with the founder to build <span className="font-black">awareness and trust</span> around a unique toy library concept.
              </p>
            </motion.div>
          </div>

          {/* Middle: Instagram Profile Mockup */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-3 border-2 border-dashed border-[#4B2C82] rounded-[2.5rem] bg-transparent w-full max-w-[320px]"
            >
              <div className="bg-[#121212] rounded-[2rem] overflow-hidden shadow-2xl text-white">
                {/* Header */}
                <div className="p-4 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold">theelefant_official</span>
                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-white p-0.5">
                      <img src="/assets/whatsapp_profile.jpeg" alt="Profile" className="w-full h-full object-contain rounded-full mix-blend-multiply" />
                    </div>
                    <div className="flex-1 flex justify-between text-center text-[10px]">
                      <div><div className="font-bold">682</div><div>posts</div></div>
                      <div><div className="font-bold">40.5K</div><div>followers</div></div>
                      <div><div className="font-bold">5</div><div>following</div></div>
                    </div>
                  </div>
                  
                  <div className="text-[10px] space-y-1 mb-4">
                    <div className="font-bold">the EleFant: New Toys Every Day. No Buying. No Clutter</div>
                    <div className="text-gray-400">Games/toys</div>
                    <p className="leading-tight">
                      India's Largest Toy Library 🏢<br />
                      1000+ Age-Appropriate Toys & Books 🧩📚<br />
                      0-12 Years 👶<br />
                      Free Home Delivery | Exchange Anytime 📦 ... <span className="text-gray-400">more</span>
                    </p>
                    <div className="text-blue-400 font-bold">linktr.ee/theelfant</div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex -space-x-2">
                        <div className="w-4 h-4 rounded-full bg-gray-600 border border-black"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-400 border border-black"></div>
                      </div>
                      <span className="text-gray-400">All Things Ele <span className="text-white">499 members</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Large Grid of Posts */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-4 border-2 border-dashed border-[#4B2C82] rounded-[3rem] bg-transparent"
            >
              <div className="grid grid-cols-3 gap-1 rounded-2xl overflow-hidden shadow-xl bg-white p-1">
                {[
                  "/assets/Screenshot_2026-03-29-17-47-09-26_1c337646f29875672b5a61192b9010f9.jpg.jpeg",
                  "/assets/Screenshot_2026-03-29-17-49-47-44_1c337646f29875672b5a61192b9010f9.jpg.jpeg",
                  "/assets/Screenshot_2026-03-29-17-50-45-85_1c337646f29875672b5a61192b9010f9.jpg.jpeg",
                  "/assets/Screenshot_2026-03-29-17-51-09-01_1c337646f29875672b5a61192b9010f9.jpg.jpeg",
                  "/assets/IMG_20260329_170933.jpg.jpeg",
                  "/assets/whatsapp_profile.jpeg"
                ].map((img, i) => (
                  <div key={i} className="aspect-[4/5] bg-gray-100 relative group overflow-hidden">
                    <img 
                      src={img} 
                      alt={`Post ${i}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                    />
                    {/* Reel Icon Overlay */}
                    <div className="absolute top-1 right-1">
                      <svg className="w-3 h-3 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
