const menuBtn = document.querySelector(".menu-bar");
const nav = document.querySelector("nav");

// toggle menu (open/close)
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// click on menu link → close menu
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// click outside → close menu
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove("active");
    }
});