let randNum = Math.floor(Math.random() * 9000) + 1000
function handleOtp() {
    let showOtp = document.getElementById("showOtp")
    showOtp.innerHTML = randNum
}

function handleLogin() {
    let otp = document.getElementById("otp").value
    let userEmail = document.getElementById("userEmail").value
    let pass = document.getElementById("pass").value

    if (userEmail === "") {
        alert("Enter Your email")
    }
    else if (pass === "") {
        alert("Enter Your Password")
    }
    else if (otp === "") {
        alert("Enter OTP")
    }
    else if (Number(otp) === randNum) {
        alert("Login Successful")
    }
    else {
        alert("Wrong OTP")
    }
}