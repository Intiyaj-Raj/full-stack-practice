
function showBox(id) {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(b => b.style.display = "none");
    document.getElementById(id).style.display = "block";
}

// Even Odd
function evenOdd() {
    let n = Number(document.getElementById("n1").value);
    document.getElementById("r1").innerText =
        (n % 2 === 0) ? "Even Number" : "Odd Number";
}

// Positive Negative
function pn() {
    let n = Number(document.getElementById("n2").value);

    if (n > 0) document.getElementById("r2").innerText = "Positive";
    else if (n < 0) document.getElementById("r2").innerText = "Negative";
    else document.getElementById("r2").innerText = "Zero";
}

// Table
function table() {
    let n = Number(document.getElementById("n3").value);
    let out = "";

    for (let i = 1; i <= 10; i++) {
        out += `${n} x ${i} = ${n * i}<br>`;
    }

    document.getElementById("r3").innerHTML = out;
}

// Prime
function prime() {
    let n = Number(document.getElementById("n4").value);
    let isPrime = true;

    if (n <= 1) isPrime = false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById("r4").innerText =
        isPrime ? "Prime Number" : "Not Prime";
}

// Vote
function vote() {
    let age = Number(document.getElementById("n5").value);
    document.getElementById("r5").innerText =
        (age >= 18) ? "Eligible" : "Not Eligible";
}
