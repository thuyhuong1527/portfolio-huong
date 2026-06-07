import { Project, SkillTag, ReflectionNode } from "./types";
import studentCafeImg from "./assets/images/student_cafe_1780860251619.png";
import studentSofaImg from "./assets/images/student_sofa_1780860266133.png";

export const STUDENT_INFO = {
  fullName: "Ngô Thị Hường",
  studentId: "25024201",
  class: "K70G-BE",
  major: "Công nghệ Sinh học",
  institution: "Đại học Công nghệ, Đại học Quốc gia Hà Nội",
  hobbies: ["Đọc truyện tranh", "Lướt web học hỏi", "Vẽ phác thảo sinh nghệ thuật", "Nghiên cứu cây cỏ"],
  
  // Bạn có thể đổi ảnh bằng viết code ở đây:
  // Cách 1: Thêm file ảnh mới vào thư mục `/src/assets/images/` rồi import như ở dòng 2 và 3, sau đó gán biến vào đây.
  // Cách 2: Gán trực tiếp một link ảnh URL công khai bên ngoài dạng chuỗi (ví dụ: "https://your-domain.com/your-image.jpg")
  avatarCafe: studentCafeImg, // Ảnh phong cách cà phê ở trang chủ Hero.tsx
  avatarSofa: studentSofaImg, // Ảnh ngồi sofa với mèo ở trang AboutMe.tsx
  
  avatarPlaceholder: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600", // Soft aesthetic vintage portrait representation
  biography: "Là một sinh viên Công nghệ Sinh học tràn đầy nhiệt huyết tại UET - VNU, mình luôn tìm cách giao thoa vẻ đẹp kỳ diệu của thế giới sinh học tự nhiên với thế giới phẳng của công nghệ số. Môn học 'Nhập môn Công nghệ số và Ứng dụng AI' đã mở ra cho mình một lăng kính hoàn toàn mới: không chỉ xem AI là công cụ, mà xem đó như một người bạn đồng hành nghệ thuật đầy sáng tạo để giải mã thông tin khoa học."
};

