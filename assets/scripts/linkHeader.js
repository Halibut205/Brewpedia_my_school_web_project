fetch("../views/templates/header.html")
    .then((response) => response.text())
    .then((data) => {
        // Chèn nội dung header vào DOM
        document.getElementById("header").innerHTML = data;

        // Thêm file CSS cho header
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../css/template/header.css";
        document.head.appendChild(link);

        // Gắn sự kiện cho popup sau khi header được tải
        const openButtonMobile = document.getElementById("open-modal-mobile");
        const openButton = document.getElementById("open-modal");
        const closeButton = document.getElementById("close-modal");
        const modal = document.getElementById("modal");

        if (openButton && closeButton && modal) {
            // Mở popup khi nhấn vào nút mở
            openButton.addEventListener("click", () => {
                modal.classList.add("open");
            });

            // Đóng popup khi nhấn vào nút đóng
            closeButton.addEventListener("click", () => {
                modal.classList.remove("open");
            });
        }

        if (openButtonMobile && closeButton && modal) {
          // Mở popup khi nhấn vào nút mở trên điện thoại
          openButtonMobile.addEventListener("click", () => {
              modal.classList.add("open");
          });

          // Đóng popup khi nhấn vào nút đóng trên điện thoại
          closeButton.addEventListener("click", () => {
              modal.classList.remove("open");
          });
      }

        // Sticky header logic
        const comprehensive = document.querySelector('.comprehensive');
        const header = document.querySelector('.header');
        const placeholder = document.querySelector('.header-placeholder');

        window.addEventListener('scroll', function () {
            const comprehensiveHeight = comprehensive.offsetHeight;
            if (window.scrollY >= comprehensiveHeight) {
                if (!header.classList.contains('fixed')) {
                    header.classList.add('fixed');
                    placeholder.style.height = header.offsetHeight + 'px';
                    placeholder.style.display = 'block';
                }
            } else {
                if (header.classList.contains('fixed')) {
                    header.classList.remove('fixed');
                    placeholder.style.display = 'none';
                }
            }
        });
    })
    .catch((error) => console.error("Lỗi load header:", error));

// Toggle menu logic
function toggleMenu() {
    const rightHeader = document.querySelector('.right-header');
    rightHeader.classList.toggle('active');
}