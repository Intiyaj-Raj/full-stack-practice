const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let a = document.querySelector("#elem1");
let abc = a.getAttribute("data-image");
// console.log(abc)

function page4Animation() {
  var fixed = document.querySelector("#fixed-image");
  let elemC = document.querySelector("#elem-container");

  elemC.addEventListener("mouseenter", function () {
    // alert("heyyyyyy")
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    // alert("heyyyyyy")
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

// page3 image
let p3Img = document.getElementById("page-3-img");
let desc = document.getElementById("desc");
let project = document.getElementById("project");
let execution = document.getElementById("execution");
let design = document.getElementById("design");
function projectFunc() {
  p3Img.setAttribute("src", "./images/page4-2.webp");
  project.style.color = "white";
  design.style.color = "#504A45";
  execution.style.color = "#504A45";
  desc.innerHTML =
    "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
}
function executionFunc() {
  p3Img.setAttribute("src", "./images/page4-3.webp");
  execution.style.color = "white";
  design.style.color = "#504A45";
  project.style.color = "#504A45";
  desc.innerHTML =
    "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
}

function designFunc() {
  p3Img.setAttribute("src", "./images/page4-1.webp");
  design.style.color = "white";
  execution.style.color = "#504A45";
  project.style.color = "#504A45";
  desc.innerHTML =
    "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
}

function menuAnimation() {
  let menu = document.querySelector("nav h3");
  let full = document.querySelector("#full-scr");
  let navImg = document.querySelector("nav img");
  let flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navImg.style.opacity = 1;
      flag = 0;
    }
  });
}

function loaderAnimation() {
  let loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

swiperAnimation();
page4Animation();
menuAnimation();
loaderAnimation();
