function handlePass() {
    let pass = document.getElementById("pass").value
    let passAlert = document.getElementById("passAlert")
    let checkIcon = document.getElementById("checkIcon")
    let spinner = document.getElementById("spinner")
    if (pass.length < 10) {
        passAlert.style.display = "none"
        checkIcon.style.display = "none"
        spinner.style.display = "block"
    }
    else if (pass.length >= 10) {
        passAlert.style.display = "none"
        checkIcon.style.display = "block"
        spinner.style.display = "none"
    }
}

function handleInput() {
    let passAlert = document.getElementById("passAlert")
    passAlert.style.display = "block"
}