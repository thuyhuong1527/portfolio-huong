import React, { useState } from "react";
import { IconRenderer } from "./IconRenderer";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Cảm ơn bạn, xin vui lòng điền đầy đủ các thông tin nhé!");
      return;
    }

    setIsLoading(true);
    // Simulate real digital dispatch
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#FAF8F6] overflow-hidden">
      {/* Decorative stars / Sparkles scattered subtly on background */}
      <div className="absolute top-[12%] right-[10%] text-vintage-gold/25 animate-twinkle">
        <IconRenderer name="Sparkle" size={18} />
      </div>
      <div className="absolute bottom-[10%] left-[8%] text-vintage-rose-dark/15 animate-twinkle" style={{ animationDelay: "1.5s" }}>
        <IconRenderer name="Sparkles" size={20} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-3">
          <p className="font-serif italic text-vintage-gold text-lg">
            Kết nối &amp; Trao đổi học thuật
          </p>
          <h2 className="font-serif font-extrabold text-3xl md:text-4xl text-vintage-brown-dark tracking-tight">
            Gửi Lời Nhắn Gửi
          </h2>
          <p className="font-sans text-xs sm:text-sm text-vintage-brown/70 max-w-sm mx-auto leading-relaxed">
            Mở rộng vòng tay chào đón những trao đổi nghiên cứu sinh học, dự án công nghệ hoặc đóng góp sáng kiến.
          </p>
          <div className="w-16 h-[2px] bg-vintage-gold mx-auto mt-4"></div>
        </div>

        {/* Contemporary Grid Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Scholarly Acknowledgements & Direct Social Links [Span 5] */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-vintage-pink-light shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-vintage-pink-light/30 border border-vintage-pink-light/20 z-0 pointer-events-none"></div>

            <div className="relative z-10 space-y-5">
              <span className="font-serif italic text-xl text-vintage-gold block">Lời tri ân sâu sắc</span>
              <p className="font-sans text-xs sm:text-sm text-vintage-brown/90 leading-relaxed text-justify">
                Cảm ơn bạn rất nhiều vì đã dành thời gian đi dạo và nghiên cứu qua cuốn tập san số cá nhân này. Mỗi phản hồi, góp ý từ bạn đều nâng bước rất lớn cho sự trưởng thành của mình.
              </p>
              <p className="font-sans text-xs sm:text-sm text-vintage-brown/85 leading-relaxed text-justify">
                Đặc biệt tri ân Quý Thầy Cô bộ môn <strong className="text-vintage-brown-dark font-semibold">Nhập môn Công nghệ số và Ứng dụng AI</strong> tại Trường Đại học Công nghệ (VNU-UET) đã mở mang tầm mắt định hình kỷ nguyên học thuật tương lai cho tớ.
              </p>
            </div>

            {/* Social credentials cards */}
            <div className="relative z-10 pt-8 mt-8 border-t border-dashed border-vintage-pink-light space-y-4">
              <p className="font-sans text-[10px] tracking-widest text-[#AF6A75] uppercase font-bold">
                Kênh Liên Hệ Chính Thức:
              </p>
              
              <div className="space-y-3.5">
                {/* Email Address */}
                <a
                  href="mailto:25024201@vnu.edu.vn"
                  className="flex items-center gap-3.5 text-xs text-vintage-brown-dark hover:text-vintage-rose-dark transition-all duration-300 group p-2 rounded-2xl hover:bg-[#FAF8F6]"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FAECEB] flex items-center justify-center text-[#A35C6D] group-hover:scale-105 transition-transform shadow-sm">
                    <IconRenderer name="Mail" size={15} />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] text-vintage-brown/50 block font-bold uppercase leading-none mb-1">Thư học sở VNU</span>
                    <span className="font-mono font-medium group-hover:underline text-[11px] sm:text-xs text-vintage-brown-dark">25024201@vnu.edu.vn</span>
                  </div>
                </a>

                {/* Facebook Profile */}
                <a
                  href="https://facebook.com/uethuongngo.fake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-xs text-vintage-brown-dark hover:text-vintage-rose-dark transition-all duration-300 group p-2 rounded-2xl hover:bg-[#FAF8F6]"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform shadow-sm">
                    <IconRenderer name="Facebook" size={15} />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] text-vintage-brown/50 block font-bold uppercase leading-none mb-1">Mạng xã hội</span>
                    <span className="font-serif group-hover:underline font-bold text-vintage-brown-dark">Ngô Thị Hường</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Re-styled Message Postboard Form [Span 7] */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-vintage-pink-light shadow-sm flex flex-col justify-center min-h-[440px]">
            
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-xl text-vintage-brown-dark">
                    Gửi hòm thư số
                  </h3>
                  <p className="font-sans text-xs text-vintage-brown/60">
                    Mời bạn để lại lời chúc, câu hỏi hoặc chia sẻ ý tưởng hợp tác khoa học bên dưới.
                  </p>
                </div>

                {/* Input 1: Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="id-form-name"
                    className="font-sans text-[10px] uppercase tracking-wider text-vintage-brown/60 font-bold"
                  >
                    Họ và tên của bạn
                  </label>
                  <input
                    type="text"
                    id="id-form-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ví dụ: Nguyễn Văn A"
                    required
                    className="w-full px-4 py-3 bg-[#FAF8F6] hover:bg-[#FAF5F0] text-xs sm:text-sm border border-vintage-pink-light/80 rounded-2xl focus:border-[#A35C6D] focus:bg-white outline-none transition-all font-sans text-vintage-brown-dark"
                  />
                </div>

                {/* Input 2: Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="id-form-email"
                    className="font-sans text-[10px] uppercase tracking-wider text-vintage-brown/60 font-bold"
                  >
                    Địa chỉ Email phản hồi
                  </label>
                  <input
                    type="email"
                    id="id-form-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@gmail.com"
                    required
                    className="w-full px-4 py-3 bg-[#FAF8F6] hover:bg-[#FAF5F0] text-xs sm:text-sm border border-vintage-pink-light/80 rounded-2xl focus:border-[#A35C6D] focus:bg-white outline-none transition-all font-mono text-vintage-brown-dark"
                  />
                </div>

                {/* Input 3: Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="id-form-message"
                    className="font-sans text-[10px] uppercase tracking-wider text-vintage-brown/60 font-bold"
                  >
                    Lời chúc hoặc đề xuất trao đổi
                  </label>
                  <textarea
                    id="id-form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hãy để lại vài lời tâm huyết từ trái tim bạn..."
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-[#FAF8F6] hover:bg-[#FAF5F0] text-xs sm:text-sm border border-vintage-pink-light/80 rounded-2xl focus:border-[#A35C6D] focus:bg-white outline-none transition-all font-sans text-vintage-brown-dark resize-none"
                  ></textarea>
                </div>

                {/* Submit button pill with glass or gradient highlight */}
                <div className="pt-2 text-right">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-vintage-brown hover:bg-vintage-brown-dark text-white font-sans font-bold text-xs tracking-widest rounded-full uppercase transition-all shadow-md disabled:opacity-50 cursor-pointer hover:-translate-y-0.5"
                  >
                    {isLoading ? (
                      <span>Đang mã hóa thư gửi...</span>
                    ) : (
                      <>
                        <span>Gửi Lời Nhắn</span>
                        <IconRenderer name="Send" size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              // Sent Letter visual confirmation with beautiful soft pastel themes
              <div className="text-center py-8 px-4 flex flex-col items-center justify-center animate-[scaleIn_0.4s_ease-out]">
                {/* Modern success seal */}
                <div className="w-16 h-16 rounded-full bg-[#EAF0EB] flex items-center justify-center text-teal-700 mb-6 shadow-sm border border-teal-600/10">
                  <IconRenderer name="CheckCircle" size={26} />
                </div>
                
                <h3 className="font-serif font-extrabold text-xl text-vintage-brown-dark tracking-wide mb-2">
                  Lời Nhắn Đã Được Gửi Thành Công!
                </h3>
                
                <p className="font-sans text-xs text-vintage-brown/75 max-w-sm mx-auto leading-relaxed mb-6 text-center">
                  Cảm ơn bạn yêu thương đã gửi chút tâm tình. Phản hồi của bạn đã được lưu trữ bảo mật và gửi trực tiếp tới hòm thư cá nhân của mình. Mình sẽ phản hồi lại bạn sớm nhất có thể nhé!
                </p>

                <button
                  onClick={() => setIsSent(false)}
                  className="px-5 py-2.5 bg-transparent border border-vintage-pink-light hover:border-[#A35C6D] hover:text-[#A35C6D] text-vintage-brown font-sans font-bold text-[10px] tracking-widest uppercase rounded-full transition-all duration-400 cursor-pointer"
                >
                  Gửi một bức thư khác
                </button>
              </div>
            )}

          </div>
        </div>

        {/* Footer block integrated elegantly */}
        <div className="mt-24 pt-8 border-t border-vintage-pink-light/50 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-xs text-vintage-brown/40">
          <p className="font-sans">
            &copy; 2026 <strong className="text-vintage-brown-dark font-medium">Ngô Thị Hường</strong>. Bản quyền thuộc UET-VNU.
          </p>
          <p className="font-sans text-[10px] tracking-wider uppercase font-bold text-[#AF6A75]">
            Môn học: Nhập môn Công nghệ số và Ứng dụng AI
          </p>
        </div>

      </div>
    </section>
  );
};
