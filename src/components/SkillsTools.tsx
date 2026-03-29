import { motion } from "motion/react";
import { 
  Award,
} from "lucide-react";

const skills = [
  "Content & Branding",
  "Growth Marketing",
  "Social Media & Strategy",
  "Analytics",
  "Marketing Strategy",
  "Brand Management",
  "Creative Campaign"
];

const toolGroups = [
  {
    title: "Marketing Strategy",
    tools: [
      { name: "Google Analytics", icon: <img src="https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" className="w-8 h-8 object-contain" alt="Google Analytics" referrerPolicy="no-referrer" /> },
      { name: "Google Trends", icon: <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className="w-8 h-8 object-contain" alt="Google Trends" referrerPolicy="no-referrer" /> },
      { name: "Google Search Console", icon: <img src="images (1).jpeg" className="w-8 h-8 object-contain" alt="Google Search Console" referrerPolicy="no-referrer" /> },
    ]
  },
  {
    title: "Branding & Social Media Marketing",
    tools: [
      { name: "Adobe Creative Suite", icon: <img src="https://www.vectorlogo.zone/logos/adobe/adobe-icon.svg" className="w-8 h-8 object-contain" alt="Adobe" referrerPolicy="no-referrer" /> },
      { name: "CapCut", icon: <img src="images.jpeg" className="w-8 h-8 object-contain" alt="CapCut" referrerPolicy="no-referrer" /> },
      { name: "Figma", icon: <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" className="w-8 h-8 object-contain" alt="Figma" referrerPolicy="no-referrer" /> },
    ]
  },
  {
    title: "Analytics & Insight",
    tools: [
      { name: "PowerBI", icon: <img src="https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg" className="w-8 h-8 object-contain" alt="PowerBI" referrerPolicy="no-referrer" /> },
      { name: "Google Analytics", icon: <img src="https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" className="w-8 h-8 object-contain" alt="Google Analytics" referrerPolicy="no-referrer" /> },
      { name: "Microsoft 365", icon: <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" className="w-8 h-8 object-contain" alt="Microsoft 365" referrerPolicy="no-referrer" /> },
    ]
  },
  {
    title: "Ads & Growth",
    tools: [
      { name: "Meta Ads", icon: <img src="images.png" className="w-8 h-8 object-contain" alt="Meta Ads" referrerPolicy="no-referrer" /> },
      { name: "Google Ads", icon: <img src="https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" className="w-8 h-8 object-contain" alt="Google Ads" referrerPolicy="no-referrer" /> },
      { name: "Moengage", icon: <img src="images (2).jpeg" className="w-8 h-8 object-contain" alt="Moengage" referrerPolicy="no-referrer" /> },
    ]
  }
];

const certifications = [
  {
    title: "Rakamin Academy - Scholarship Digital Marketing Bootcamp",
    date: "Jan 2024 - Jul 2024",
    issuer: "Rakamin Academy"
  },
  {
    title: "Rakamin Academy - Advanced Social Media Marketing",
    date: "Aug 2024 - Aug 2024",
    issuer: "Rakamin Academy"
  },
  {
    title: "Cousera- Google Project Management: Professional Certificate",
    date: "Sep 2023 - Okt 2023",
    issuer: "Coursera"
  },
  {
    title: "Cousera- Google Data Analytics Professional Certificate",
    date: "Mar 2022 - Apr 2022",
    issuer: "Coursera"
  },
  {
    title: "Dataquest.io-Business Analyst Certification",
    date: "Jan 2022 - Apr 2022",
    issuer: "Dataquest.io"
  }
];

export default function SkillsTools() {
  return (
    <section className="py-24 px-6 bg-[#F5F5F5] text-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Skills Section */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-12 flex items-center justify-center gap-4"
          >
            <span className="text-orange-500">*</span>skills.
            {/* Hand-drawn accents */}
            <svg className="absolute -left-4 md:left-1/4 top-0 w-24 h-24 text-orange-400 opacity-50 hidden md:block" viewBox="0 0 100 100">
              <path d="M20,50 Q40,20 80,30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M30,60 Q50,40 90,50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <svg className="absolute -right-4 md:right-1/4 top-0 w-24 h-24 text-orange-400 opacity-50 hidden md:block rotate-180" viewBox="0 0 100 100">
              <path d="M20,50 Q40,20 80,30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M30,60 Q50,40 90,50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-8 py-3 border-2 border-[#121212] rounded-full text-lg font-bold hover:bg-[#121212] hover:text-white transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-[30px] md:rounded-[40px] shadow-sm border border-gray-100"
          >
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-12">tools.</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {toolGroups.map((group, gIndex) => (
                <div key={group.title} className="space-y-6">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400">{group.title}</h4>
                  <div className="flex gap-4 mb-4">
                    {group.tools.map((tool, tIndex) => (
                      <motion.div
                        key={tool.name}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.4 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shadow-inner group relative cursor-pointer"
                      >
                        {tool.icon}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#121212] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          {tool.name}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {group.tools.map((tool) => (
                      <li key={tool.name} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {tool.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certification Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-[30px] md:rounded-[40px] shadow-sm border border-gray-100"
          >
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-12">certification.</h3>
            
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-[#121212] rounded-2xl flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight mb-1 group-hover:text-orange-500 transition-colors">{cert.title}</h4>
                    <p className="text-sm text-gray-400 font-medium">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
