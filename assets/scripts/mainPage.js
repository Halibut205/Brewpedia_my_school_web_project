var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    setTimeout(function(){
        loader.style.opacity = 0;
        loader.style.transition = "opacity 1s ease";
        setTimeout(function(){
            loader.style.display = "none";
        }, 1000);
    }, 150);
})