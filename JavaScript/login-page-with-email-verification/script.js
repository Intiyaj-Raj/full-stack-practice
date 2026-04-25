let form = document.getElementById("form");

let sendBtn = document.getElementById("sendBtn");
let loginBtn = document.getElementById("loginBtn");
let emailInput = document.getElementById("user-email");
let otpInput = document.getElementById("otp");

const initEmailJS = () => {
    const publicKey = "9JIMT7L0LnqOStK5U";
    emailjs.init(publicKey);
};

initEmailJS();

let generatedOtp = "";

// SEND OTP
sendBtn.addEventListener("click", async function () {

    const email = emailInput.value;

    if (email === "") {
        alert("Enter email ❌");
        return;
    }

    generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

    try {
        await emailjs.send(
            "service_b02fh38",
            "template_ex47e8g",
            {
                to_email: email,
                otp: generatedOtp
            }
        );

        alert("OTP sent ✅");

    } catch (error) {
        alert("Failed ❌");
        console.log(error);
    }
});

// LOGIN
loginBtn.addEventListener("click", function () {

    const userOtp = otpInput.value;

    if (userOtp === "") {
        alert("Enter OTP ❌");
        return;
    }

    if (userOtp === generatedOtp) {
        alert("Login Successful ✅");
        form.reset();
    } else {
        alert("Wrong OTP ❌");
    }
});