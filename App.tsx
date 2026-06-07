import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Reflections } from "./components/Reflections";
import { Contact } from "./components/Contact";

export default function App() {
  useEffect(() => {
    // Setup the Intersection Observer for elegant fade-in-slide-up transitions on scroll
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.08, // trigger when 8% is visible
      rootMargin: "0px 0px -30px 0px" // early buffer zone
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll(".fade-in-section");
    
    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-vintage-pink-bg selection:bg-vintage-rose-dark selection:text-vintage-cream antialiased">
      {/* Sticky background glassmorphic header */}
      <Navbar />

      {/* Hero Header Area - Magazines style */}
      <Hero />

      {/* Scrollable Main body content */}
      <main>
        {/* About segment */}
        <div className="fade-in-section">
          <AboutMe />
        </div>

        {/* 6 Grid projects list */}
        <div className="fade-in-section">
          <Projects />
        </div>

        {/* Brand new custom Skills badge catalog */}
        <div className="fade-in-section">
          <Skills />
        </div>

        {/* Ribbon Timeline summaries */}
        <div className="fade-in-section">
          <Reflections />
        </div>

        {/* Comments/Postal service block */}
        <div className="fade-in-section">
          <Contact />
        </div>
      </main>
    </div>
  );
}

