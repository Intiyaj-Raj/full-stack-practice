const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let a = document.querySelector("#elem1")
let abc = a.getAttribute("data-image")
// console.log(abc)

function page4Animation() {
    var fixed = document.querySelector("#fixed-image")
    let elemC = document.querySelector("#elem-container")

    elemC.addEventListener("mouseenter", function () {
        // alert("heyyyyyy")
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        // alert("heyyyyyy")
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute('data-image')
            fixed.style.backgroundImage = `url(${image})`

        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiperAnimation()
page4Animation()