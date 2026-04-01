

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