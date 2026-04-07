let randNum = Math.floor(Math.random() * 100 + 1);
let count = 0;
let resetBtn = document.getElementById("resetBtn")
let result = document.getElementById("result");

function handleGuess() {
    let userInput = Number(document.getElementById("userInput").value);

    count++;


    if (userInput > randNum) {
        result.innerHTML = `${userInput} is too high.`;
        result.style.color = "red";
    }
    else if (userInput < randNum) {
        result.innerHTML = `${userInput} is too low.`;
        result.style.color = "red";
    }
    else {
        result.innerHTML = `Correct 🎉🎉`;
        result.style.color = "green";
        resetBtn.style.display = "block"
    }

    if (count === 5) {
        result.innerText = "Game Over! Number was " + randNum;
        resetBtn.style.display = "block"
    }
}

function resetGame() {
    count = 0;
    randNum = Math.floor(Math.random() * 100 + 1);
    document.getElementById("userInput").value = "";
    result.innerText = ""
    resetBtn.style.display = "none";
}