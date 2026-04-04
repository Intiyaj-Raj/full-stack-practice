function run() {
    let code = document.getElementById("code").value
    let resultBox = document.getElementById("result")
    resultBox.innerHTML = code
    let codeBox = document.getElementById("code-box")
    codeBox.style.display = "none"

    // output box
    let resultBox2 = document.getElementById("result-box")
    resultBox2.style.display = "block"
    resultBox.setAttribute("class", "animate__animated animate__slideInRight")

    let runBtn = document.getElementById("run-btn")
    runBtn.style.display = "none"

    let returnBtn = document.getElementById("return-btn")
    returnBtn.style.display = "block"
}

function handleBack() {
    let resultBox2 = document.getElementById("result-box")
    resultBox2.style.display = "none"

    let codeBox = document.getElementById("code-box")
    codeBox.style.display = "block"
    codeBox.setAttribute("class", "animate__animated animate__slideInLeft")

    let returnBtn = document.getElementById("return-btn")
    returnBtn.style.display = "none"

    let runBtn = document.getElementById("run-btn")
    runBtn.style.display = "block"
}

function handleToggle() {
    let bgc = document.querySelector("body")
    let toggleBtn = document.getElementById("toggle")
    let textAreaBg = document.querySelector("textarea")
    if (bgc.style.backgroundColor == "white") {
        bgc.style.backgroundColor = "black"
        bgc.style.color = "white"
        textAreaBg.style.backgroundColor = "black"
        textAreaBg.style.color = "white"
        toggleBtn.innerText = "Light"
        toggleBtn.style.backgroundColor = "white"
        toggleBtn.style.color = "black"
    }
    else {
        bgc.style.backgroundColor = "white"
        bgc.style.color = "black"
        textAreaBg.style.backgroundColor = "white"
        textAreaBg.style.color = "black"
        toggleBtn.innerText = "Dark"
        toggleBtn.style.backgroundColor = "black"
        toggleBtn.style.color = "white"
    }
}