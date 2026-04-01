function handleBgColor() {
    let tbtn = document.getElementById("toogleBtn")
    let chagneBgColor = document.getElementById("bgc")
    if (chagneBgColor.style.backgroundColor === "white") {
        chagneBgColor.style.backgroundColor = "black"
        chagneBgColor.style.color = "white"
    }
    else {
        chagneBgColor.style.backgroundColor = "white"
        chagneBgColor.style.color = "black"
    }
}

let containerImg = document.getElementById("main-img")

function handleImg1() {
    containerImg.src = "https://www.pixelstalk.net/wp-content/uploads/2016/07/Colorful-Nature-HD-Pictures.jpg"
    // console.log("img1 ")
}
function handleImg2() {
    containerImg.src = "https://wallpapercave.com/wp/wp2858551.jpg"
}
function handleImg3() {
    containerImg.src = "https://static.vecteezy.com/system/resources/previews/030/256/968/large_2x/beautiful-nature-wallpaper-hd-wallpaper-ai-generated-free-photo.jpg"
}
function handleImg4() {
    containerImg.src = "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"
}
