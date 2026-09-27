import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap, BookOpen, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  const iconMap = {
    Briefcase: Briefcase,
    Code: Code,
    GraduationCap: GraduationCap,
    BookOpen: BookOpen
  };

  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Dark (near-black) full-bleed rounded card section */}
      <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#0C0D12] text-white border border-gray-800 shadow-2xl overflow-hidden">
        
        {/* Ambient background glow accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* Left Column: Heading, Subtext, and Vertical Timeline */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between z-10">
            <div>
              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-bold tracking-widest uppercase mb-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>MY JOURNEY & EXPERIENCE</span>
              </motion.div>

              {/* Heading: Second line in purple accent */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-4"
              >
                <span className="block text-white">Experience That</span>
                <span className="block text-[#A855F7]">Shapes Solutions.</span>
              </motion.h2>

              {/* Short subtext */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-sm sm:text-base mb-10 max-w-lg leading-relaxed"
              >
                A progressive trajectory of technical rigor, from academic foundations in computer science to enterprise systems and full stack web applications.
              </motion.p>
            </div>

            {/* Vertical Timeline with icon markers */}
            <div className="relative pl-6 sm:pl-8 border-l border-gray-800 space-y-8 sm:space-y-10 my-2">
              {experienceData.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Briefcase;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="relative group"
                  >
                    {/* Icon marker on vertical line */}
                    <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-full bg-[#181922] border border-purple-500/50 flex items-center justify-center text-purple-400 shadow-md group-hover:scale-110 group-hover:border-purple-400 group-hover:bg-purple-900/50 transition-all duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-lg text-white group-hover:text-purple-300 transition-colors">
                          {item.role}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
                          {item.date}
                        </span>
                      </div>

                      <div className="text-sm font-semibold text-[#A855F7] mb-2">
                        {item.company}
                      </div>

                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/80 text-xs text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Continuously advancing modern full-stack methodologies</span>
            </div>

          </div>

          {/* Right Column: Large atmospheric illustration filling right half */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full h-full relative"
            >
              {/* Warrior figure against glowing orange/red sky with distant tower: {{EXPERIENCE_IMAGE}} */}
              <img 
                src="/assets/experience-warrior.webp" 
                alt="{{EXPERIENCE_IMAGE}} — Warrior figure against glowing sky with tower" 
                data-placeholder="{{EXPERIENCE_IMAGE}}"
                className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              {/* Subtle edge vignette / blending gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D12] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0C0D12] lg:via-transparent lg:to-transparent opacity-80" />
              
              {/* Cinematic badge overlay */}
              <div className="absolute bottom-6 right-6 glass-dark px-4 py-2 rounded-2xl border border-white/10 max-w-xs text-right hidden sm:block">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block">
                  Resilience & Vision
                </span>
                <span className="text-xs text-gray-300">
                  Engineering with relentless discipline.
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
