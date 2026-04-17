let userInput = document.getElementById("date");
let result = document.getElementById("result");

// set max date = today
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {

    let birthDate = new Date(userInput.value);
    if (userInput.value === "") {
        alert("Please select your birth date");
        return;
    }

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    // months
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    // days
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2) + d2 - d1;
    }

    // adjust months
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, ${d3} days.`;
    result.style.display = "block"
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}