export const LEARNING_GOALS = {
  learning: [
    "Đạt học bổng học tập xuất sắc trong năm học thứ 2.",
    "Tham gia tích cực vào các lab thí nghiệm và có tên trong ít nhất một bài báo nghiên cứu khoa học cấp khoa/trường."
  ],
  careers: [
    "Học lên Thạc sĩ chuyên ngành Công nghệ Sinh học hoặc Tin sinh học sau khi tốt nghiệp tại cơ sở uy tín.",
    "Trở thành nghiên cứu viên chuyên sâu, phát triển các giải pháp sinh học xanh hỗ trợ giảm thải biến đổi khí hậu."
  ],
  portfolio: [
    "Trực quan hóa và lưu giữ toàn bộ sản phẩm thực hành chất lượng của môn học Nhập môn Công nghệ số & AI.",
    "Rèn luyện kỹ năng trình bày khoa học và thể hiện cá tính riêng thông qua thiết kế độc đáo và chỉn chu."
  ]
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Quản lý tệp và thư mục",
    category: "Hệ thống Lưu trữ & Quản lý Học liệu",
    shortDesc: "Thực hành xây dựng và tối ưu hóa hệ thống lưu trữ khoa học trên dịch vụ đám mây công nghệ số.",
    goal: "Nắm vững nguyên lý tổ chức dữ liệu cá nhân & dữ liệu nghiên cứu, thiết lập quy chuẩn cấu trúc thư mục tối ưu nhằm phục vụ lưu trữ lâu dài và thuận tiện truy xuất.",
    process: "Tiến hành phân loại các tài nguyên sinh học theo niên khóa học tập, phân tách học liệu lý thuyết với các dự án nghiên cứu nhóm thực tế. Sử dụng phương pháp đặt tên tệp tiêu chuẩn Quốc tế (K70G_IntroAI_NgoThiHuong_BàiTập1_v1.pdf), tạo các nhãn dán màu phân loại khẩn cấp và thiết lập hệ thống sao lưu tự động khôi phục.",
    evidence: "Hệ thống cây thư mục phân mảnh logic cao trên Google Drive học tập cá nhân đã lưu trữ hơn 2GB tư liệu học trình luôn bảo mật và ngăn nắp tuyệt đối.",
    product: "Sơ đồ tư duy dạng cây (Mindmap Vector) giải thích quy trình đồng bộ hóa tệp tin đa nền tảng và bảng quy chuẩn đặt tên tài liệu học thuật cá nhân.",
    learningOutcomes: [
      "Hiểu rõ cơ chế tổ chức thư mục phân cấp khoa học và tối ưu hóa không gian lưu trữ đám mây.",
      "Nắm vững nguyên tắc thiết lập quy chuẩn quản trị và đồng bộ hóa dữ liệu học sở cá nhân lâu dài."
    ],
    skillsGained: [
      "Quản trị lưu trữ điện toán đám mây",
      "Quy chuẩn tài liệu học thuật Quốc tế",
      "Thiết kế Mindmap quy trình đồng bộ"
    ],
    projectHighlights: [
      "Cơ cấu hoàn chỉnh cây thư mục lưu trữ học trình không trùng lặp.",
      "Thực hiện bảo dọn và dọn rác dung lượng định kỳ trên hệ sinh thái cá nhân."
    ],
    themeColor: "from-[#FCE4EC] to-[#F8BBD0]",
    iconName: "FolderHeart",
    imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    category: "Khai thác Thư viện & Tài liệu Học thuật",
    shortDesc: "Kỹ năng tra cứu, nhận dạng nguồn tin cậy trên các hệ thống cơ sở dữ liệu học thuật quốc tế lớn.",
    goal: "Thành thạo phương pháp sử dụng bộ lọc tìm kiếm nâng cao để bóc tách 10 bài báo chất lượng cao về hệ thống chỉnh sửa gen CRISPR/Cas9, đánh giá chéo độ tin cậy của tài liệu nghiên cứu.",
    process: "Sử dụng kết hợp các toán tử Boolean nâng cao (AND, OR, NOT) cùng các ký tự định vị cụm từ trên PubMed, Google Scholar và Nature Portfolio. Chắt lọc tài liệu dựa trên phân loại bài viết (Review vs. Original research), chỉ số ảnh hưởng Impact Factor (IF) của tạp chí, chỉ số trích dẫn tác giả H-index và phản biện ngang hàng.",
    evidence: "Bản báo cáo ma trận tổng hợp tài liệu tham khảo (Synthesis Matrix) chi tiết bằng Google Sheets giúp đối sánh nhanh luận điểm nghiên cứu nuôi cấy mô.",
    product: "Danh mục biên soạn 10 tài liệu tham khảo học thuật đạt chuẩn định dạng chuyên ngành APA (Phục vụ đề tài tiểu luận Công nghệ sinh học biến đổi gen).",
    learningOutcomes: [
      "Bóc tách, thẩm định chéo và phân loại bài viết khoa học chất lượng cao từ các thư viện chuẩn quốc tế.",
      "Làm chủ cách thức lập ma trận đối chiếu luận điểm đa chiều bằng Synthesis Matrix."
    ],
    skillsGained: [
      "Bộ lọc tra cứu Boolean nâng cao",
      "Thẩm định định lượng học thuật (IF, H-Index)",
      "Trích dẫn danh mục khoa học chuẩn quốc tế"
    ],
    projectHighlights: [
      "Biên tập thành công danh mục 10 nguồn y sinh chất lượng về công nghệ gen CRISPR/Cas9.",
      "Thể hiện năng lực nghiên cứu sâu kết nối hữu cơ các luận cứ nghiên cứu khoa học."
    ],
    themeColor: "from-[#F5E6D3] to-[#E5C158]/20",
    iconName: "FileSearch",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Viết Prompt hiệu quả",
    category: "Tối ưu hóa Kỹ nghệ Prompt AI (CREATE/ERA)",
    shortDesc: "Nghệ thuật trò chuyện và khai phá tiềm năng tối đa của chatbot AI thông qua câu lệnh thông minh.",
    goal: "Làm chủ các cấu trúc kỹ thuật Prompting nâng cao như CREATE, ERA hay kỹ thuật mô tả mẫu (Few-shot prompting) phục vụ dịch thuật và định vị thuật ngữ Latinh phức tạp.",
    process: "Thử nghiệm thay thế vị thế phản hồi (A - Assign Role), cung cấp tài liệu ngữ cảnh hạn định, và bổ sung các ràng buộc âm sắc đầu ra (Output constraints). Gửi các câu lệnh so sánh đối chiếu giữa ChatGPT và Claude để tìm ra độ chính xác thực nghiệm về cấu trúc gen.",
    evidence: "Bảng đối chiếu ghi lại hai luồng tương tác thực nghiệm: Prompt sơ sài thu về văn bản hời hợt, và Prompt tối ưu cấu trúc thu được kết quả trực quan dạng bảng so sánh khoa học.",
    product: "Cuốn cẩm nang 'Prompt Playbook' gồm 5 kịch bản tư duy sâu sắc, hỗ trợ đắc lực việc tóm tắt tài liệu sinh học tế bào và lên ý tưởng đề tài khoa học.",
    learningOutcomes: [
      "Vận dụng trí tuệ tạo sinh AI như một trợ lý thông minh thông qua câu lệnh được cấu trúc chặt chẽ.",
      "Kiểm soát đầu ra của mô hình ngôn ngữ lớn nhằm triệt tiêu các thông tin ảo hời hợt."
    ],
    skillsGained: [
      "Kỹ nghệ Prompt chuyên nghiệp (CREATE/ERA)",
      "Thiết kế Few-shot prompting mẫu",
      "Hạn định phong cách và rào cản ngữ cảnh AI"
    ],
    projectHighlights: [
      "Đóng góp cẩm nang 'Prompt Playbook' tóm lược thuật học thuật sinh học sinh động.",
      "Nhận diện rõ rệt tác hại của các câu lệnh sơ sài đối lập với prompt tối ưu."
    ],
    themeColor: "from-[#FCE4EC] to-[#FFFDD0]",
    iconName: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Hợp tác trực tuyến trong dự án nhóm",
    category: "Quản lý Dự án & Làm việc Cộng tác",
    shortDesc: "Vận hành hệ sinh thái làm việc cộng tác không khoảng cách phục vụ bài tập nhóm quy mô lớn.",
    goal: "Xây dựng thói quen làm việc đồng bộ, loại bỏ hoàn toàn sự chồng chéo và xung đột dữ liệu, thúc đẩy nâng cao tinh thần tự giác chia sẻ giá trị trong nhóm sáng tạo.",
    process: "Thiết lập môi trường làm việc chung trên Google Drive và Google Slide nhóm. Phân bổ công việc dựa trên biểu đồ Kanban thông minh, lên kế hoạch họp đồng bộ qua Google Calendar, và tận dụng hệ thống lịch sử phiên bản (Version History) để gộp ý kiến phản hồi đóng góp một cách trực quan.",
    evidence: "Bản nhật ký đóng góp lịch sử chỉnh sửa tài liệu liên tiếp 14 ngày của 5 thành viên trong nhóm thiết kế bài trình chiếu Công nghệ sinh học Protein tái tổ hợp.",
    product: "Bộ tài liệu báo cáo nghiên cứu và bài thuyết trình xuất sắc cấu trúc hoàn phức, phong nhã và thống nhất tuyệt đối về tuyến bố cục và màu sắc thương hiệu.",
    learningOutcomes: [
      "Khai thác hệ sinh thái đám mây đồng bộ hóa dự án khoa học nhóm mượt mà.",
      "Tối ưu phân lượng công việc và triệt tiêu xung đột dữ liệu qua quản trị phiên bản sửa lỗi."
    ],
    skillsGained: [
      "Quản lý dự án khoa học qua Kanban",
      "Kiểm tra lịch sử sửa lỗi (Version History)",
      "Phối hợp cộng tác đa kênh trực tuyến"
    ],
    projectHighlights: [
      "Cùng nhóm hoàn thành tuyệt vời bài thuyết trình đồ họa Protein tái tổ hợp.",
      "Giữ vững tinh thần đóng góp liên tục của tập thể trong suốt 14 ngày nhóm."
    ],
    themeColor: "from-[#E3F2FD] to-[#FCE4EC]",
    iconName: "Users",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Sáng tạo nội dung với AI",
    category: "Số hóa Sinh học bằng AI Sáng tạo",
    shortDesc: "Sử dụng AI tạo sinh biến lý thuyết khoa học khô khan thành các sản phẩm truyền thông giàu cảm hứng.",
    goal: "Ứng dụng trí tuệ nhân tạo để số hóa kiến thức sinh học thực nghiệm, mang khoa học chuyên sâu đến gần hơn với trái tim và nhận thức của công chúng xã hội.",
    process: "Biên tập kịch bản chi tiết cho dự án truyền thông bằng Gemini. Chuyển dịch kịch bản thành slide hình ảnh và infographic thiết kế cơ chế vi khuẩn E.coli sản sinh Hormone Insulin trên nền tảng thiết kế AI. Biên tập âm thanh để tạo một podcast ngắn kể chuyện gen và sự sống.",
    evidence: "Tệp tư liệu infographic đồ họa thông tin trực quan ấn tượng về công nghệ di truyền đạt phản hồi tích cực và đánh giá cao từ bạn bè trong nhóm học thuật.",
    product: "Ấn phẩm Infographic 'Giải Mã Insulin Tái Tổ Hợp' và Bản phác thảo kịch bản kịch tính hóa bài học khoa học cho thế hệ trẻ.",
    learningOutcomes: [
      "Học cách biên kịch kiến thức lý thuyết sinh học hóc búa thành câu chuyện đại chúng hấp dẫn.",
      "Sử dụng AI biên tập âm thanh và mỹ sinh học đồ họa thông tin trực quan ấn tượng."
    ],
    skillsGained: [
      "Thiết kế mỹ thuật Infographic khoa học",
      "Biên tập kịch bản truyền thông và podcast",
      "Phối hợp trợ lý giọng nói tạo sinh AI"
    ],
    projectHighlights: [
      "Thiết kế Infographic công nghệ E.coli sinh hormone insulin tuyệt mỹ.",
      "Phát triển kịch bản podcast sinh học lay động cảm xúc độc giả trẻ."
    ],
    themeColor: "from-[#FCE4EC] to-[#FFF9C4]",
    iconName: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "AI có trách nhiệm trong học tập và nghiên cứu",
    category: "Liêm chính khoa học & Đạo đức AI Học đường",
    shortDesc: "Xây dựng tư duy liêm chính học thuật và bảo mật thông tin khi nghiên cứu khoa học cùng AI.",
    goal: "Ý thức sâu sắc ranh giới giữa hỗ trợ sáng tạo lý trí và lạm dụng phi lý độc lập tư duy, kiểm soát lỗi ngộ nhận kiến thức (AI hallucination) và tuyệt đối tôn trọng quyền tác giả.",
    process: "Phân tích và nghiên cứu sâu các bộ chuẩn mực đạo đức nghiên cứu học thuật của ĐHQGHN. Xây dựng bản đồ tư duy đánh giá các rủi ro lo ngại về rò rỉ dữ liệu di truyền học cá nhân khi tải dữ liệu lên các máy chủ AI đám mây.",
    evidence: "Bảng tuyên thệ học tập danh dự cá nhân 'Cam kết 5 Không' khi đồng hành cùng công nghệ thông minh trong phòng thí nghiệm sinh học.",
    product: "Cẩm nang học tập số liêm chính 'Sổ Tay Đạo Đức AI Học Đường' - Bản đồ định vị giúp người đọc nhận biết và ghi trích dẫn nguồn công cụ AI đúng tiêu chuẩn quốc tế.",
    learningOutcomes: [
      "Nhận thực thấu suốt ranh giới vàng giữa đồng hành cùng trí tuệ nhân tạo và mất đi tính độc lập tư duy.",
      "Ý thức bảo vệ di sản thông tin di truyền học quốc gia khi làm việc của môi trường đám mây mở."
    ],
    skillsGained: [
      "Nhận thức ảo giác và thiên vị thuật toán",
      "Quy cách trích dẫn nguồn AI đúng niên giám",
      "Ký kết tự trọng học thuật khoa học sinh học"
    ],
    projectHighlights: [
      "Ký cam kết tôn trọng danh dự khoa học 'Cam kết 5 Không' mẫu mực.",
      "Biên soạn tài liệu tham khảo chính phục cho lớp 'Sổ Tay Đạo Đức AI Học Đường'."
    ],
    themeColor: "from-[#FFF9C4] to-[#FCE4EC]",
    iconName: "ShieldAlert",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  }
];

