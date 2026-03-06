function home() {
    document.querySelector(".home").style.display = "block";
    document.querySelector(".racing-video").style.display = "none";
    document.querySelector(".automotive").style.display = "none";
    document.querySelector(".corporate").style.display = "none";
    document.querySelector(".career").style.display = "none";
    document.querySelector(".golf").style.display = "none"
    document.querySelector(".store").style.display = "none"

    document.querySelector(".rbtn").style.display = "none"

}

function showRacingVid() {
    document.querySelector(".home-video").style.display = "none";
    document.querySelector(".automotive").style.display = "none";
    document.querySelector(".corporate").style.display = "none";
    document.querySelector(".career").style.display = "none";
    document.querySelector(".golf").style.display = "none";
    document.querySelector(".store").style.display = "none"
    document.querySelector(".racing-video").style.display = "block";

    // show btn
    document.querySelector(".rbtn").style.display = "block"
}

function showAutomotiveVid() {
    document.querySelector(".home-video").style.display = "none";
    document.querySelector(".racing-video").style.display = "none";
    document.querySelector(".corporate").style.display = "none";
    document.querySelector(".career").style.display = "none";
    document.querySelector(".golf").style.display = "none";
    document.querySelector(".store").style.display = "none"
    document.querySelector(".automotive").style.display = "block";
}

function showGolfVid() {
    document.querySelector(".home-video").style.display = "none";
    document.querySelector(".racing-video").style.display = "none";
    document.querySelector(".corporate").style.display = "none";
    document.querySelector(".career").style.display = "none";
    document.querySelector(".automotive").style.display = "none";
    document.querySelector(".store").style.display = "none"
    document.querySelector(".golf").style.display = "block"

}

function showCorporateVid() {
    document.querySelector(".home-video").style.display = "none";
    document.querySelector(".racing-video").style.display = "none";
    document.querySelector(".career").style.display = "none";
    document.querySelector(".automotive").style.display = "none";
    document.querySelector(".golf").style.display = "none"
    document.querySelector(".store").style.display = "none"
    document.querySelector(".corporate").style.display = "block"

}

function showCarrierVid() {
    document.querySelector(".home-video").style.display = "none";
    document.querySelector(".racing-video").style.display = "none";
    document.querySelector(".automotive").style.display = "none";
    document.querySelector(".golf").style.display = "none";
    document.querySelector(".corporate").style.display = "none";
    document.querySelector(".store").style.display = "none"
    document.querySelector(".career").style.display = "block";

}

function showStoreVid() {
    document.querySelector(".home-video").style.display = "none";
    document.querySelector(".racing-video").style.display = "none";
    document.querySelector(".automotive").style.display = "none";
    document.querySelector(".golf").style.display = "none";
    document.querySelector(".corporate").style.display = "none";
    document.querySelector(".career").style.display = "none";
    document.querySelector(".store").style.display = "block";

}
