function toggleSection(id) {
  var section = document.getElementById(id);

  // Ẩn tất cả các phần chi tiết khác
  document.querySelectorAll(".detail").forEach(function (detail) {
    if (detail.id !== id) {
      detail.style.display = "none";
      detail.classList.remove("show");
    }
  });

  // Hiển thị hoặc ẩn phần được nhấp
  if (section.style.display === "block") {
    section.style.display = "none";
    section.classList.remove("show");
  } else {
    section.style.display = "block";
    setTimeout(function () {
      section.classList.add("show"); 
    }, 10); 
  }
}

// dark light
document.getElementById("toggle-theme").addEventListener("click", function () {
  const container = document.querySelector(".container");

  if (container) {
    container.classList.toggle("light-mode");
    document.querySelector(".left-column").classList.toggle("light-mode");
    document.querySelector(".right-column").classList.toggle("light-mode");
    document.querySelectorAll(".section-link").forEach(function (link) {
      link.classList.toggle("light-mode");
    });

    // Cập nhật icon và text cho chế độ sáng/tối
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");

    // Cập nhật chính xác icon và text
    if (container.classList.contains("light-mode")) {
      themeIcon.src = "Hinh/mattroi.jpg"; 
      themeText.textContent = "Chế Độ Sáng";
    } else {
      themeIcon.src = "Hinh/mattrang.jpg"; 
      themeText.textContent = "Chế Độ Tối";
    }

    // Lưu trạng thái vào localStorage
    localStorage.setItem(
      "theme",
      container.classList.contains("light-mode") ? "light" : "dark"
    );
  }
});

// Kiểm tra và đặt lại icon theo localStorage khi tải trang
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");
  const savedTheme = localStorage.getItem("theme");

  // Đặt chế độ theo localStorage
  if (savedTheme === "light") {
    container.classList.add("light-mode");
    document.querySelector(".left-column").classList.add("light-mode");
    document.querySelector(".right-column").classList.add("light-mode");
    document.querySelectorAll(".section-link").forEach(function (link) {
      link.classList.add("light-mode");
    });
    themeIcon.src = "Hinh/mattroi.jpg";
    themeText.textContent = "Chế Độ Sáng";
  } else {
    container.classList.remove("light-mode");
    document.querySelector(".left-column").classList.remove("light-mode");
    document.querySelector(".right-column").classList.remove("light-mode");
    document.querySelectorAll(".section-link").forEach(function (link) {
      link.classList.remove("light-mode");
    });
    themeIcon.src = "Hinh/mattrang.jpg";
    themeText.textContent = "Chế Độ Tối";
  }
});


// i18n để dịch đa ngôn ngữ 

