import React, { useState } from "react";
import { PROJECTS_DATA } from "../data";
import { Project } from "../types";
import { IconRenderer } from "./IconRenderer";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-28 relative bg-[#FAF8F6]">
      {/* Decorative starry or flower icons in background */}
      <div className="absolute top-[8%] right-[6%] text-vintage-rose-dark/10 select-none pointer-events-none text-5xl">
        ✦
      </div>
      <div className="absolute bottom-[8%] left-[6%] text-vintage-rose-dark/10 select-none pointer-events-none text-5xl">
        ✧
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
          <p className="font-serif italic text-vintage-gold text-lg">
            Hồ sơ học tập thực tế
          </p>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-vintage-brown-dark tracking-tight">
            Tuyển Tập Dự Án Khoa Học
          </h2>
          <p className="font-sans text-sm text-vintage-brown/80 leading-relaxed">
            Các chuyên đề nghiên cứu thực hành và kỹ năng số cốt lõi được mình rèn luyện, ghi chép và đôn đốc chất lượng liên tục trong học phần Nhập môn Công nghệ số &amp; AI.
          </p>
          <div className="w-16 h-1 bg-vintage-gold rounded-full mx-auto"></div>
        </div>

        {/* Clean Responsive Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openProjectDetails(project)}
              className="group cursor-pointer bg-white rounded-2xl border border-vintage-pink-light hover:border-vintage-rose-dark/30 p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col justify-between h-[460px]"
            >
              <div className="space-y-4">
                {/* Large Beautiful Aspect Thumbnail */}
                {project.imageUrl && (
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-xl border border-vintage-pink-light bg-stone-50 relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vintage-brown-dark/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                )}

                {/* Tag & Icon Metadata Line */}
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[10px] font-sans font-bold tracking-wide text-vintage-gold bg-vintage-gold-light/40 px-3 py-1 rounded-full uppercase">
                    {project.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF5F0] text-vintage-rose-dark flex items-center justify-center group-hover:bg-vintage-brown group-hover:text-white transition-all duration-500 shadow-sm">
                    <IconRenderer name={project.iconName} size={14} />
                  </div>
                </div>

                {/* Content divider */}
                <div className="w-full h-[1px] bg-vintage-pink-light/60 group-hover:bg-vintage-rose-dark/20 transition-colors"></div>

                {/* Case Study Title */}
                <h3 className="font-serif font-bold text-base text-vintage-brown-dark tracking-wide line-clamp-1 group-hover:text-vintage-rose-dark transition-colors">
                  {project.title}
                </h3>

                {/* Concise text statement */}
                <p className="font-sans text-xs text-vintage-brown/85 leading-relaxed text-justify line-clamp-3">
                  {project.shortDesc}
                </p>
              </div>

              {/* Redesigned Button Link at the card bottom */}
              <div className="pt-4 border-t border-dashed border-vintage-pink-light flex items-center justify-between">
                <span className="font-serif font-bold italic text-xs text-[#AF6A75] group-hover:text-vintage-rose-dark flex items-center gap-1.5 transition-colors">
                  Xem chi tiết dự án
                  <span className="text-[11px] group-hover:translate-x-1 transition-transform inline-block">✦</span>
                </span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-vintage-brown/40 group-hover:text-vintage-rose-dark">
                  Case 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Upgrade Detailed Modal into Contemporary Academic Paper Style */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-vintage-brown-dark/50 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]">
            <div className="bg-white max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl relative border border-vintage-pink-light p-6 sm:p-8 md:p-10 animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
              
              {/* Sleek Close round button */}
              <button
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-vintage-pink-light bg-neutral-50/50 text-vintage-brown-dark flex items-center justify-center hover:bg-vintage-rose-dark hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm"
                aria-label="Đóng hộp thoại"
              >
                <IconRenderer name="X" size={16} />
              </button>

              {/* Clean title banner */}
              <div className="border-b border-vintage-pink-light pb-6 mb-8 text-center pr-8 sm:pr-0">
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#AF6A75] bg-vintage-rose-dark/5 px-3 py-1 rounded-full uppercase inline-block mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-vintage-brown-dark tracking-wide leading-tight">
                  {selectedProject.title}
                </h3>
                <div className="flex justify-center items-center gap-2 mt-3 text-xs text-vintage-brown/50">
                  <span className="w-2 h-2 rounded-full bg-vintage-gold"></span>
                  <span className="font-sans font-medium">Học vụ nghiên cứu • Ngô Thị Hường</span>
                </div>
              </div>

              {/* Structured academic grid details */}
              <div className="space-y-8">
                
                {/* Large diagram block */}
                {selectedProject.imageUrl && (
                  <div className="flex flex-col items-center">
                    <div className="p-2 border border-vintage-pink-light/80 bg-[#FAF8F6] shadow-md max-w-lg w-full rounded-2xl">
                      <div className="aspect-[16/10] overflow-hidden rounded-xl bg-stone-50">
                        <img
                          src={selectedProject.imageUrl}
                          alt={selectedProject.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center mt-3 font-sans italic text-[11px] text-vintage-brown/70 leading-normal px-2">
                        Hình minh chứng: {selectedProject.title} (Sản phẩm tác vụ)
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Goal */}
                <div className="p-5 bg-vintage-gold-light/40 rounded-2xl border border-vintage-gold/15 space-y-2">
                  <h4 className="font-serif font-bold text-sm text-vintage-brown-dark flex items-center gap-2">
                    <IconRenderer name="Bookmark" className="text-vintage-gold" size={16} />
                    I. Bản Chất &amp; Mục Tiêu Thực Hành
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-vintage-brown/95 leading-relaxed text-justify">
                    {selectedProject.goal}
                  </p>
                </div>

                {/* Process */}
                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-sm text-vintage-brown-dark flex items-center gap-2">
                    <IconRenderer name="Calendar" className="text-vintage-rose-dark" size={16} />
                    II. Tiến Trình Thực Hiện &amp; Phương Pháp Luận
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-vintage-brown/90 leading-relaxed text-justify pl-4 border-l-2 border-vintage-rose-dark/30">
                    {selectedProject.process}
                  </p>
                </div>

                {/* Evidence */}
                <div className="p-5 bg-[#FAFDFB] rounded-2xl border border-teal-600/10 space-y-2">
                  <h4 className="font-serif font-bold text-sm text-vintage-brown-dark flex items-center gap-2">
                    <IconRenderer name="CheckCircle" className="text-teal-700" size={16} />
                    III. Minh Chứng Học Tập Ghi Nhận
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-vintage-brown/95 leading-relaxed text-justify">
                    {selectedProject.evidence}
                  </p>
                </div>

                {/* Product */}
                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-sm text-vintage-brown-dark flex items-center gap-2">
                    <IconRenderer name="Layers" className="text-vintage-brown" size={16} />
                    IV. Sản Phẩm Thu Hoạch Chuyên Môn
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-vintage-brown-dark font-medium leading-relaxed text-justify pl-4 border-l-2 border-vintage-brown/20">
                    {selectedProject.product}
                  </p>
                </div>

                {/* Clean Project Summary Card (An toàn & Cực kỳ sang trọng) */}
                <div className="pt-8 border-t border-vintage-pink-light space-y-6">
                  <div className="text-center sm:text-left">
                    <span className="font-sans font-bold text-[10px] tracking-wider text-[#A35C6D] uppercase block">
                      Tóm tắt chuyên đề
                    </span>
                    <h4 className="font-serif font-black text-lg text-vintage-brown-dark mt-1">
                      V. Kết Quả Thu Hoạch Thực Hành
                    </h4>
                  </div>

                  <div className="bg-gradient-to-br from-[#FCFAF7] to-[#FAF5EE] rounded-2xl border border-vintage-pink-light p-6 space-y-6 shadow-sm">
                    {/* Grid for Key learning outcomes & Project highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Key Learning Outcomes */}
                      <div className="space-y-3">
                        <h5 className="font-serif font-bold text-xs sm:text-sm text-vintage-brown-dark flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A35C6D]"></span>
                          Kết quả Học tập Cốt lõi
                        </h5>
                        <ul className="space-y-2.5">
                          {selectedProject.learningOutcomes?.map((outcome, oIdx) => (
                            <li key={oIdx} className="flex gap-2 text-xs text-vintage-brown leading-relaxed text-justify">
                              <span className="text-[#A35C6D] mt-0.5">✦</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project Highlights */}
                      <div className="space-y-3">
                        <h5 className="font-serif font-bold text-xs sm:text-sm text-vintage-brown-dark flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
                          Điểm nhấn Thực tiễn
                        </h5>
                        <ul className="space-y-2.5">
                          {selectedProject.projectHighlights?.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex gap-2 text-xs text-vintage-brown leading-relaxed text-justify">
                              <span className="text-teal-600 mt-0.5">✦</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Skills Gained line */}
                    <div className="pt-4 border-t border-vintage-pink-light/60 space-y-3">
                      <h5 className="font-serif font-bold text-xs text-vintage-brown-dark flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-vintage-gold"></span>
                        Kỹ năng Rèn luyện Gặt hái
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.skillsGained?.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-sans font-bold bg-[#FAF6F2] hover:bg-vintage-pink-light/30 border border-vintage-pink-light text-vintage-brown-dark px-3 py-1.5 rounded-full transition-colors cursor-default flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-vintage-gold"></span>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Paper footer details */}
              <div className="mt-10 pt-4 border-t border-vintage-pink-light/50 text-center text-[10px] text-vintage-brown/40">
                <span>© Ngô Thị Hường • Nhật ký học tập Khoa học &amp; AI Sáng tạo</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
