import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';

export default function WorkSection({ onNavigate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // 3 items per page for 3-column grid pagination demo (pages 1, 2, 3)
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projectsData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section id="work" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Outer rounded card (~24px radius, rounded-3xl / rounded-[28px]) */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#F3F4F6] border border-gray-200/80 shadow-sm p-6 sm:p-10 lg:p-14">
        
        {/* Top Header Row: Title on Left, View all projects button on Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-gray-200/80">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>MY WORK</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl font-bold text-gray-950 tracking-tight"
            >
              Projects That Deliver Impact.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg mt-2 max-w-xl"
            >
              Featured production web applications and tools engineered for performance, scale, and delightful user experience.
            </motion.p>
          </div>

          {/* Top-Right Outlined Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => {
                // Toggle between full view or page 1
                setCurrentPage(currentPage === 1 ? 2 : 1);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 bg-white text-gray-800 text-sm font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all shadow-xs"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* 3-Column Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-3xl bg-white border border-gray-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Colored screenshot/mockup image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                    {/* Category tag pill + External-link icon button */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-gray-900 shadow-sm uppercase tracking-wider">
                        {project.category}
                      </span>
                      
                      <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-800 shadow-sm transition-transform group-hover:scale-110 group-hover:bg-[#111113] group-hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-gray-950 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Small tech-stack tag pills at bottom */}
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-[11px] font-semibold tracking-tight hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] font-semibold">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination controls below (prev arrow, page numbers 1/2/3, next arrow) */}
        <div className="mt-12 pt-6 border-t border-gray-200/80 flex items-center justify-center gap-2">
          
          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              currentPage === 1 
                ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100 shadow-xs'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Page numbers 1, 2, 3 */}
          {[1, 2, 3].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                currentPage === pageNumber
                  ? 'bg-[#111113] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            disabled={currentPage === 3}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
              currentPage === 3 
                ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100 shadow-xs'
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
