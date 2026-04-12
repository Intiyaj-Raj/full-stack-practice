function formValidation() {

    let userName = document.getElementById("uEmail").value;
    let userPass = document.getElementById("uPass").value;

    if (userName === "") {
        alert("Enter username");
        alert("Use intiyaj username to log in.")
    }
    else if (userPass === "") {
        alert("Enter password");
        alert("Use inti9117 password to log in.")
    }
    else if (userName === "intiyaj" && userPass === "inti9117") {
        alert("Login Successful 😍");
    }
    else {
        alert("Invalid username or password");
    }
}