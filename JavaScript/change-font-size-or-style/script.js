
function showText() {
    let uName = document.getElementById("uName").value
    let uMob = document.getElementById("uMob").value
    let uEmail = document.getElementById("uEmail").value


    let userName = document.getElementById("userName")
    let userMob = document.getElementById("userMob")
    let userEmail = document.getElementById("userEmail")

    userName.innerHTML = uName
    userMob.innerHTML = uMob
    userEmail.innerHTML = uEmail

    userMob.href = `tel:${uMob}`
    userEmail.href = `mailto:${uEmail}`;

    let rSide = document.getElementById("rSide")

    rSide.style.display = "block"
}

function bold() {
    let userName = document.getElementById("userName")
    let userMob = document.getElementById("userMob")
    let userEmail = document.getElementById("userEmail")


    userName.style.fontWeight = "bold"
    userMob.style.fontWeight = "bold"
    userEmail.style.fontWeight = "bold"
}

function italic() {
    let userName = document.getElementById("userName")
    let userMob = document.getElementById("userMob")
    let userEmail = document.getElementById("userEmail")


    userName.style.fontStyle = "italic"
    userMob.style.fontStyle = "italic"
    userEmail.style.fontStyle = "italic"
}

function undo() {
    let userName = document.getElementById("userName")
    let userMob = document.getElementById("userMob")
    let userEmail = document.getElementById("userEmail")
    let textSize = document.getElementById("textSize").value;

    userName.style.fontWeight = ""
    userMob.style.fontWeight = ""
    userEmail.style.fontWeight = ""

    userName.style.fontStyle = ""
    userMob.style.fontStyle = ""
    userEmail.style.fontStyle = ""

    userName.style.fontSize = "";
    userMob.style.fontSize = "";
    userEmail.style.fontSize = "";
}

function handleChangeFontSize() {
    let textSize = document.getElementById("textSize").value;

    let userName = document.getElementById("userName");
    let userMob = document.getElementById("userMob");
    let userEmail = document.getElementById("userEmail");

    userName.style.fontSize = textSize + "px";
    userMob.style.fontSize = textSize + "px";
    userEmail.style.fontSize = textSize + "px";
}