let guessBtn = document.getElementById("guessBtn")
let userInput = document.getElementById("userInput");
let showAttempt = document.getElementById("attempt");
let startGame = document.getElementById("newBtn2")

let randNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempt = 5;

console.log(randNum)

let previousGuess = [];

function handleGuess() {
    let inputValue = Number(userInput.value); // ✅ FIX
    let result = document.getElementById("result");

    if (attempts >= maxAttempt) {
        result.innerHTML = `Game Over 😢 Answer = ${randNum}`;
        return;
    }

    attempts++;
    let remaining = maxAttempt - attempts;
    showAttempt.innerHTML = `Chances left: ${remaining}`;

    if (inputValue === randNum) {
        result.innerHTML = "Game Win 🎉";
        result.style.background = "green"
        result.style.color = "white"
        guessBtn.style.display = "none"
        userInput.style.display = "none"
        startGame.style.display = "block"
    }
    else if (inputValue > randNum) {
        result.innerHTML = "Too high 🤔";
    }
    else {
        result.innerHTML = "Too low 🤔";
    }

    if (remaining === 0 && inputValue !== randNum) {
        result.innerHTML = `Game Over 😢 Answer = ${randNum}`;
        userInput.style.display = "none"
        guessBtn.style.display = "none"
        startGame.style.display = "block"
    }

    let prevGuess = document.getElementById("prevGuess")
    previousGuess.push(inputValue);
    prevGuess.innerHTML = "Your previous guesses: " + previousGuess.join(", ");
}

function newGame() {
    let result = document.getElementById("result");
    let prevGuess = document.getElementById("prevGuess");

    randNum = Math.floor(Math.random() * 100) + 1;
    console.log(randNum);

    attempts = 0;

    result.innerHTML = "New Game Started 🚀";

    result.style.background = "";
    result.style.color = "";

    showAttempt.innerHTML = "Total Chances: 5";

    userInput.value = "";
    guessBtn.style.display = "block"
    userInput.style.display = "block"
    startGame.style.display = "none"

    previousGuess.length = 0;
    prevGuess.innerHTML = "Your previous guesses: ";
}