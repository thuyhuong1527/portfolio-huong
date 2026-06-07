import React from "react";
import { STUDENT_INFO, LEARNING_GOALS } from "../data";
import { IconRenderer } from "./IconRenderer";

export const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="py-28 relative bg-white border-t border-b border-vintage-pink-light/30"
    >
      {/* Decorative organic icons */}
      <div className="absolute top-[12%] left-[4%] text-vintage-rose-dark/10 select-none pointer-events-none text-4xl">
        ✿
      </div>
      <div className="absolute bottom-[10%] right-[4%] text-vintage-rose-dark/10 select-none pointer-events-none text-4xl">
        ❀
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-serif italic text-vintage-gold text-lg mb-2">
            Đôi chút làm quen
          </p>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-vintage-brown-dark tracking-tight">
            Về Bản Thân Mình
          </h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="w-12 h-[1px] bg-vintage-gold/35"></span>
            <span className="text-[10px] uppercase tracking-widest font-display font-bold text-vintage-brown/60">
              Hành Trình &amp; Lý Tưởng
            </span>
            <span className="w-12 h-[1px] bg-vintage-gold/35"></span>
          </div>
        </div>

        {/* Contemporary Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Portrait & Creative Quote Collage */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative max-w-sm w-full">
              
              {/* Soft decorative backing circle */}
              <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full bg-vintage-gold-light/60 mix-blend-multiply blur-xl pointer-events-none"></div>
              
              {/* Contemporary Photo Card */}
              <div className="bg-[#FAF6F2] p-3 rounded-3xl shadow-lg border border-vintage-pink-light">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-stone-100">
                  <img
                    src={STUDENT_INFO.avatarSofa}
                    alt="Ngô Thị Hường - Biotech Lab & Study Room"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover sepia-[6%] contrast-[105%]"
                  />
                </div>
                
                <div className="py-4 text-center">
                  <span className="font-serif italic text-sm text-vintage-brown-dark font-semibold">
                    “Tìm kiếm sự cân bằng giữa hoa lá và thuật toán” 🌿
                  </span>
                </div>
              </div>

              {/* Float aesthetic badge */}
              <div className="absolute -top-4 -right-4 p-3 bg-white rounded-2xl shadow-lg border border-vintage-pink-light/35 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EAF0EB] flex items-center justify-center text-teal-700">
                  <IconRenderer name="Award" size={15} />
                </div>
                <div>
                  <p className="text-[9px] font-sans tracking-tight text-vintage-brown/60 font-medium">Lớp Sinh Hoạt</p>
                  <p className="text-xs font-semibold text-vintage-brown-dark leading-none">{STUDENT_INFO.class}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Beautifully-spaced Academic Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* 1. Introduction Card */}
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-vintage-rose-dark/5 rounded-full border border-vintage-rose-dark/10">
                <span className="font-display text-[10px] tracking-widest text-[#8A4F58] font-bold uppercase">
                  Lý Lịch Trích Ngang
                </span>
              </div>
              
              <h3 className="font-serif font-bold text-2xl text-vintage-brown-dark">
                Sinh viên và Nghiên cứu sinh tương lai
              </h3>
              
              <p className="font-sans text-sm text-vintage-brown leading-relaxed text-justify">
                {STUDENT_INFO.biography}
              </p>
            </div>

            {/* 2. Education Card */}
            <div className="p-6 bg-vintage-gold-light/40 rounded-2xl border border-vintage-gold/15 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-vintage-gold shadow-sm border border-vintage-pink-light/35">
                  <IconRenderer name="GraduationCap" size={18} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-vintage-brown-dark">
                    Hành Trình Học Vấn
                  </h4>
                  <p className="text-[10px] font-sans tracking-wide text-vintage-brown/60 uppercase font-semibold">Education Credentials</p>
                </div>
              </div>
              
              <div className="pl-2 border-l-2 border-vintage-gold/30 ml-4.5 space-y-1">
                <p className="font-sans font-semibold text-sm text-vintage-brown-dark">
                  {STUDENT_INFO.institution}
                </p>
                <p className="font-sans text-xs text-vintage-brown/90">
                  Chuyên ngành: <strong className="font-medium text-vintage-brown-dark">{STUDENT_INFO.major}</strong> (Niên khóa K70)
                </p>
                <p className="font-display font-[800] text-[9px] text-[#A35C6D] uppercase tracking-widest mt-1">
                  Đại học Quốc gia Hà Nội
                </p>
              </div>
            </div>

            {/* 3. Interests Card */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm text-vintage-brown-dark flex items-center gap-2">
                <span className="text-vintage-rose-dark font-sans">✦</span>
                Sở thích &amp; Cảm hứng Sáng tạo
              </h4>
              <p className="font-sans text-xs text-vintage-brown/70 leading-relaxed mb-2">
                Mỗi niềm vui thường ngày đều nạp thêm năng lượng tích cực cho công việc nghiên cứu học thuật của mình.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {STUDENT_INFO.hobbies.map((hobby, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-sans font-medium bg-[#FAF6F2] hover:bg-vintage-pink-light/30 border border-vintage-pink-light text-vintage-brown px-3 py-1.5 rounded-full transition-colors cursor-default flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A35C6D]"></span>
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section 2b: Goals & Directions (Bullet-Journal reimagined as beautiful minimal bento cards) */}
        <div className="mt-16 pt-16 border-t border-vintage-pink-light/30">
          <div className="text-center mb-10">
            <span className="font-serif italic text-base text-vintage-gold block">La bàn định vị</span>
            <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-vintage-brown-dark mt-1">
              Định Hướng Học Tập &amp; Hoài Bão
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Học tập */}
            <div className="bg-[#FAFDFB] p-6 rounded-2xl border border-teal-600/10 hover:border-teal-600/20 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#EAF0EB] flex items-center justify-center text-teal-700 mb-4">
                  <IconRenderer name="Sparkle" size={16} />
                </div>
                <h4 className="font-serif font-bold text-sm tracking-wide text-vintage-brown-dark mb-3">
                  Hoài Bão Học Tập
                </h4>
                <ul className="space-y-3">
                  {LEARNING_GOALS.learning.map((gold, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-vintage-brown leading-relaxed text-justify">
                      <span className="text-teal-600 font-sans mt-0.5">✦</span>
                      <span>{gold}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2: Sự nghiệp */}
            <div className="bg-[#FDF9FB] p-6 rounded-2xl border border-[#A15566]/10 hover:border-[#A15566]/20 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#FAEFF2] flex items-center justify-center text-[#A15566] mb-4">
                  <IconRenderer name="Compass" size={16} />
                </div>
                <h4 className="font-serif font-bold text-sm tracking-wide text-vintage-brown-dark mb-3">
                  Định Hướng Tương Lai
                </h4>
                <ul className="space-y-3">
                  {LEARNING_GOALS.careers.map((career, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-vintage-brown leading-relaxed text-justify">
                      <span className="text-[#A15566] font-sans mt-0.5">✦</span>
                      <span>{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: Portfolio & Trình bày */}
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-vintage-gold/15 hover:border-vintage-gold/25 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#FBF6EE] flex items-center justify-center text-vintage-gold mb-4">
                  <IconRenderer name="BookOpen" size={16} />
                </div>
                <h4 className="font-serif font-bold text-sm tracking-wide text-vintage-brown-dark mb-3">
                  Mục Tiêu Portfolio
                </h4>
                <ul className="space-y-3">
                  {LEARNING_GOALS.portfolio.map((port, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-vintage-brown leading-relaxed text-justify">
                      <span className="text-vintage-gold font-sans mt-0.5">✦</span>
                      <span>{port}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
