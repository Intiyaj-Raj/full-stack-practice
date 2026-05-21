const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let a = document.querySelector("#elem1")
let abc = a.getAttribute("data-image")
console.log(abc)