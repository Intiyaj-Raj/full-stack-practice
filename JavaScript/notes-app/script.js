let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");


// delete all notes
function clearNotes() {
    localStorage.removeItem("notes");
    notesContainer.innerHTML = "";
}

// show saved notes
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// save notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// create note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("div");
    let text = document.createElement("p");
    let delBtn = document.createElement("i");

    inputBox.className = "input-box";

    text.setAttribute("contenteditable", "true");

    delBtn.className = "fa-regular fa-trash-can";

    inputBox.appendChild(text);
    inputBox.appendChild(delBtn);

    notesContainer.appendChild(inputBox);

    updateStorage();
});

// delete note
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "I") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// save on typing
document.addEventListener("keyup", () => {
    updateStorage();
});