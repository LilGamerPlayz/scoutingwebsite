function Match() {
    let MatchInput = document.getElementById("MatchNumInput").value;
    localStorage.setItem("MatchNumber", MatchInput);
}

function TeamNumber() {
    let TeamInput = document.getElementById("TeamNumInput").value;
    localStorage.setItem("TeamNumber", TeamInput);
}

function AllianceColor() {
    let AllianceColorInput = document.getElementById("AllianceColorInput").value;
    localStorage.setItem("AllianceColor", AllianceColorInput);
}

function StartMatch() {
    let MatchInput = document.getElementById("MatchNumInput").value;
    let TeamInput = document.getElementById("TeamNumInput").value;
    let TeamColorInput = document.getElementById("AllianceColorInput").value;

    localStorage.setItem("MatchNum", MatchInput);
    localStorage.setItem("TeamNum", TeamInput);
    localStorage.setItem("TeamColor", TeamColorInput);

    location.href = "/ScoutingType/Match-Scouting/Autonomous";
}

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
        window.location.href = "..";
    }, 500); // adjust the timeout to match the duration of the fade-in animation
}