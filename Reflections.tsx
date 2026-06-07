import React from "react";
import { REFLECTIONS, SKILL_TAGS } from "../data";
import { IconRenderer } from "./IconRenderer";

export const Reflections: React.FC = () => {
  return (
    <section
      id="reflections"
      className="py-28 relative bg-[#FAF8F6]"
    >
      {/* Decorative organic floral markers */}
      <div className="absolute top-[15%] left-[4%] text-[#A35C6D]/10 select-none font-serif text-7xl pb-1">
        ❧
      </div>
      <div className="absolute bottom-[15%] right-[4%] text-[#A35C6D]/10 select-none font-serif text-7xl pb-1">
        ☙
      </div>

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-3">
          <p className="font-serif italic text-vintage-gold text-lg">
            Nhìn lại sau chặng học trình
          </p>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-vintage-brown-dark tracking-tight">
            Tổng Kết &amp; Chiêm Nghiệm
          </h2>
          <p className="font-sans text-xs sm:text-sm text-vintage-brown/70 max-w-lg mx-auto leading-relaxed">
            Hồi ký tự sự đúc kết từ bốn góc độ bản lề, mở ra lăng kính mới về tư duy số và thái độ liêm chính khoa học cùng AI.
          </p>
          <div className="w-16 h-[2px] bg-vintage-gold mx-auto mt-4"></div>
        </div>

        {/* Contemporary Vertical Journey Map */}
        <div className="relative border-l border-vintage-gold/20 ml-4 md:ml-28 pl-8 md:pl-12 space-y-12 py-2">
          
          {/* Milestone 1: Năng Lực Gặt Hái */}
          <div className="relative group/ms">
            {/* Timeline icon circle indicator */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-7 h-7 rounded-full border border-vintage-gold bg-white flex items-center justify-center text-vintage-gold shadow-md group-hover/ms:bg-vintage-brown-dark group-hover/ms:text-white group-hover/ms:border-transparent transition-all duration-300">
              <IconRenderer name={REFLECTIONS[0].iconName} size={13} />
            </div>

            {/* Desktop Left side marker pill */}
            <div className="hidden md:block absolute -left-[160px] top-2 w-[120px] text-right">
              <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-vintage-rose-dark bg-vintage-rose-dark/5 px-2.5 py-1 rounded-full border border-vintage-rose-dark/10">
                Cột mốc 01
              </span>
            </div>

            {/* Redesigned Card Box */}
            <div className="bg-white border border-vintage-pink-light rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                <span className="md:hidden inline-block font-sans font-bold text-[9px] uppercase tracking-widest text-[#A35C6D] bg-[#FAECEB] px-2.5 py-1 rounded-full mb-1">
                  Cột mốc 01
                </span>
                <h3 className="font-serif font-extrabold text-lg text-vintage-brown-dark tracking-wide">
                  {REFLECTIONS[0].title}
                </h3>
                <span className="text-xs font-serif italic text-vintage-gold font-bold">
                  {REFLECTIONS[0].badge}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-vintage-brown/85 leading-relaxed mb-6 text-justify">
                {REFLECTIONS[0].content}
              </p>

              {/* Verified Digital tags inside */}
              <div className="space-y-3">
                <p className="font-sans text-[10px] tracking-widest text-[#AF6A75] uppercase font-bold">
                  Năng Lực Trọng Tâm:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SKILL_TAGS.slice(0, 5).map((tag) => (
                    <span
                      key={tag.id}
                      className="text-[10px] font-sans font-semibold bg-[#FAF6F2] border border-vintage-pink-light text-vintage-brown px-3 py-1.5 rounded-full transition-colors duration-300 select-none hover:bg-vintage-brown hover:text-white"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 2: Điểm Tâm Đắc */}
          <div className="relative group/ms">
            {/* Circle */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-7 h-7 rounded-full border border-vintage-gold bg-white flex items-center justify-center text-vintage-gold shadow-md group-hover/ms:bg-vintage-brown-dark group-hover/ms:text-white group-hover/ms:border-transparent transition-all duration-300">
              <IconRenderer name={REFLECTIONS[1].iconName} size={13} />
            </div>

            {/* Desktop marker tag */}
            <div className="hidden md:block absolute -left-[160px] top-2 w-[120px] text-right">
              <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-[#2C4A3E] bg-[#EAF0EB]/80 px-2.5 py-1 rounded-full border border-teal-700/10">
                Cột mốc 02
              </span>
            </div>

            {/* Card box */}
            <div className="bg-white border-2 border-teal-700/10 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                <span className="md:hidden inline-block font-sans font-bold text-[9px] uppercase tracking-widest text-teal-700 bg-[#EAF0EB] px-2.5 py-1 rounded-full mb-1">
                  Cột mốc 02
                </span>
                <h3 className="font-serif font-extrabold text-lg text-teal-900 tracking-wide">
                  {REFLECTIONS[1].title}
                </h3>
                <span className="text-xs font-serif italic text-teal-700 font-bold">
                  {REFLECTIONS[1].badge}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-vintage-brown/85 leading-relaxed text-justify">
                {REFLECTIONS[1].content}
              </p>
            </div>
          </div>

          {/* Milestone 3: Thách thức & Thích ứng */}
          <div className="relative group/ms">
            {/* Circle */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-7 h-7 rounded-full border border-vintage-gold bg-white flex items-center justify-center text-vintage-gold shadow-md group-hover/ms:bg-vintage-brown-dark group-hover/ms:text-white group-hover/ms:border-transparent transition-all duration-300">
              <IconRenderer name={REFLECTIONS[2].iconName} size={13} />
            </div>

            {/* Desktop marker tag */}
            <div className="hidden md:block absolute -left-[160px] top-2 w-[120px] text-right">
              <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-vintage-gold bg-vintage-gold-light/80 px-2.5 py-1 rounded-full border border-vintage-gold/15">
                Cột mốc 03
              </span>
            </div>

            {/* Card box */}
            <div className="bg-white border border-vintage-pink-light rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                <span className="md:hidden inline-block font-sans font-bold text-[9px] uppercase tracking-widest text-vintage-gold bg-vintage-gold-light px-2.5 py-1 rounded-full mb-1">
                  Cột mốc 03
                </span>
                <h3 className="font-serif font-extrabold text-lg text-vintage-brown-dark tracking-wide">
                  {REFLECTIONS[2].title}
                </h3>
                <span className="text-xs font-serif italic text-vintage-gold font-bold">
                  {REFLECTIONS[2].badge}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-vintage-brown/85 leading-relaxed text-justify">
                {REFLECTIONS[2].content}
              </p>
            </div>
          </div>

          {/* Milestone 4: Tương Lai Sinh Học */}
          <div className="relative group/ms">
            {/* Circle */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-7 h-7 rounded-full border border-vintage-gold bg-white flex items-center justify-center text-vintage-gold shadow-md group-hover/ms:bg-vintage-brown-dark group-hover/ms:text-white group-hover/ms:border-transparent transition-all duration-300">
              <IconRenderer name={REFLECTIONS[3].iconName} size={13} />
            </div>

            {/* Desktop marker tag */}
            <div className="hidden md:block absolute -left-[160px] top-2 w-[120px] text-right">
              <span className="font-sans font-bold text-[9px] uppercase tracking-widest text-[#8A4F58] bg-[#FAECEB] px-2.5 py-1 rounded-full border border-[#8A4F58]/10">
                Tầm nhìn xa
              </span>
            </div>

            {/* Card box with distinct border line representation */}
            <div className="bg-[#FAF5F2]/40 border-2 border-vintage-gold/20 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-500">
              <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                <span className="md:hidden inline-block font-sans font-bold text-[9px] uppercase tracking-widest text-[#8A4F58] bg-[#FAECEB] px-2.5 py-1 rounded-full mb-1">
                  Tầm nhìn xa
                </span>
                <h3 className="font-serif font-extrabold text-lg text-vintage-brown-dark tracking-wide">
                  {REFLECTIONS[3].title}
                </h3>
                <span className="text-xs font-serif italic text-vintage-rose-dark font-bold animate-pulse">
                  {REFLECTIONS[3].badge}
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-vintage-brown/85 leading-relaxed text-justify mb-6">
                {REFLECTIONS[3].content}
              </p>

              {/* Motivational quotation divider */}
              <div className="pt-4 border-t border-dashed border-vintage-gold/25 text-center">
                <span className="font-serif italic text-base text-[#AF6A75] font-semibold leading-relaxed">
                  “Cái nhìn tri thức thấu suốt hôm nay là bước đi khoa học rộng mở ngày mai.”
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
