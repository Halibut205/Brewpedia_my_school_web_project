function scrollToBanner() {
    const banner = document.querySelector(".banner");
    if (banner) {
        banner.scrollIntoView({
            behavior: "auto",
            block: "start"
        });
    } else {
        console.error("Không tìm thấy phần tử .banner trong DOM.");
    }
}

window.addEventListener("DOMContentLoaded", scrollToBanner);