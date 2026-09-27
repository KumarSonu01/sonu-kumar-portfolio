import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './BrandIcons';
import Logo from './Logo';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Full-Stack Web Development",
    "API & Microservice Architecture",
    "Frontend Engineering (React/Next)",
    "Database Modeling & Caching",
    "Cloud Deployments & DevOps"
  ];

  const explore = [
    { name: "Home", id: "home", path: "/" },
    { name: "About Sonu", id: "about", path: "/about" },
    { name: "Tech Stack", id: "stack", path: "/stack" },
    { name: "Projects & Work", id: "work", path: "/work" },
    { name: "Career Experience", id: "experience", path: "/experience" },
    { name: "Get In Touch", id: "contact", path: "/contact" }
  ];

  const resources = [
    "GitHub Repositories",
    "System Design Notes",
    "Full Stack Starter Kits",
    "Developer Blog & Articles",
    "Open Source Contributions"
  ];

  return (
    <footer className="mt-16 bg-[#111113] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Logo + Tagline and 3 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-gray-800">
          
          {/* Logo & Tagline (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg font-serif">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  Sonu Kumar
                </span>
                <span className="text-[10px] uppercase font-semibold text-purple-400 tracking-wider">
                  Full Stack Engineer
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm pt-2">
              Turning Ideas Into Real Impact. Dedicated to engineering fast, reliable, and visually captivating modern web applications.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-200"
                aria-label="X / Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Services (2-3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              {services.map((item, idx) => (
                <li key={idx} className="hover:text-purple-300 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Explore (2-3 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              {explore.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate ? onNavigate(item.id) : null}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              {resources.map((item, idx) => (
                <li key={idx} className="hover:text-pink-300 transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center justify-between">
              <span>Ready for high-impact work?</span>
              <button
                onClick={() => onNavigate ? onNavigate('contact') : null}
                className="px-2.5 py-1 rounded-full bg-white text-gray-900 font-semibold hover:bg-purple-100 transition-colors"
              >
                Hire me
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright line & Scroll to Top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Sonu Kumar. All rights reserved. Crafted with precision & Framer Motion.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