const i18n = {
  en: {
    name: "CHAU GIA BAO",
    jt: "Developer",
    gt: "About Me",
    gt1: "A visionary tech researcher and developer who thrives on adapting to the ever-evolving digital landscape.",
    gt2: "With a deep passion for Web App and Automation, I push the boundaries of technology to create innovative solutions.",
    gt3: "A tech enthusiast who brings ideas to life and bridges the gap between technology and real-world applications.",
    al: "Discover More",
    kn: "Skills & Expertise",
    kn1: "Skilled in multiple programming languages and tools, bringing versatile solutions to complex challenges.",
    kn2: [
      "HTML, CSS, JavaScript - Creating dynamic and responsive web applications",
      "C#, .NET Framework - Robust software development and automation",
      "SQL, Database Management - Optimized data handling and storage",
      "Business Management - Strategic planning and problem-solving",
      "Economic Consulting - Delivering insights and value to businesses",
      "Marketing - Crafting impactful campaigns and digital strategies",
    ],
    "skills-link": "Explore Skills",
    kng: "Professional Experience",
    kng1: "An accomplished developer with extensive experience in management, research, and software development.",
    kng2: "Managed material warehouse operations at Kim Long Company, streamlining processes and optimizing inventory management.",
    kng3: "Contributed to web development projects, enhancing performance, and resolving technical issues.",
    "experience-link": "Learn More",
    da: "Projects & Achievements",
    da1: "Built impactful projects in travel and library management applications.",
    da2: "Vietnam Scenic Tourism Website - Showcasing the beauty of Vietnam through technology.",
    da3: "Library Management Application - Streamlining book management with powerful tools.",
    "projects-link": "Explore Projects",
  },
  vi: {
    name: "CHÂU GIA BẢO",
    jt: "Lập Trình Viên",
    gt: "Giới Thiệu Bản Thân",
    gt1: "Một nhà nghiên cứu và phát triển công nghệ đầy tâm huyết, luôn thích nghi với sự thay đổi không ngừng của thời đại số.",
    gt2: "Với đam mê mạnh mẽ trong lĩnh vực Web App và Tự Động Hóa, tôi luôn khám phá và tạo ra những giải pháp công nghệ đột phá.",
    gt3: "Một người yêu công nghệ, biến ý tưởng thành hiện thực và kết nối công nghệ với cuộc sống thực tiễn.",
    al: "Khám Phá Thêm",
    kn: "Kỹ Năng & Chuyên Môn",
    kn1: "Thành thạo nhiều ngôn ngữ lập trình và công cụ, mang lại giải pháp linh hoạt cho các thách thức phức tạp.",
    kn2: [
      "HTML, CSS, JavaScript - Phát triển ứng dụng web năng động và đáp ứng",
      "C#, .NET Framework - Phát triển phần mềm mạnh mẽ và tự động hóa",
      "SQL, Quản Lý Cơ Sở Dữ Liệu - Xử lý và lưu trữ dữ liệu tối ưu",
      "Quản Lý Doanh Nghiệp - Lập kế hoạch chiến lược và giải quyết vấn đề",
      "Cố Vấn Kinh Tế - Cung cấp giải pháp kinh doanh hiệu quả",
      "Marketing - Xây dựng chiến dịch và chiến lược số hiệu quả",
    ],
    "skills-link": "Xem Chi Tiết",
    kng: "Kinh Nghiệm Làm Việc",
    kng1: "Một lập trình viên giàu kinh nghiệm trong quản lý, nghiên cứu và phát triển phần mềm.",
    kng2: "Quản lý kho nguyên liệu tại Công Ty Kim Long, tối ưu hóa quy trình và quản lý hàng tồn kho hiệu quả.",
    kng3: "Góp phần phát triển các dự án website, nâng cao hiệu suất và khắc phục sự cố kỹ thuật.",
    "experience-link": "Tìm Hiểu Thêm",
    da: "Dự Án & Thành Tựu",
    da1: "Thực hiện nhiều dự án trong lĩnh vực du lịch và quản lý thư viện.",
    da2: "Website Du Lịch Danh Lam Thắng Cảnh Việt Nam - Quảng bá vẻ đẹp Việt Nam qua công nghệ.",
    da3: "Ứng Dụng Quản Lý Thư Viện - Tối ưu hóa quản lý sách với công cụ mạnh mẽ.",
    "projects-link": "Khám Phá Dự Án",
  },
};

function changeLanguage(lang) {
  const texts = i18n[lang];
  Object.keys(texts).forEach((id) => {
    if (Array.isArray(texts[id])) {
      document.getElementById(id).innerHTML = texts[id]
        .map((item) => `<li>${item}</li>`)
        .join("");
    } else {
      document.getElementById(id).innerHTML = texts[id];
    }
  });
  localStorage.setItem("lang", lang); // Lưu trạng thái ngôn ngữ
}

document
  .getElementById("english")
  .addEventListener("click", () => changeLanguage("en"));
document
  .getElementById("vietnamese")
  .addEventListener("click", () => changeLanguage("vi"));

// Tự động đặt ngôn ngữ khi tải trang
const savedLang = localStorage.getItem("lang") || "vi";
changeLanguage(savedLang);


