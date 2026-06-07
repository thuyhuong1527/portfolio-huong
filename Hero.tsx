import React, { useState, useEffect } from "react";
import { IconRenderer } from "./IconRenderer";
import { STUDENT_INFO } from "../data";

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const phrases = [
    "Khám phá điểm giao thoa giữa Di truyền học & Trí tuệ nhân tạo.",
    "Lưu trữ học trình môn Công nghệ số & Ứng dụng AI.",
    "Sinh viên Lớp K70G-BE • Mã số: 25024201.",
    "Vẽ tương lai xanh bằng công nghệ sinh học số thông minh."
  ];

  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIdx];
    const typingSpeed = isDeleting ? 20 : 55;
    const delayBetweenWord = 2500;

    if (!isDeleting && charIdx === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWord);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentPhrase.substring(0, charIdx - 1)
            : currentPhrase.substring(0, charIdx + 1)
        );
        setCharIdx((prev) => (prev + (isDeleting ? -1 : 1)));
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  const handleExplore = (anchor: string) => {
    const targetElement = document.getElementById(anchor);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-vintage-pink-bg via-white to-vintage-pink-bg"
    >
      {/* Subtle modern abstract elements for cozy academy feels */}
      <div className="absolute top-[20%] left-[5%] text-vintage-gold/30 animate-twinkle">
        <IconRenderer name="Sparkle" size={20} />
      </div>
      <div className="absolute bottom-[25%] left-[10%] text-vintage-rose-dark/20 animate-twinkle" style={{ animationDelay: "2s" }}>
        <IconRenderer name="Sparkles" size={16} />
      </div>
      <div className="absolute top-[35%] right-[8%] text-vintage-gold/35 animate-twinkle" style={{ animationDelay: "1.5s" }}>
        <IconRenderer name="Sparkles" size={24} />
      </div>

      {/* Elegant soft pastel decorative blurred background blobs */}
      <div className="absolute top-10 left-10 w-[450px] h-[450px] rounded-full bg-vintage-gold-light/40 mix-blend-multiply filter blur-[80px] opacity-60 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-vintage-pink-light/40 mix-blend-multiply filter blur-[80px] opacity-50 animate-pulse pointer-events-none" style={{ animationDelay: "3s" }}></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Scholarly Introduction text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-vintage-rose-dark/5 rounded-full border border-vintage-rose-dark/10">
            <span className="w-1.5 h-1.5 rounded-full bg-vintage-rose-dark animate-pulse"></span>
            <span className="font-display text-[10px] sm:text-xs tracking-widest text-[#8A4F58] font-bold uppercase">
              Portfolio Học Tập Cá Nhân
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="font-serif italic text-lg sm:text-xl text-vintage-gold font-medium">
              Xin chào, mình là học giả trẻ
            </p>
            <h1 className="font-serif font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.1] text-vintage-brown-dark tracking-tight">
              {STUDENT_INFO.fullName}
            </h1>
            <p className="font-serif italic text-base sm:text-lg text-vintage-brown/80">
              Chuyên ngành Công nghệ Sinh học tại VNU-UET
            </p>
          </div>

          {/* Dynamic Interactive Typing Subtitle */}
          <div className="w-full max-w-xl">
            <div className="min-h-[50px] flex items-center py-3 px-4 bg-[#FAF6F2]/70 backdrop-blur-sm rounded-2xl border border-vintage-gold/15 shadow-sm transition-all duration-300">
              <p className="font-sans text-xs sm:text-sm text-vintage-brown leading-relaxed flex items-center">
                <span className="text-vintage-rose-dark mr-2.5 font-display text-xs">✦</span>
                <span className="font-medium tracking-wide">{typedText}</span>
                <span className="typewriter-cursor h-4 ml-1 inline-block"></span>
              </p>
            </div>
          </div>

          {/* Brief, professional, beautiful introduction */}
          <p className="font-sans text-sm text-vintage-brown/90 leading-relaxed max-w-xl text-justify">
            Mình đam mê khám phá thế giới kỳ diệu của sinh học và kết hợp nó cùng trí tuệ số. Cuốn học bạ này lưu giữ đầy đủ các sản phẩm học trình tâm huyết nhất của mình trong môn học <strong className="text-vintage-brown-dark font-semibold">Nhập môn Công nghệ số và Ứng dụng AI</strong>, nơi công nghệ sinh học được tiếp thêm đôi cánh đổi mới.
          </p>

          {/* Elegant Circular buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 w-full">
            <button
              onClick={() => handleExplore("about")}
              className="px-6 py-3.5 bg-vintage-brown hover:bg-vintage-brown-dark text-white hover:text-white font-semibold text-xs tracking-widest uppercase rounded-full shadow-md hover:shadow-xl transition-all duration-400 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 border border-transparent"
            >
              Xem giới thiệu
              <span className="text-[10px]">✿</span>
            </button>
            <button
              onClick={() => handleExplore("projects")}
              className="px-6 py-3.5 bg-white text-vintage-brown-dark hover:text-vintage-rose-dark font-semibold text-xs tracking-widest uppercase rounded-full shadow-sm hover:shadow-md transition-all duration-400 border border-vintage-pink-light hover:border-vintage-rose-dark cursor-pointer flex items-center gap-2"
            >
              Dự án khoa học
              <IconRenderer name="ChevronRight" size={14} className="text-vintage-gold" />
            </button>
          </div>
        </div>

        {/* Right Column: Large and Gorgeous Profile Photo with rounded curves & pastel depth */}
        <div className="lg:col-span-5 flex justify-center items-center w-full mt-8 lg:mt-0">
          <div className="relative group">
            
            {/* Elegant large decorative background rounded panel */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-vintage-gold-light via-vintage-pink-light to-vintage-gold-light/30 opacity-60 blur-lg group-hover:opacity-80 transition-opacity duration-700 -z-10"></div>
            
            {/* Soft decorative frame */}
            <div className="absolute top-4 -left-4 w-full h-full rounded-[2rem] border-2 border-dashed border-vintage-gold/30 pointer-events-none -z-10"></div>

            {/* Contemporary Large Profile frame */}
            <div className="w-[280px] sm:w-[320px] md:w-[340px] aspect-[4/5] bg-white p-3.5 rounded-[2rem] shadow-xl border border-vintage-pink-light transform rotate-1 group-hover:rotate-0 transition-all duration-700 ease-out z-10">
              <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative group">
                <img
                  src={STUDENT_INFO.avatarCafe}
                  alt="Ngô Thị Hường - Biotech & AI Scholar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Decorative gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-brown-dark/40 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                {/* Class badge in corner */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-vintage-gold/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="font-display font-black text-[9px] text-[#2C4A3E] tracking-wider uppercase">
                    K70G-BE • UET
                  </span>
                </div>

                {/* Aesthetic label at the bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-vintage-pink-light/30">
                  <p className="font-serif font-bold text-xs text-vintage-brown-dark leading-none">
                    Ngô Thị Hường
                  </p>
                  <p className="text-[9px] font-sans tracking-widest text-vintage-gold uppercase font-bold mt-1">
                    Công nghệ Sinh học 🌱
                  </p>
                </div>
              </div>
            </div>

            {/* Float circular decor */}
            <div className="absolute -bottom-5 -right-3 w-12 h-12 rounded-full bg-[#FAF5F0] border border-vintage-gold/20 flex items-center justify-center shadow-lg text-vintage-rose-dark animate-bounce" style={{ animationDuration: "3s" }}>
              <IconRenderer name="Sparkles" size={16} />
            </div>

          </div>
        </div>

      </div>

      {/* Decorative botanical scroll banner */}
      <div className="absolute bottom-0 left-0 right-0 h-6 flex items-center justify-center gap-3 opacity-40">
        <span className="w-24 h-[1px] bg-gradient-to-r from-transparent to-vintage-brown/20"></span>
        <span className="text-vintage-rose-dark text-[10px] tracking-widest uppercase">✦ 🌱 ✦</span>
        <span className="w-24 h-[1px] bg-gradient-to-l from-transparent to-vintage-brown/20"></span>
      </div>
    </section>
  );
};
