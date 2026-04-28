if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "./auth.html";
}

const movies = [
    {
        title: "Apex",
        poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
    },
    {
        title: "Michael",
        poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
    },
    {
        title: "Apex",
        poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
    },
    {
        title: "Michael",
        poster: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
    }
];

let container = document.getElementById("movieContainer")

let modal = document.getElementById("ShowtimeModal")

let selectedMovieName = document.getElementById("selectedMovieName")

let dateSelector = document.getElementById("dateSelector")

let theatreList = document.getElementById("theatreList")

let selectedMovie = null;
let selectedDate = null;

const theatres = [
    {
        name: "INOX Cinemas",
        times: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
    },

    {
        name: "PVR Screens",
        times: ["09:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"]
    },
    {
        name: "INOX Cinemas",
        times: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
    },

    {
        name: "PVR Screens",
        times: ["09:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"]
    },
    {
        name: "INOX Cinemas",
        times: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
    },

    {
        name: "PVR Screens",
        times: ["09:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"]
    },
];

movies.forEach((movie) => {
    let card = document.createElement("div")
    card.className = `movie-card`;
    card.innerHTML = `<img src="${movie.poster}" alt="${movie.title}"> <h3>${movie.title}</h3> `;
    card.addEventListener("click", () => openModal(movie));
    container.appendChild(card);
});

function openModal(movie) {
    selectedMovie = movie;
    selectedMovieName.textContent = movie.title;
    modal.style.display = "block";
    renderDates();
    renderTheatres();
}

function closeModal() {
    modal.style.display = "none"
}

function renderDates() {
    let today = new Date();
    dateSelector.innerHTML = ""
    for (let i = 0; i < 5; i++) {
        const d = new Date(today)
        d.setDate(d.getDate() + i);
        let div = document.createElement("div");
        div.className = "date-item";
        div.textContent = d.toDateString().slice(4, 10)
        if (i === 0) {
            div.classList.add("selected")
            selectedDate = d.toDateString()
        }

        div.addEventListener("click", () => {
            document.querySelectorAll(".date-item").forEach(el => el.classList.remove("selected"));
            div.classList.add("selected");
            selectedDate = d.toDateString();
        });
        dateSelector.appendChild(div);
    }
}
function renderTheatres() {
    theatreList.innerHTML = "";

    theatres.forEach((theatre) => {
        const div = document.createElement("div");
        div.className = "theatre-block";
        div.innerHTML = `<h4>${theatre.name}</h4>`;

        theatre.times.forEach((time) => {
            const btn = document.createElement("button");
            btn.className = "time-btn";
            btn.textContent = time;

            btn.addEventListener("click", () => {
                localStorage.setItem("selectedMovie", JSON.stringify({
                    ...selectedMovie,
                    date: selectedDate,
                    theatre: theatre.name,
                    time: time
                }));

                window.location.href = "seats.html";
            });

            div.appendChild(btn);
        });

        theatreList.appendChild(div);
    });
}
