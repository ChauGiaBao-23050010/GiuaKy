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
    heading3: "Kinh Nghiệm & Mục Tiêu",
    paragraph6:
      "Trong suốt hành trình học tập và phát triển bản thân, tôi đã tham gia nhiều dự án học thuật và sự kiện lớn nhỏ, từ đó tích lũy được một kho tàng kiến thức chuyên môn phong phú. Tôi không chỉ được rèn luyện khả năng làm việc nhóm, kỹ năng giao tiếp mà còn được trải nghiệm các tình huống thực tế đòi hỏi sự linh hoạt và nhạy bén trong việc xử lý vấn đề. Những lần cộng tác với đồng đội để hoàn thành các dự án phức tạp đã giúp tôi hiểu rõ hơn về tinh thần trách nhiệm, biết cách quản lý thời gian hiệu quả, phân chia công việc hợp lý và luôn giữ vững tinh thần làm việc tích cực. Những thử thách và áp lực trong quá trình học hỏi chính là động lực để tôi hoàn thiện bản thân mỗi ngày.",
    paragraph7:
      "Nhìn về tương lai, tôi luôn khao khát trở thành một chuyên gia trong lĩnh vực <strong>Web App & Robot</strong>. Tôi muốn xây dựng những giải pháp công nghệ đột phá, mang lại giá trị thiết thực cho cộng đồng và góp phần nâng cao chất lượng cuộc sống. Sứ mệnh của tôi là phát triển các ứng dụng web thông minh, hệ thống robot tự động hóa, từ đó hỗ trợ tối ưu hóa quy trình sản xuất và giải phóng sức lao động con người trong nhiều lĩnh vực. Tôi tin rằng với kiến thức và kỹ năng chuyên môn, cùng với lòng đam mê cháy bỏng với công nghệ, tôi sẽ có đủ năng lực để biến những ý tưởng tưởng chừng như bất khả thi thành hiện thực.",
    paragraph8:
      "Tôi luôn tâm niệm rằng, con đường dẫn đến thành công không bao giờ trải đầy hoa hồng mà luôn tồn tại những thử thách cam go đòi hỏi sự kiên trì và sáng tạo. Với tinh thần cầu tiến, tôi không ngừng tìm kiếm cơ hội để học hỏi, tiếp thu những tri thức mới nhất và áp dụng chúng vào thực tiễn. Tôi luôn sẵn sàng đối mặt với mọi khó khăn, xem đó như những bài học quý báu giúp bản thân trưởng thành hơn. Mục tiêu của tôi là trở thành một người có ích cho xã hội, góp phần thúc đẩy sự phát triển của ngành công nghệ tại Việt Nam và xa hơn nữa trên trường quốc tế. Để làm được điều đó, tôi cam kết sẽ cống hiến hết mình và không ngừng phấn đấu để hoàn thiện bản thân mỗi ngày.",
    back: "⬅ Quay lại",
  },
  en: {
    heading3: "Experience & Goals",
    paragraph6:
      "Throughout my journey of learning and self-development, I have engaged in various academic projects and events, accumulating a wealth of specialized knowledge. These experiences have not only sharpened my teamwork, communication, and problem-solving skills but also taught me to adapt and respond flexibly to real-world challenges. Working closely with teammates on complex projects has deepened my understanding of responsibility, time management, task delegation, and maintaining a positive attitude under pressure. The challenges and obstacles I faced along the way were invaluable lessons that motivated me to continuously improve myself.",
    paragraph7:
      "Looking ahead, I am deeply passionate about becoming an expert in the field of <strong>Web Apps & Robots</strong>. I aspire to create groundbreaking technological solutions that bring practical value to the community and contribute to enhancing the quality of life. My mission is to develop intelligent web applications and automated robotic systems that help optimize production processes and free human labor across multiple industries. With a burning passion for technology and a commitment to excellence, I am determined to turn ambitious ideas into reality, even when they seem impossible.",
    paragraph8:
      "I firmly believe that the path to success is never smooth, often filled with challenges that demand perseverance and creativity. With a growth mindset, I am always eager to learn, absorb new knowledge, and apply it effectively. I see every difficulty as a valuable lesson that shapes my character and skills. My ultimate goal is to become a valuable member of society, driving the development of the tech industry both in Vietnam and beyond. To achieve this, I am committed to dedicating myself fully and striving to improve every single day.",
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
