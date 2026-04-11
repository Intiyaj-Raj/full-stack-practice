
let randNum = Math.floor(Math.random() * 9000) + 1000
function handleOtp() {
    let showOtp = document.getElementById("showOtp")


    showOtp.innerHTML = randNum
}

function handleLogin() {
    let otp = Number(document.getElementById("otp").value)

    if (otp === randNum) {
        alert("login success")
    }
    else {
        alert("enter correct otp")
    }
}