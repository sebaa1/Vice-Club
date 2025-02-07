document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menuContent = document.querySelector(".menu-content");
    hamburger.addEventListener("click", function (event) {
        event.stopPropagation();
        menuContent.classList.toggle("show");
    });
    document.addEventListener("click", function (event) {
        if (!menuContent.contains(event.target) && !hamburger.contains(event.target)) {
            menuContent.classList.remove("show");
        }
    });
});
