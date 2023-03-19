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