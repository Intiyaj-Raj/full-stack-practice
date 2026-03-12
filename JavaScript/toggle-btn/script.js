let mode = "light";
function toggleBtn() {
    const btn = document.querySelector("#btn button");
    if (mode === "light") {
        document.body.style.backgroundColor = "#111";
        document.body.style.color = "white";
        btn.innerText = "Dark";
        mode = "dark";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.innerText = "Light";
        mode = "light";
    }
}

// Hamburger menu toggle
function menuToggle() {
    const menuBtn = document.getElementById('menu-bar-btn');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');

    // Close menu on overlay click (if backdrop added)
    const backdrop = document.querySelector('.menu-backdrop');
    if (backdrop) {
        backdrop.classList.toggle('active');
    }
}

// Close menu when clicking on nav links (mobile)
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#nav-menu li');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const navMenu = document.getElementById('nav-menu');
            const menuBtn = document.getElementById('menu-bar-btn');
            const body = document.body;
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});

// Smooth scroll for nav links
document.querySelectorAll('#nav-menu li').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.textContent.trim().toLowerCase();
        let target;
        if (href === 'about') {
            target = document.querySelector('.about-section');
        } else if (href === 'home') {
            target = document.querySelector('.hero-section');
        }
        // Add more sections as needed
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

