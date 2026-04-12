function handlePass() {
    let pass = document.getElementById("pass").value
    let passAlert = document.getElementById("passAlert")
    let checkIcon = document.getElementById("checkIcon")
    if (pass.length < 10) {
        passAlert.style.display = "block"
        checkIcon.style.display = "none"
    }
    else if (pass.length >= 10) {
        passAlert.style.display = "none"
        checkIcon.style.display = "block"
    }
}