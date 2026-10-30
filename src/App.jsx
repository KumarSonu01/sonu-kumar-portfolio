import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HomeSection from "./pages/HomeSection";

const AboutSection = lazy(() => import("./pages/AboutSection"));
const StackSection = lazy(() => import("./pages/StackSection"));
const WorkSection = lazy(() => import("./pages/WorkSection"));
const ExperienceSection = lazy(() => import("./pages/ExperienceSection"));
const ContactSection = lazy(() => import("./pages/ContactSection"));
const Footer = lazy(() => import("./components/Footer"));
const Chatbot = lazy(() => import("./components/Chatbot"));

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
      const scrollTimer = setInterval(() => {
        const element = document.getElementById(currentPath);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          clearInterval(scrollTimer);
        }
      }, 50);
      setTimeout(() => clearInterval(scrollTimer), 2000);
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

    const observeInterval = setInterval(() => {
      let allObserved = true;
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        } else {
          allObserved = false;
        }
      });
      if (allObserved) {
        clearInterval(observeInterval);
      }
    }, 100);

    return () => {
      clearInterval(observeInterval);
      observer.disconnect();
    };
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
          src="/portfolio-blobs.webp"
          alt=""
          width="950"
          height="534"
          fetchPriority="high"
          decoding="async"
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

        <Suspense fallback={null}>
          <AboutSection
            onNavigate={handleNavigate}
          />

          <StackSection />

          <WorkSection />

          <ExperienceSection />

          <ContactSection />
        </Suspense>
      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Suspense fallback={null}>
        <div className="relative z-10">
          <Footer
            onNavigate={handleNavigate}
          />
        </div>


        {/* =====================================================
            AIZEN
        ===================================================== */}

        <Chatbot />
      </Suspense>
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