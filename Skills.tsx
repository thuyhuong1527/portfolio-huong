import React from "react";
import { IconRenderer } from "./IconRenderer";

interface SkillItem {
  name: string;
  desc: string;
}

interface SkillCategory {
  title: string;
  iconName: string;
  colorClass: string;
  bgClass: string;
  badgeBg: string;
  items: SkillItem[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Nghiên cứu & Sinh học số",
      iconName: "Search",
      colorClass: "text-[#345367]",
      bgClass: "bg-[#E5EEF3]",
      badgeBg: "bg-[#E5EEF3]/40 border-[#345367]/10 hover:bg-[#E5EEF3]/70",
      items: [
        { name: "Tra cứu PubMed nâng cao", desc: "Sử dụng toán tử Boolean phức hợp lọc tài liệu chuẩn gen." },
        { name: "Thiết kế ma trận tài liệu", desc: "Google Sheets làm đối sánh luận điểm bài nghiên cứu xuất sắc." },
        { name: "Tư duy phản biện sinh học", desc: "Phân tích và chắt lọc luận điểm khoa học tự nhiên chính xác." }
      ]
    },
    {
      title: "Kỹ nghệ AI & Công nghệ số",
      iconName: "Cpu",
      colorClass: "text-[#A35C6D]",
      bgClass: "bg-[#FAECEB]",
      badgeBg: "bg-[#FAECEB]/40 border-[#A35C6D]/10 hover:bg-[#FAECEB]/70",
      items: [
        { name: "Prompt Engineering (CREATE/ERA)", desc: "Xây dựng câu lệnh đa ngữ cảnh tinh tế thu kết quả cấu trúc dữ liệu." },
        { name: "Quản lý dữ liệu thông minh", desc: "Quy chuẩn cây thư mục Drive học tập tối hưu hóa sao lưu bảo mật." },
        { name: "Đạo đức AI & Trích dẫn chuẩn", desc: "Tôn trọng tri thức liêm chính học sở, ghi trích dẫn nguồn rạch ròi." }
      ]
    },
    {
      title: "Sáng tạo & Cộng tác nhóm",
      iconName: "Sparkles",
      colorClass: "text-teal-700",
      bgClass: "bg-[#EAF0EB]",
      badgeBg: "bg-[#EAF0EB]/40 border-teal-700/10 hover:bg-[#EAF0EB]/70",
      items: [
        { name: "Đồ họa khoa học sinh học", desc: "Số hóa lý thuyết vi khuẩn và gen thành infographic đẹp thơ mộng." },
        { name: "Sáng tạo kịch bản khoa học", desc: "Lên kịch bản viết podcast, tóm lược kiến thức sinh học truyền cảm hứng." },
        { name: "Làm việc nhóm đa kênh", desc: "Vận hành Drive, Slide, Docs nhóm đồng bộ triệt tiêu xung đột thông tin học." }
      ]
    }
  ];

  return (
    <section id="skills" className="py-28 relative bg-white">
      {/* Decorative stars / Sparkles scattered subtly on background */}
      <div className="absolute top-[15%] left-[5%] text-vintage-gold/25 animate-twinkle">
        <IconRenderer name="Sparkles" size={16} />
      </div>
      <div className="absolute bottom-[15%] right-[5%] text-[#A35C6D]/20 animate-twinkle" style={{ animationDelay: "2s" }}>
        <IconRenderer name="Sparkle" size={20} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-xl mx-auto space-y-3">
          <p className="font-serif italic text-vintage-gold text-lg">
            Năng lực định vị tương lai
          </p>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-vintage-brown-dark tracking-tight">
            Năng Lực &amp; Kỹ Năng Số
          </h2>
          <p className="font-sans text-sm text-vintage-brown/85 leading-relaxed">
            Sự kết hợp hài hòa giữa kiến thức sinh học thực nghiệm, kỹ nghệ giao tiếp trí tuệ tạo sinh AI và khả năng làm truyền thông khoa học truyền cảm hứng.
          </p>
          <div className="w-16 h-[2px] bg-vintage-gold mx-auto mt-4"></div>
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-vintage-pink-light shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Header of card with distinct pastel icon backing */}
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-2xl ${cat.bgClass} flex items-center justify-center ${cat.colorClass} shadow-sm border border-black/[0.02]`}>
                    <IconRenderer name={cat.iconName} size={18} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-vintage-brown-dark leading-none">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] font-sans tracking-wide text-vintage-brown/50 uppercase font-semibold mt-1">Domain 0{idx + 1}</p>
                  </div>
                </div>

                {/* Subtitle Dividing bar */}
                <div className="w-full h-[1px] bg-vintage-pink-light/60"></div>

                {/* List of Skills formatted as clean badges with subtle descriptions */}
                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1.5 group/item">
                      {/* Skill Tag badge with smooth hover scale */}
                      <div className={`inline-block px-3 py-1.5 rounded-full border text-xs font-semibold text-vintage-brown-dark transition-all duration-300 ${cat.badgeBg} transform group-hover/item:translate-x-1 cursor-default`}>
                        {item.name}
                      </div>
                      
                      {/* Sub-description in small clean font */}
                      <p className="text-[11px] font-sans text-vintage-brown/70 leading-relaxed pr-2 pl-1 select-none">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer embellishment */}
              <div className="mt-8 pt-4 border-t border-dashed border-vintage-pink-light flex items-center justify-between text-[9px] font-mono text-vintage-brown/40">
                <span>Verified Standard</span>
                <span className="text-vintage-gold font-sans">✦✦✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
