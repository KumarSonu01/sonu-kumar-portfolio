import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeSection from "./pages/HomeSection";
import AboutSection from "./pages/AboutSection";
import StackSection from "./pages/StackSection";
import WorkSection from "./pages/WorkSection";
import ExperienceSection from "./pages/ExperienceSection";
import ContactSection from "./pages/ContactSection";

import Chatbot from "./components/Chatbot";

function PortfolioMain({
  activeSection,
  setActiveSection,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  // =========================================================
  // SCROLLSPY + DIRECT ROUTE SCROLL
  // =========================================================

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "stack",
      "work",
      "experience",
      "contact",
    ];

    const currentPath = location.pathname.replace("/", "");

    if (
      currentPath &&
      sections.includes(currentPath)
    ) {
      setTimeout(() => {
        const element =
          document.getElementById(currentPath);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    }

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersect,
      observerOptions
    );

    sections.forEach((id) => {
      const element =
        document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname, setActiveSection]);

  // =========================================================
  // NAVIGATION
  // =========================================================

  const handleNavigate = (id) => {
    setActiveSection(id);

    const target =
      document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(
        null,
        "",
        id === "home"
          ? "/"
          : `/${id}`
      );
    } else {
      navigate(
        id === "home"
          ? "/"
          : `/${id}`
      );
    }
  };

  return (
    <div
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-between
        selection:bg-purple-500
        selection:text-white
      "
    >

      {/* =====================================================
          GLOBAL BLOB BACKGROUND
      ===================================================== */}

      <div
        className="
          fixed
          inset-0
          z-0
          pointer-events-none
          overflow-hidden
          select-none
        "
        aria-hidden="true"
      >
        <img
          src="/portfolio-blobs.png"
          alt=""
          className="
            absolute
            right-[-90px]
            top-[90px]
            w-[950px]
            max-w-none
            object-contain
            opacity-[0.50]
          "
        />
      </div>


      {/* =====================================================
          SOFT RIGHT-SIDE REVEAL
      ===================================================== */}

      <div
        className="
          fixed
          inset-0
          z-[1]
          pointer-events-none
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white
            via-white/95
            to-white/45
          "
        />
      </div>


      {/* =====================================================
          STICKY NAVBAR
          
          IMPORTANT:
          The wrapper is sticky, not the Navbar itself.
      ===================================================== */}

      <div
        className="
          sticky
          top-0
          z-[100]
          w-full
        "
      >
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      </div>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main
        className="
          relative
          z-10
          flex-grow
          space-y-6
          sm:space-y-10
        "
      >
        <HomeSection
          onNavigate={handleNavigate}
        />

        <AboutSection
          onNavigate={handleNavigate}
        />

        <StackSection />

        <WorkSection
          onNavigate={handleNavigate}
        />

        <ExperienceSection />

        <ContactSection />
      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="relative z-10">
        <Footer
          onNavigate={handleNavigate}
        />
      </div>


      {/* =====================================================
          AIZEN
      ===================================================== */}

      <Chatbot />
    </div>
  );
}


// =========================================================
// APP ROUTES
// =========================================================

export default function App() {
  const [activeSection, setActiveSection] =
    useState("home");

  return (
    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={
          <PortfolioMain
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        }
      />


      {/* HOME ROUTE */}

      <Route
        path="/home"
        element={
          <PortfolioMain
            activeSection="home"
            setActiveSection={setActiveSection}
          />
        }
      />


      {/* ABOUT */}

      <Route
        path="/about"
        element={
          <PortfolioMain
            activeSection="about"
            setActiveSection={setActiveSection}
          />
        }
      />


      {/* STACK */}

      <Route
        path="/stack"
        element={
          <PortfolioMain
            activeSection="stack"
            setActiveSection={setActiveSection}
          />
        }
      />


      {/* WORK */}

      <Route
        path="/work"
        element={
          <PortfolioMain
            activeSection="work"
            setActiveSection={setActiveSection}
          />
        }
      />


      {/* EXPERIENCE */}

      <Route
        path="/experience"
        element={
          <PortfolioMain
            activeSection="experience"
            setActiveSection={setActiveSection}
          />
        }
      />


      {/* CONTACT */}

      <Route
        path="/contact"
        element={
          <PortfolioMain
            activeSection="contact"
            setActiveSection={setActiveSection}
          />
        }
      />

    </Routes>
  );
}