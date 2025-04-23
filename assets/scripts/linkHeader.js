fetch("../views/templates/header.html") // ?? thêm s làm gì ?
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../css/template/header.css";
        document.head.appendChild(link);
    })
    .catch((error) => console.error("Lỗi load header:", error));
    
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 53) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    function toggleMenu() {
        const rightHeader = document.querySelector('.right-header');
        rightHeader.classList.toggle('active');
    }
    