// PDF
document.getElementById("download-cv").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  // Load custom font
  const fontUrl = "https://cdnjs.cloudflare.com/ajax/libs/jsPDF/2.4.0/fonts/Times-Roman-normal.js";
  await fetch(fontUrl)
    .then(response => response.text())
    .then(data => pdf.addFileToVFS("Times-Roman-normal.ttf", data));

  pdf.setFont("Times-Roman-normal");
  pdf.setFontSize(12);

  // Header
  pdf.setFontSize(18);
  pdf.text("CHÂU GIA BẢO - Lập Trình Viên", 20, 20);

  // Personal Info
  pdf.setFontSize(14);
  pdf.text("Thông Tin Cá Nhân", 20, 40);
  pdf.setFontSize(12);
  pdf.text("Số điện thoại: 0325992413", 20, 50);
  pdf.text("Email: 13chaugiabao@gmail.com", 20, 60);
  pdf.text("Facebook: Bảo Đập Trai", 20, 70);
  pdf.text("Zalo: https://chat.zalo.me/Bảo", 20, 80);
  pdf.text("LinkedIn: https://www.linkedin.com/in/ChauGiaBao", 20, 90);

  // Giới thiệu bản thân
  pdf.setFontSize(14);
  pdf.text("Giới Thiệu Bản Thân", 20, 110);
  pdf.setFontSize(12);
  pdf.text("Tôi là một lập trình viên đam mê công nghệ, với một tâm huyết mãnh liệt trong việc phát triển các giải pháp công nghệ tiên tiến.", 20, 120);
  pdf.text("Tôi luôn tìm cách tạo ra những sản phẩm phần mềm sáng tạo, có giá trị thực tiễn và phục vụ cộng đồng.", 20, 130);
  pdf.text("Sở thích của tôi là nghiên cứu các xu hướng công nghệ mới và tham gia vào các dự án sáng tạo để giải quyết các bài toán khó.", 20, 140);

  // Skills
  pdf.setFontSize(14);
  pdf.text("Kỹ Năng & Chuyên Môn", 20, 160);
  pdf.setFontSize(12);
  const skills = [
    "• Thành thạo HTML, CSS, JavaScript - Phát triển ứng dụng web đáp ứng và động.",
    "• Kinh nghiệm lập trình C# và .NET Framework - Phát triển phần mềm mạnh mẽ và tự động hóa.",
    "• Xử lý cơ sở dữ liệu với SQL - Quản lý và tối ưu hóa dữ liệu.",
    "• Kỹ năng quản lý dự án và lập kế hoạch chiến lược.",
    "• Marketing - Xây dựng chiến lược số hiệu quả cho các dự án công nghệ."
  ];
  skills.forEach((skill, index) => {
    pdf.text(skill, 20, 170 + index * 10);
  });

  // Kinh nghiệm làm việc
  pdf.setFontSize(14);
  pdf.text("Kinh Nghiệm Làm Việc", 20, 230);
  pdf.setFontSize(12);
  pdf.text("• Developer tại Công Ty XYZ - Phát triển ứng dụng quản lý, tối ưu hóa quy trình công việc.", 20, 240);
  pdf.text("• Quản lý kho nguyên liệu tại Công Ty Kim Long - Tối ưu hóa quy trình và quản lý kho hiệu quả.", 20, 250);
  pdf.text("• Tham gia phát triển các dự án website, cải thiện hiệu suất và khắc phục sự cố kỹ thuật.", 20, 260);

  // Dự án & Thành tựu
  pdf.setFontSize(14);
  pdf.text("Dự Án & Thành Tựu", 20, 280);
  pdf.setFontSize(12);
  pdf.text("• Website Du Lịch Danh Lam Thắng Cảnh Việt Nam - Quảng bá vẻ đẹp đất nước qua công nghệ.", 20, 290);
  pdf.text("• Ứng Dụng Quản Lý Thư Viện - Giúp các thư viện dễ dàng quản lý sách và tài liệu.", 20, 300);
  pdf.text("• Hệ Thống Quản Lý Bán Hàng - Phát triển hệ thống quản lý đơn hàng cho các cửa hàng trực tuyến.", 20, 310);

  // Save PDF
  pdf.save("CV_ChauGiaBao.pdf");
});

