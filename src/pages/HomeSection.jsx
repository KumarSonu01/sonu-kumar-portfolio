import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData';
import { techBrandIcons } from '../data/techBrandIcons';

export default function HomeSection({ onNavigate }) {
  return (
    <section
      id="home"
      className="pt-4 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >

      {/* =========================================================
          HERO CARD
      ========================================================= */}
      <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#F3F4F6] border border-gray-200/80 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-14">

        {/* Subtle background ambient gradients */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />


        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-gray-200/70 text-xs font-semibold text-gray-700 shadow-xs mb-6 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

              <div>
                Full Stack Developer & Engineer
              </div>
            </motion.div>


            {/* Large Serif Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-gray-950 mb-5"
            >
              <span className="block text-[#111113]">
                Design Better
              </span>

              <span className="block text-[#9CA3AF] italic font-normal">
                Faster Smarter
              </span>
            </motion.h1>


            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-8"
            >
              I build scalable, modern web products combining high-performance
              backends with beautifully reactive user interfaces.
            </motion.p>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >

              {/* View Projects */}
              <button
                onClick={() =>
                  onNavigate
                    ? onNavigate('work')
                    : document
                        .getElementById('work')
                        ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#111113] text-white text-sm sm:text-base font-medium transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-black/15 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View projects</span>

                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>


              {/* Get In Touch */}
              <button
                onClick={() =>
                  onNavigate
                    ? onNavigate('contact')
                    : document
                        .getElementById('contact')
                        ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-gray-300 text-gray-800 text-sm sm:text-base font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get in touch</span>
              </button>

            </motion.div>


            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-gray-300/60 grid grid-cols-3 gap-4 max-w-lg"
            >
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">

                  <span className="font-display font-bold text-2xl sm:text-3xl text-gray-950 tracking-tight">
                    {stat.value}
                  </span>

                  <span className="text-xs sm:text-sm text-gray-500 font-medium">
                    {stat.label}
                  </span>

                </div>
              ))}
            </motion.div>

          </div>


          {/* =====================================================
              RIGHT COLUMN — PORTRAIT
          ===================================================== */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">

            {/* Robot Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-10 -left-6 sm:-left-10 z-20 pointer-events-none"
            >

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                }}
                className="w-24 sm:w-28 lg:w-32 drop-shadow-xl filter"
              >

                <img
                  src="/assets/robot-hero.png"
                  alt="Floating Sonu Kumar Robot Mascot"
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

              </motion.div>

            </motion.div>


            {/* Photo Box */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gray-200 border-4 border-white shadow-xl shadow-gray-300/40">

              {/* Photo Reveal */}
              <motion.div
                initial={{
                  x: 80,
                  opacity: 0,
                  clipPath: 'inset(0% 0% 0% 100%)',
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  clipPath: 'inset(0% 0% 0% 0%)',
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full h-full relative"
              >

                <img
                  src="/assets/sonu-portrait.jpg"
                  alt="Sonu Kumar — Developer Portrait"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

              </motion.div>


              {/* Floating Collaboration Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-4 right-4 left-4 sm:left-auto sm:max-w-[270px] z-10"
              >

                <div
                  onClick={() =>
                    onNavigate
                      ? onNavigate('contact')
                      : document
                          .getElementById('contact')
                          ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="cursor-pointer group bg-white-500/15 backdrop-blur-xl border border-purple-300/20 rounded-2xl p-3.5 text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-purple-500/25 hover:border-purple-400/40"
                >

                  <div className="flex items-center justify-between gap-2 mb-1.5">

                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      Select project
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-medium border border-emerald-500/30">

                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />

                      Available

                    </span>

                  </div>


                  <p className="text-xs text-gray-300 font-medium mb-2 leading-relaxed">
                    Share a few details about your project and I’ll get back
                    to you with a proposal and a great direction.
                  </p>


                  <div className="flex items-center justify-between text-[11px] text-purple-300 font-medium">

                    <span>
                      Let's collaborate
                    </span>

                    <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-purple-600 transition-colors flex items-center justify-center">

                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />

                    </span>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          TECHNOLOGIES & TOOLS
      ========================================================= */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-10 sm:mt-12 pt-4"
>
  {/* Section Heading */}
  <div className="text-center mb-6">
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
      Technologies & Tools I Work With
    </span>
  </div>

  {/* Horizontal Marquee */}
  <div className="relative overflow-hidden">

    {/* Left fade */}
    <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

    {/* Right fade */}
    <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

    {/* Moving track */}
    <div className="tech-marquee">

      {/* First copy */}
      <div className="tech-marquee-content">

        {techBrandIcons.map((item) => (
          <div
            key={`tech-1-${item.name}`}
            className="group flex-shrink-0 flex items-center gap-2.5 text-gray-400 hover:text-gray-900 transition-all duration-300"
          >

            {/* Icon */}
            <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-purple-50 flex items-center justify-center transition-all duration-300">

              <div className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300">
                {item.icon}
              </div>

            </div>

            {/* Name */}
            <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
              {item.name}
            </span>

          </div>
        ))}

      </div>


      {/* Second copy — required for seamless loop */}
      <div className="tech-marquee-content" aria-hidden="true">

        {techBrandIcons.map((item) => (
          <div
            key={`tech-2-${item.name}`}
            className="group flex-shrink-0 flex items-center gap-2.5 text-gray-400 hover:text-gray-900 transition-all duration-300"
          >

            {/* Icon */}
            <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-purple-50 flex items-center justify-center transition-all duration-300">

              <div className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all duration-300">
                {item.icon}
              </div>

            </div>

            {/* Name */}
            <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
              {item.name}
            </span>

          </div>
        ))}

      </div>

    </div>

  </div>
</motion.div>

    </section>
  );
}