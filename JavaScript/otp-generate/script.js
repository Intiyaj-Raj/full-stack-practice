
function handleBtn() {
    let showOtp = document.getElementById("showOtp")

    let otp = Math.floor(Math.random() * 9000) + 1000;

    showOtp.innerHTML = otp
}

function show6DigitOtp() {
    let shotOtp = document.getElementById("show6DigitOtp")

    let randomNum = Math.floor(Math.random() * 900000) + 100000;
    shotOtp.innerHTML = randomNum;
}
function show8DigitOtp() {
    let otp = document.getElementById("show8DigitOtp")

    let randomNum = Math.floor(Math.random() * 90000000) + 10000000;
    otp.innerHTML = randomNum
}

