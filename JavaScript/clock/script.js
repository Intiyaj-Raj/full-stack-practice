
function updateClock() {
    let now = new Date();

    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let hDeg = (hrs % 12) * 30 + min * 0.5;
    let mDeg = min * 6;
    let sDeg = sec * 6;

    document.getElementById("hour").style.transform =
        "translateX(-50%) rotate(" + hDeg + "deg)";
    document.getElementById("minute").style.transform =
        "translateX(-50%) rotate(" + mDeg + "deg)";
    document.getElementById("second").style.transform =
        "translateX(-50%) rotate(" + sDeg + "deg)";

    // Digital
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("digital").innerText =
        hrs + ":" + min + ":" + sec;
}

setInterval(updateClock, 1000);
updateClock();
