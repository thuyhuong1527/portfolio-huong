import React, { useState, useEffect } from "react";
import { IconRenderer } from "./IconRenderer";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Trang Chủ" },
    { id: "about", label: "Giới Thiệu" },
    { id: "projects", label: "Dự Án" },
    { id: "skills", label: "Kỹ Năng" },
    { id: "reflections", label: "Tổng Kết" },
    { id: "contact", label: "Liên Hệ" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section on scroll
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="navbar-vintage"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm border-vintage-pink-light"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 text-left cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-vintage-gold to-vintage-rose-dark shadow-md flex items-center justify-center text-white font-bold text-base transition-transform duration-500 group-hover:scale-105">
            H
          </div>
          <div>
            <h1 className="font-serif font-black text-xs tracking-wider text-vintage-brown-dark leading-none">
              NGÔ THỊ HƯỜNG
            </h1>
            <p className="font-sans text-[10px] text-vintage-brown/60 tracking-wider mt-1 font-bold uppercase leading-none">
              Biotech &amp; AI Portfolio
            </p>
          </div>
        </button>

        {/* Desktop Menu - Rounded Pill floating panel */}
        <div className="hidden md:flex items-center gap-1 bg-white/70 py-1.5 px-2 rounded-full border border-vintage-pink-light/60 backdrop-blur-md shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-vintage-brown-dark text-white shadow"
                    : "text-vintage-brown hover:text-vintage-rose-dark hover:bg-vintage-pink-light/35"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Technical Sub-info */}
        <div className="hidden md:flex items-center gap-2 text-vintage-gold">
          <IconRenderer name="Sparkle" className="animate-twinkle" size={13} />
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#AF6A75]">
            VNU-UET
          </span>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-vintage-pink-light text-vintage-brown-dark hover:bg-neutral-50 transition-colors"
          aria-label="Toggle menu"
        >
          <IconRenderer name={isOpen ? "X" : "Menu"} size={20} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-[100%] left-0 right-0 bg-white border-b border-vintage-pink-light shadow-xl transition-all duration-400 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-6 flex flex-col gap-2.5 bg-[#FAFBFB]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left py-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-vintage-rose-dark/5 text-vintage-rose-dark border-l-4 border-vintage-rose-dark font-bold pl-3"
                    : "text-vintage-brown hover:bg-neutral-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-vintage-gold font-sans text-[10px]">✦</span>
                  {item.label}
                </div>
              </button>
            );
          })}
          <div className="mt-4 border-t border-vintage-pink-light/50 pt-4 flex items-center justify-between text-[10px] text-vintage-brown/50">
            <span>Sinh học &amp; AI Sáng tạo</span>
            <span className="font-mono font-bold text-vintage-rose-dark">25024201</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
