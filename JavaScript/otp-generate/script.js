
function handleBtn() {
    let showOtp = document.getElementById("showOtp")

    let otp = Math.floor(Math.random() * 9000) + 1000;

    showOtp.innerHTML = otp
}