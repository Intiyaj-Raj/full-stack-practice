function loginPage() {

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let question = document.getElementById("question");
    let success = document.querySelector(".succes");
    let form = document.getElementById("lform");
    let ans = document.getElementById("ans").value;
    let denied = document.querySelector(".denied");
    let answer2 = document.getElementById("enter-answer");
    let right = document.getElementById("right");
    let link = document.getElementById("link");

    if (email !== "" && pass !== "") {

        question.style.display = "block";

        if (ans === "") {
            denied.style.display = "none";
            answer2.style.display = "block";
        }

        else if (ans === "0" || ans.toLowerCase() === "i miss you") {

            success.style.display = "block";
            form.style.display = "none";
            right.style.display = "none";
            answer2.style.display = "none";
            link.style.display = "block";

        }

        else {
            denied.style.display = "none";
            right.style.display = "block";
            answer2.style.display = "none";
        }

    }

    else {

        question.style.display = "none";
        denied.style.display = "block";

    }

}