import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ activeSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', id: 'home', accent: '#8B5CF6' },
    { name: 'About', path: '/about', id: 'about', accent: '#8B5CF6' },
    { name: 'Stack', path: '/stack', id: 'stack', accent: '#06B6D4' },
    { name: 'Work', path: '/work', id: 'work', accent: '#3B82F6' },
    { name: 'Experience', path: '/experience', id: 'experience', accent: '#A855F7' },
    { name: 'Contact', path: '/contact', id: 'contact', accent: '#EC4899' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (item) => {
    setIsOpen(false);

    if (onNavigate) {
      onNavigate(item.id);
    } else {
      navigate(item.path);
    }
  };

  const currentActiveId =
    activeSection ||
    (
      location.pathname === '/'
        ? 'home'
        : location.pathname.replace('/', '')
    );

  return (
    <header className="w-full transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">

      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-gray-200/80 py-2.5 px-4 sm:px-6'
            : 'bg-white/70 backdrop-blur-md shadow-sm border-gray-100 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">

          {/* Left: Logo */}

          <div className="flex-shrink-0">
            <Logo
              onClick={() =>
                handleLinkClick(navItems[0])
              }
            />
          </div>


          {/* Center: Nav links */}

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive =
                currentActiveId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() =>
                    handleLinkClick(item)
                  }
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-gray-950 font-semibold'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <span className="relative z-10">
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gray-100/90 -z-0"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    >
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                        style={{
                          backgroundColor: item.accent,
                        }}
                      />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </nav>


          {/* Right: Black pill CTA */}

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() =>
                handleLinkClick({
                  id: 'contact',
                  path: '/contact',
                })
              }
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111113] text-white text-sm font-medium transition-all duration-300 hover:bg-black hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a project</span>

              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </span>
            </button>
          </div>


          {/* Mobile menu button */}

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>


      {/* Mobile Menu Dropdown */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="md:hidden mt-2 mx-auto max-w-sm rounded-3xl bg-white/95 backdrop-blur-2xl border border-gray-200/80 shadow-2xl p-4"
          >
            <div className="flex flex-col gap-1">

              {navItems.map((item) => {
                const isActive =
                  currentActiveId === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      handleLinkClick(item)
                    }
                    className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-2xl transition-all ${
                      isActive
                        ? 'bg-purple-50 text-purple-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.name}</span>

                    {isActive && (
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: item.accent,
                        }}
                      />
                    )}
                  </button>
                );
              })}

              <div className="pt-2 mt-2 border-t border-gray-100">
                <button
                  onClick={() =>
                    handleLinkClick({
                      id: 'contact',
                      path: '/contact',
                    })
                  }
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#111113] text-white text-sm font-medium hover:bg-black transition-all"
                >
                  <span>Let's build something</span>

                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}