function generateQR() {
    let imgBox = document.getElementById("imgBox")
    let qrImage = document.getElementById("qrImage")
    let userInput = document.getElementById("inputValue").value

    if (userInput.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput
        imgBox.classList.add("showImg")
    }
    else {
        alert("Please enter value to generate qr code")
    }
}