import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Code, Rocket, Sparkles, Download } from 'lucide-react';
import { personalInfo, credentials } from '../data/portfolioData';

export default function AboutSection({ onNavigate }) {
  const credIcons = {
    GraduationCap,
    Code,
    Rocket
  };

  return (
    <section id="about" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* About Me Card (~24px radius, rounded-3xl / rounded-[28px]) */}
      <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#F3F4F6] border border-gray-200/80 shadow-sm p-6 sm:p-10 lg:p-14 overflow-hidden">

        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Fixed aspect-ratio portrait photo with bottom-to-top reveal & decorative mascot */}
          <div className="lg:col-span-5 relative flex justify-center">

            {/* Fixed Photo Container: aspect-ratio: 1/1.02, overflow: hidden, rigid size */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[1.7/2] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gray-200 border-4 border-white shadow-xl shadow-gray-300/40">
              {/* Bottom-to-Top Reveal Animation */}
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
              >
                <img
                  src="/assets/sonu-portrait.jpg"
                  alt="Sonu Kumar — About Profile"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.02]"
                />
              </motion.div>
            </div>

            {/* Small robot mascot PNG anchored at bottom-left corner as decoration only: {{ROBOT_IMAGE_ABOUT_1}} */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 z-20 pointer-events-none"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -2, 0, 2, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut"
                }}
                className="w-24 sm:w-28 lg:w-32 drop-shadow-2xl"
              >
                <img
                  src="/assets/robot-about-1.png"
                  alt="{{ROBOT_IMAGE_ABOUT_1}} — Robot mascot at bottom-left"
                  data-placeholder="{{ROBOT_IMAGE_ABOUT_1}}"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>
            </motion.div>

          </div>

          {/* Right Column: Pill label, Two-line serif headline, bio, buttons, and decorative Mascot 2 */}
          <div className="lg:col-span-7 relative flex flex-col justify-center">

            {/* Floating robot mascot PNG near top-right as decoration only: {{ROBOT_IMAGE_ABOUT_2}} */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-10 sm:-top-14 right-0 sm:right-4 z-20 pointer-events-none"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, 0, -3, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5.5,
                  ease: "easeInOut"
                }}
                className="w-20 sm:w-24 lg:w-28 drop-shadow-xl"
              >
                <img
                  src="/assets/robot-about-2.png"
                  alt="{{ROBOT_IMAGE_ABOUT_2}} — Robot mascot at top-right"
                  data-placeholder="{{ROBOT_IMAGE_ABOUT_2}}"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>
            </motion.div>

            {/* "ABOUT ME" Pill Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-widest uppercase mb-4 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT ME</span>
            </motion.div>

            {/* Two-line Serif Headline: "Turning Ideas" / "Into Real Impact." */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-950 mb-6 leading-[1.12]"
            >
              <span className="block text-[#111113]">Turning Ideas</span>
              <span className="block text-[#8B5CF6]">Into Real Impact.</span>
            </motion.h2>

            {/* Two-paragraph Bio */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
            >
              <p>{personalInfo.bio1}</p>
              <p>{personalInfo.bio2}</p>
            </motion.div>

            {/* Two Buttons: "View my projects" & "Get in touch" */}
            <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex flex-wrap items-center gap-4"
>
  {/* View Projects */}
  <button
    onClick={() =>
      onNavigate
        ? onNavigate('work')
        : document.getElementById('work')?.scrollIntoView({
            behavior: 'smooth'
          })
    }
    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111113] text-white text-sm sm:text-base font-medium transition-all duration-300 hover:bg-black hover:scale-[1.02] active:scale-[0.98]"
  >
    <span>View my projects</span>

    <ArrowRight
      className="w-4 h-4 transition-transform group-hover:translate-x-1"
    />
  </button>

  {/* Get In Touch */}
  <button
    onClick={() =>
      onNavigate
        ? onNavigate('contact')
        : document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })
    }
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-800 text-sm sm:text-base font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98]"
  >
    <span>Get in touch</span>
  </button>

  {/* Download Resume */}
  <a
    href="/resume.pdf"
    download="Sonu-Kumar-Resume.pdf"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-800 text-sm sm:text-base font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98]"
  >
    <Download className="w-4 h-4" />
    <span>Download Resume</span>
  </a>
</motion.div>

          </div>

        </div>

        {/* Credentials Strip: Education, Full Stack Developer, Building & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-10 border-t border-gray-300/70 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {credentials.map((cred, idx) => {
            const Icon = credIcons[cred.icon] || Code;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/80 shadow-xs hover:border-purple-300 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  {cred.title}
                </h3>
                <div className="text-xs font-semibold text-purple-600 mb-2">
                  {cred.subtitle}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {cred.desc}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>

    </section>
  );
}
