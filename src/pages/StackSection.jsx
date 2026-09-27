import React from 'react';
import { motion } from 'framer-motion';
import { techBrandIcons } from '../data/techBrandIcons';

export default function StackSection() {
  return (
    <section
      id="stack"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Main rounded container */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#F3F4F6] border border-gray-200/80 shadow-sm p-6 sm:p-10 lg:p-12 overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* =========================================================
              LEFT COLUMN
          ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-gray-950 mb-3 leading-[1.12]"
            >
              <span className="block text-[#111113]">
                Building Ideas.
              </span>

              <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Creating Impact.
              </span>
            </motion.h2>

            {/* Accent bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ originX: 0 }}
              className="w-16 sm:w-20 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 mb-5"
            />

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
            >
              I'm a passionate full stack developer who loves turning ideas
              into real, functional, and beautiful digital experiences.
            </motion.p>

            {/* 3D Stack Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200/90 group max-w-lg"
            >
              <img
                src="/assets/robot-about-1.png"
                alt="Full Stack 3D Architecture Graphic"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop";
                }}
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300 block mb-0.5">
                    End-to-End Modern Architecture
                  </span>

                  <span className="font-display font-bold text-base sm:text-lg">
                    Express.js • React • Next.js • MongoDB
                  </span>

                </div>
              </div>
            </motion.div>

          </div>


          {/* =========================================================
              RIGHT COLUMN — TECH STACK
          ========================================================= */}
          <div className="lg:col-span-6">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[24px] sm:rounded-3xl bg-white shadow-xl shadow-gray-200/80 border border-gray-100 p-6 sm:p-8 flex flex-col"
            >

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100/90 text-purple-700 text-xs font-bold tracking-widest uppercase mb-3.5 w-fit">

                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />

                <span>
                  OUR TECH STACK
                </span>

              </div>


              {/* Heading */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-950 tracking-tight mb-2.5">
                Key Technologies & Platforms
              </h3>


              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                We work with leading platforms and technologies that empower
                digital transformation, accelerate delivery, and drive
                measurable business results.
              </p>


              {/* =====================================================
                  VERTICAL SKILL MARQUEE
              ===================================================== */}
              <div className="relative h-[380px] sm:h-[400px] overflow-hidden">

                {/* Top fade */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white via-white/80 to-transparent z-20 pointer-events-none" />

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />


                {/* Moving track */}
                <div className="skill-marquee">

                  {/* ================= FIRST SET ================= */}
                  <div className="grid grid-cols-4 gap-2.5 sm:gap-3 py-1">

                    {techBrandIcons.map((item, idx) => (
                      <motion.div
                        key={`skill-first-${item.name}`}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.015,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.03,
                        }}
                        className="group bg-white hover:bg-gray-50/80 border border-gray-200/90 hover:border-purple-300 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all duration-200"
                      >

                        {/* Icon */}
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-50/80 group-hover:bg-white flex items-center justify-center transition-colors shadow-2xs mb-1.5">
                          {item.icon}
                        </div>

                        {/* Name */}
                        <span className="text-[11px] sm:text-xs font-semibold text-gray-800 tracking-tight truncate w-full group-hover:text-purple-700 transition-colors">
                          {item.name}
                        </span>

                      </motion.div>
                    ))}

                  </div>


                  {/* ================= SECOND SET ================= */}
                  <div className="grid grid-cols-4 gap-2.5 sm:gap-3 py-1">

                    {techBrandIcons.map((item, idx) => (
                      <motion.div
                        key={`skill-second-${item.name}`}
                        whileHover={{
                          y: -3,
                          scale: 1.03,
                        }}
                        className="group bg-white hover:bg-gray-50/80 border border-gray-200/90 hover:border-purple-300 rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md transition-all duration-200"
                      >

                        {/* Icon */}
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-50/80 group-hover:bg-white flex items-center justify-center transition-colors shadow-2xs mb-1.5">
                          {item.icon}
                        </div>

                        {/* Name */}
                        <span className="text-[11px] sm:text-xs font-semibold text-gray-800 tracking-tight truncate w-full group-hover:text-purple-700 transition-colors">
                          {item.name}
                        </span>

                      </motion.div>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>


      
      

    </section>
  );
}