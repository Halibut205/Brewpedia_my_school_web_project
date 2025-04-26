fetch("../views/templates/header.html") // ?? thêm s làm gì ?
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../css/template/header.css";
        document.head.appendChild(link);
        const comprehensive = document.querySelector('.comprehensive');
        const header = document.querySelector('.header');
        const placeholder = document.querySelector('.header-placeholder');
        
        window.addEventListener('scroll', function() {
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
    
    


    function toggleMenu() {
        const rightHeader = document.querySelector('.right-header');
        rightHeader.classList.toggle('active');
    }
    