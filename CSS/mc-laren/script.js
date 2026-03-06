function hideBtn() {
    document.querySelector(".multi-use-btn").style.display = "none"
    document.querySelector(".rbtn").style.display = "none"
    document.querySelector(".golf-btn").style.display = "none"
    document.querySelector(".corporate-btn").style.display = "none"
    document.querySelector(".automotive-btn").style.display = "none"
    document.querySelector(".career-btn").style.display = "none"
    document.querySelector(".store-btn").style.display = "none"
}

function hideVideo() {
    document.querySelector(".home").style.display = "none";
    document.querySelector(".racing-video").style.display = "none";
    document.querySelector(".automotive").style.display = "none";
    document.querySelector(".corporate").style.display = "none";
    document.querySelector(".career").style.display = "none";
    document.querySelector(".golf").style.display = "none"
    document.querySelector(".store").style.display = "none"
}
function home() {
    hideVideo();
    document.querySelector(".home").style.display = "block";

    hideBtn();
    document.querySelector(".home-btn").style.display = "block"

}

function showRacingVid() {
    hideVideo()
    document.querySelector(".racing-video").style.display = "block";

    //  btn
    hideBtn()
    document.querySelector(".rbtn").style.display = "block"
}

function showAutomotiveVid() {
    hideVideo()
    document.querySelector(".automotive").style.display = "block";

    //  btn
    hideBtn()
    document.querySelector(".automotive-btn").style.display = "block"

}

function showGolfVid() {
    hideVideo()
    document.querySelector(".golf").style.display = "block"

    //  btn 
    hideBtn()
    document.querySelector(".golf-btn").style.display = "block"
}

function showCorporateVid() {
    hideVideo()
    document.querySelector(".corporate").style.display = "block"

    // btn
    hideBtn()
    document.querySelector(".corporate-btn").style.display = "block"

}

function showCarrierVid() {
    hideVideo()
    document.querySelector(".career").style.display = "block";

    // btn
    hideBtn()
    document.querySelector(".career-btn").style.display = "block"


}

function showStoreVid() {
    hideVideo()
    document.querySelector(".store").style.display = "block";

    //btn
    hideBtn()
    document.querySelector(".store-btn").style.display = "block"
}
