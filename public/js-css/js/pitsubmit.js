function Unblacked() {
    let overlay = document.querySelector(".overlay");
    overlay.classList.add("fade-out");
    overlay.addEventListener("animationend", () => {
        overlay.remove();
    });
}

function Blacked() {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
    overlay.classList.add("fade-in");
    setTimeout(() => {
        window.location.href = "/";
    }, 500); // adjust the timeout to match the duration of the fade-in animation
}

function BlackedMatchScouting() {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
    overlay.classList.add("fade-in");
    setTimeout(() => {
        location.href = "/ScoutingType/Match-Scouting/";
    }, 500); // adjust the timeout to match the duration of the fade-in animation
}

function BlackedPitScouting() {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
    overlay.classList.add("fade-in");
    setTimeout(() => {
        localStorage.setItem("ScoutingType", "Pit");
        location.href = "/ScoutingType/Pit-Scouting/";
    }, 500); // adjust the timeout to match the duration of the fade-in animation
}