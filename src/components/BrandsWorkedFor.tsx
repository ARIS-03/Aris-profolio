import { motion } from "motion/react";

const brands = [
  { name: "H3 PRE-SCHOOL", logo: "/src/components/01_Logo.webp" },
  { name: "HAAY SKINCARE", logo: "Screenshot 2026-03-28 193411.png" },
  { name: "THE ELEFANT", logo: "/src/components/H3-Preschool-Updated-Logo-e1729255476486.png" },
  { name: "MY SAMBANDH", logo: "Screenshot 2026-03-28 193329.png" },
  { name: "MILKMOR", logo: "Screenshot 2026-03-28 193426.png" },
  { name: "SO BAR", logo: "/src/components/logo.png" },
  { name: "OUTLINE", logo: "Screenshot 2026-03-28 192321.png" },
  { name: "PRAGEU EVENTS", logo: "Screenshot 2026-03-28 192347.png" },
  { name: "THE CHOCOLATE ROOM", logo: "Screenshot 2026-03-28 192447.png" },
  { name: "ELECSERVE", logo: "Screenshot 2026-03-28 192520.png" },
  { name: "QTOX", logo: "Screenshot 2026-03-28 192535.png" },
  { name: "ORTHOSPORT", logo: "Screenshot 2026-03-28 192549.png" },
  { name: "CHOCOLATE AND LOVE", logo: "Screenshot 2026-03-28 192602.png" },
  { name: "TRIVIO PHARMACY", logo: "Screenshot 2026-03-28 192615.png" },
  { name: "Q&Q RESEARCH INSIGHTS", logo: "Screenshot 2026-03-28 195054.png" },
];

export default function BrandsWorkedFor() {
  return (
    <section className="py-24 px-6 bg-[#F9E47C] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-[#121212]">
              Brands I have <br />
              <span className="text-orange-600">worked for.</span>
            </h2>
            <p className="text-[#121212]/70 text-lg font-medium">
              Collaborating with diverse businesses to build strong digital identities and drive meaningful growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="w-24 h-24 rounded-full border border-[#121212]/10 flex items-center justify-center text-orange-600">
              <span className="text-xs font-bold uppercase tracking-widest">Trust</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-xl flex items-center justify-center aspect-[1.8/1] shadow-sm"
            >
              <img 
                src={brand.logo.startsWith('http') || brand.logo.startsWith('/') ? brand.logo : `/${brand.logo}`} 
                alt={brand.name}
                className="max-w-full max-h-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if local image is missing
                  (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${brand.name}&backgroundColor=ffffff&color=121212`;
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
