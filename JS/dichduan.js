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
    title: "Dự Án - CHÂU GIA BẢO",
    heading1: "Dự Án",
    paragraph1:
      "Trong quá trình học tập và làm việc, tôi đã tham gia nhiều dự án về <strong>Web App</strong> và <strong>Tự Động Hóa</strong>, giúp tôi phát triển kỹ năng và kinh nghiệm thực tế. Các dự án này không chỉ thử thách tôi về mặt kỹ thuật mà còn phát triển khả năng sáng tạo, giải quyết vấn đề và làm việc nhóm, giúp tôi trưởng thành trong nghề nghiệp.",
    heading2: "Hệ Thống Quản Lý Sự Kiện",
    paragraph2:
      "Đây là một hệ thống quản lý thông tin sự kiện, được thiết kế để hỗ trợ việc đăng ký tham gia và theo dõi tiến độ tổ chức sự kiện một cách hiệu quả. Hệ thống giúp tự động hóa các quy trình như đăng ký, xác nhận tham gia, và gửi thông báo nhắc nhở, đồng thời cung cấp báo cáo chi tiết về sự kiện. Tôi đã sử dụng các công nghệ như <strong>PHP, MySQL, JavaScript</strong> để xây dựng hệ thống này.",
    heading3: "Ứng Dụng Web App Tự Động Hóa",
    paragraph3:
      "Dự án này tập trung vào việc phát triển một ứng dụng web sử dụng công nghệ AI để tự động hóa các quy trình công việc trong môi trường doanh nghiệp. Ứng dụng giúp giảm thiểu công sức thủ công, tối ưu hóa hiệu suất và tiết kiệm thời gian cho người dùng. Tôi đã tích hợp các thuật toán học máy để cải thiện khả năng tự động hóa và phân tích dữ liệu. Các công nghệ chính được sử dụng bao gồm <strong>React, Node.js, Python</strong> và <strong>TensorFlow</strong>.",
    heading4: "Website Cá Nhân",
    paragraph4:
      "Đây là dự án cá nhân nơi tôi tạo ra một trang web để giới thiệu về bản thân, chia sẻ các dự án tôi đã thực hiện và các kinh nghiệm trong lĩnh vực công nghệ. Mục tiêu của dự án là xây dựng một nền tảng trực tuyến giúp tôi kết nối với cộng đồng và chia sẻ kiến thức. Tôi đã sử dụng các công nghệ như <strong>HTML, CSS, JavaScript</strong> và <strong>WordPress</strong> để phát triển website này.",
    back: "⬅ Quay lại",
  },
  en: {
    title: "Projects - CHAU GIA BAO",
    heading1: "Projects",
    paragraph1:
      "During my studies and work, I have participated in many projects related to <strong>Web Apps</strong> and <strong>Automation</strong>, helping me develop skills and gain real-world experience. These projects not only challenged me technically but also helped me enhance my creativity, problem-solving, and teamwork skills, making me grow in my profession.",
    heading2: "Event Management System",
    paragraph2:
      "This system is designed to manage event information, supporting registration and tracking the event organization process efficiently. The system automates processes such as registration, confirmation of participation, and sending reminder notifications, while providing detailed event reports. I used technologies such as <strong>PHP, MySQL, JavaScript</strong> to build this system.",
    heading3: "Automated Web App",
    paragraph3:
      "This project focuses on developing a web application that uses AI technology to automate workflows in business environments. The application reduces manual labor, optimizes performance, and saves time for users. I integrated machine learning algorithms to improve automation and data analysis capabilities. The main technologies used include <strong>React, Node.js, Python</strong>, and <strong>TensorFlow</strong>.",
    heading4: "Personal Website",
    paragraph4:
      "This is a personal project where I created a website to introduce myself, share the projects I have worked on, and discuss my experiences in the tech field. The goal of this project is to build an online platform to connect with the community and share knowledge. I used technologies like <strong>HTML, CSS, JavaScript</strong>, and <strong>WordPress</strong> to develop this website.",
    back: "⬅ Back",
  },
};

function changeLanguage(lang) {
  const texts = translations[lang];
  Object.keys(texts).forEach((id) => {
    if (document.getElementById(id)) {
      document.getElementById(id).innerHTML = texts[id];
    }
  });
  document.title = texts.title;
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