export const SKILL_TAGS: SkillTag[] = [
  { id: 1, name: "Quản lý dữ liệu thông minh" },
  { id: 2, name: "Tra cứu PubMed nâng cao" },
  { id: 3, name: "Thiết kế ma trận tài liệu" },
  { id: 4, name: "Prompt Engineering (CREATE/ERA)" },
  { id: 5, name: "Làm việc nhóm đa kênh" },
  { id: 6, name: "Đồ họa khoa học sinh học" },
  { id: 7, name: "Sáng tạo kịch bản khoa học" },
  { id: 8, name: "Đạo đức AI & Trích dẫn chuẩn" },
  { id: 9, name: "Tư duy phản biện sinh học số" }
];

export const REFLECTIONS: ReflectionNode[] = [
  {
    title: "Quả Ngọt Kỹ Năng Đã Gặt Hái",
    content: "Qua môn học, mình không chỉ thành thạo kỹ năng số căn bản như lưu trữ Drive đồng bộ mà còn làm chủ được cách khai thác tri thức của nhân loại thông qua AI một cách chuẩn mực và sáng giá nhất.",
    iconName: "Gift",
    badge: "Kỹ năng mới",
    details: [
      "Quản lý vòng đời dữ liệu nghiên cứu theo chuẩn khoa học số.",
      "Kỹ nghệ Prompt tối ưu hóa thu hoạch kết quả chuẩn gen.",
      "Quy trình xây dựng tư liệu học tập liêm chính, minh bạch."
    ]
  },
  {
    title: "Trải Nghiệm Tâm Đắc Nhất",
    content: "Mình vô cùng say đắm việc sử dụng AI tạo sinh để làm khoa học sinh học trở nên thơ mộng và dễ hiểu thông qua những tấm Poster thiết kế đồ họa mềm mại. Từ những phân tử lằng nhằng, DNA và Vi khuẩn bỗng trở thành những nhân vật kể chuyện đầy sống động, chạm đến xúc cảm người xem.",
    iconName: "Heart",
    badge: "Tâm đắc"
  },
  {
    title: "Thách Thức & Tiến Trình Vượt Qua",
    content: "Sự bùng nổ của thông tin ảo và bệnh ngộ nhận (AI Hallucination) đã khiến mình nhiều phen bối rối trong quá trình tra cứu. Mình đã học được bài học xương máu: Luôn luôn đối chiếu chéo kết quả của AI với các nghiên cứu gốc từ giáo trình thực tế hoặc tạp chí uy tín trước khi ghi nhận.",
    iconName: "Compass",
    badge: "Vượt khó"
  },
  {
    title: "Tầm Nhìn Tương Lai: Sinh Học Khai Phá Bằng Trí Tuệ Số",
    content: "Mục tiêu tối thượng của mình sau môn học này là ứng dụng thuật toán AI vào biểu diễn cấu trúc Protein và sinh tin học di truyền. Mình tin rằng, một nhà sinh học kết hợp xuất sắc kỹ năng số sẽ tìm ra giải pháp cho các căn bệnh hiểm nghèo nhanh hơn gấp vạn lần.",
    iconName: "Milestone",
    badge: "Định hướng"
  }
];
