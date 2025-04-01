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
    heading1: "Giới Thiệu Bản Thân",
    paragraph1:
      "Xin chào! Tôi là <strong>Châu Gia Bảo</strong>, sinh ngày <strong>01/01/2005</strong>. Tôi đến từ <strong>Bình Dương</strong> và hiện đang là sinh viên năm 2 tại <strong>Trường Đại học Bình Dương</strong>. Với niềm đam mê cháy bỏng trong lĩnh vực công nghệ, tôi luôn khao khát khám phá những điều mới mẻ và thử thách bản thân để vươn tới những đỉnh cao mới.",
    paragraph2:
      "Trong quá trình học tập, tôi vinh dự được đảm nhận vai trò <strong>Ủy viên Ban Chấp Hành Đoàn Trường</strong>, tích cực tham gia vào các hoạt động xã hội, sự kiện trường học và các chương trình từ thiện. Những trải nghiệm này không chỉ giúp tôi rèn luyện kỹ năng lãnh đạo và quản lý thời gian mà còn tôi luyện tinh thần trách nhiệm và lòng nhiệt huyết.",
    paragraph3:
      "Là một <strong>thành viên năng động</strong> của các câu lạc bộ chuyên môn như <strong>CLB Robot</strong>, <strong>CLB Tự Động Hóa</strong> và <strong>CLB Web App</strong>, tôi luôn phấn đấu học hỏi và nâng cao kỹ năng của mình. Những dự án công nghệ đầy sáng tạo cùng các bạn đồng hành đã mở ra cho tôi một thế giới mới mẻ, đầy cơ hội và thử thách.",
    heading2: "Định Hướng & Đam Mê",
    paragraph4:
      "Với tư duy sáng tạo và khát vọng chinh phục công nghệ, tôi luôn mong muốn trở thành một <strong>lập trình viên hàng đầu</strong>, tiên phong trong lĩnh vực <strong>Web App và Robot</strong>. Tôi tin rằng công nghệ chính là chìa khóa mở ra tương lai, giúp con người vượt qua giới hạn và kiến tạo thế giới số hiện đại.",
    paragraph5:
      "Tôi khao khát phát triển các sản phẩm công nghệ đột phá, từ hệ thống tự động hóa đến ứng dụng thông minh, nhằm nâng cao chất lượng cuộc sống và tạo nên những giá trị bền vững. Tôi cam kết sẽ không ngừng học hỏi, đổi mới và hoàn thiện bản thân để hiện thực hóa những khát vọng của mình.",
    back: "⬅ Quay lại",
  },
  en: {
    title: "Introduction - CHAU GIA BAO",
    heading1: "About Me",
    paragraph1:
      "Hello! I'm <strong>Chau Gia Bao</strong>, born on <strong>January 1, 2005</strong>. I am from <strong>Binh Duong</strong> and currently a sophomore at <strong>Binh Duong University</strong>. With an unquenchable passion for technology, I am constantly driven to explore new horizons and challenge myself to reach new heights.",
    paragraph2:
      "Throughout my studies, I have had the honor of serving as a <strong>Member of the School Youth Union Executive Committee</strong>, actively participating in social activities, school events, and charitable programs. These experiences have not only sharpened my leadership and time management skills but also instilled in me a sense of responsibility and dedication.",
    paragraph3:
      "As an <strong>enthusiastic member</strong> of professional clubs such as the <strong>Robot Club</strong>, <strong>Automation Club</strong>, and <strong>Web App Club</strong>, I constantly strive to learn and enhance my skills. Working on innovative tech projects alongside talented peers has opened up a world of opportunities and challenges, fueling my desire to make an impact.",
    heading2: "Orientation & Passion",
    paragraph4:
      "With a creative mindset and a desire to conquer technology, I aspire to become a <strong>leading developer</strong>, pioneering in the field of <strong>Web Apps and Robotics</strong>. I believe technology is the key to unlocking the future, enabling us to overcome limitations and build a modern digital world.",
    paragraph5:
      "My goal is to develop groundbreaking tech solutions, from automation systems to intelligent applications, enhancing the quality of life and creating sustainable value. I am committed to lifelong learning, innovation, and self-improvement to turn my aspirations into reality.",
    back: "⬅ Back",
  },
};

function changeLanguage(lang) {
  if (!translations[lang]) {
    console.error(`❌ Ngôn ngữ "${lang}" không tồn tại!`);
    return;
  }

  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    } else {
      console.warn(`⚠ Không tìm thấy bản dịch cho key: "${key}"`);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "vi";
  changeLanguage(savedLang);

  document
    .getElementById("english")
    .addEventListener("click", () => changeLanguage("en"));
  document
    .getElementById("vietnamese")
    .addEventListener("click", () => changeLanguage("vi"));
});
