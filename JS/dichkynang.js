function toggleSection(id) {
  var section = document.getElementById(id);

  // Ẩn tất cả các phần chi tiết khác
  document.querySelectorAll(".detail").forEach(function (detail) {
    if (detail.id !== id) {
      detail.style.display = "none";
      detail.classList.remove("show"); // Ẩn hiệu ứng chữ
    }
  });

  // Hiển thị hoặc ẩn phần được nhấp
  if (section.style.display === "block") {
    section.style.display = "none";
    section.classList.remove("show"); // Ẩn hiệu ứng chữ khi ẩn
  } else {
    section.style.display = "block";
    setTimeout(function () {
      section.classList.add("show"); // Thêm hiệu ứng chữ khi hiển thị
    }, 10); // Đảm bảo hiệu ứng chỉ chạy khi phần tử đã được hiển thị
  }
}

// Chuyển chế độ sáng/tối
document.getElementById("toggle-theme").addEventListener("click", function () {
  const container = document.querySelector(".container-page");

  if (container) {
    document.body.classList.toggle("light-mode"); // Chỉ thay đổi màu chữ
  }

  // Cập nhật icon và text cho chế độ sáng/tối
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");

  if (document.body.classList.contains("light-mode")) {
    themeIcon.src = "Hinh/mattroi.jpg"; // Icon cho chế độ sáng
    themeText.textContent = "Chế Độ Sáng";
  } else {
    themeIcon.src = "Hinh/mattrang.jpg"; // Icon cho chế độ tối
    themeText.textContent = "Chế Độ Tối";
  }

  // Lưu trạng thái vào localStorage
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light-mode") ? "light" : "dark"
  );
});

const translations = {
  vi: {
    title: "Giới Thiệu - CHÂU GIA BẢO",
    heading1: "Kỹ Năng",
    paragraph1:
      "Tôi đã tích lũy được nhiều kỹ năng quan trọng trong quá trình học tập và làm việc. Những kỹ năng này không chỉ giúp tôi hoàn thành tốt công việc mà còn giúp tôi phát triển toàn diện bản thân, từ khả năng tư duy logic đến sáng tạo trong giải quyết vấn đề.",
    heading2: "Kỹ Năng Lập Trình",
    paragraph2:
      "Với kinh nghiệm làm việc với các ngôn ngữ như <strong>HTML, CSS, JavaScript, C#</strong>, tôi không chỉ tạo ra những sản phẩm web đẹp mắt mà còn tối ưu hóa hiệu suất và đảm bảo tính bảo mật cho ứng dụng. Tôi cũng có khả năng phát triển <strong>Web App</strong> và các ứng dụng liên quan đến <strong>AI & IoT</strong>, với mục tiêu tạo ra những giải pháp sáng tạo và ứng dụng thực tế cho xã hội.",
    heading3: "Kỹ Năng Làm Việc Nhóm",
    paragraph3:
      "Trong quá trình tham gia CLB và các dự án nhóm, tôi đã rèn luyện được khả năng giao tiếp, hợp tác và làm việc hiệu quả trong đội ngũ. Tôi luôn coi trọng sự chia sẻ kiến thức, tạo động lực và hỗ trợ các thành viên trong nhóm để cùng nhau đạt được mục tiêu chung.",
    heading4: "Kỹ Năng Quản Lý Thời Gian",
    paragraph4:
      "Tôi luôn cố gắng phân bổ thời gian hợp lý giữa học tập, công việc và hoạt động ngoại khóa để đạt hiệu suất cao nhất. Để đạt được điều này, tôi đã áp dụng nhiều phương pháp quản lý thời gian như Pomodoro, lên kế hoạch chi tiết cho từng nhiệm vụ và ưu tiên những việc quan trọng nhất.",
    back: "⬅ Quay lại",
  },
  en: {
    title: "Introduction - CHAU GIA BAO",
    heading1: "Skills",
    paragraph1:
      "I have accumulated many important skills throughout my studies and work. These skills not only help me complete tasks effectively but also contribute to my overall personal development, from logical thinking to creativity in problem-solving.",
    heading2: "Programming Skills",
    paragraph2:
      "With experience working with languages such as <strong>HTML, CSS, JavaScript, C#</strong>, I am able to create visually appealing web products while optimizing performance and ensuring security. I am also capable of developing <strong>Web Apps</strong> and applications related to <strong>AI & IoT</strong>, aiming to create innovative solutions and real-world applications for society.",
    heading3: "Teamwork Skills",
    paragraph3:
      "During my time participating in clubs and group projects, I have honed my communication, collaboration, and teamwork skills. I place great importance on sharing knowledge, motivating, and supporting team members to achieve common goals together.",
    heading4: "Time Management Skills",
    paragraph4:
      "I always strive to allocate my time efficiently between studying, work, and extracurricular activities to achieve the highest productivity. To achieve this, I have applied various time management methods such as Pomodoro, detailed task planning, and prioritizing the most important tasks.",
    back: "⬅ Back",
  },
};

function changeLanguage(lang) {
  const texts = translations[lang];
  if (!texts) return;

  Object.keys(texts).forEach((id) => {
    const element = document.querySelector(`[data-i18n="${id}"]`);
    if (element) {
      element.innerHTML = texts[id];
    }
  });

  localStorage.setItem("lang", lang);
}

document
  .getElementById("english")
  .addEventListener("click", () => changeLanguage("en"));
document
  .getElementById("vietnamese")
  .addEventListener("click", () => changeLanguage("vi"));

const savedLang = localStorage.getItem("lang") || "vi";
changeLanguage(savedLang);
