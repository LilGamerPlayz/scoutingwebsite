
function OnLoad() {
    localStorage.setItem("CommunityLeave", document.getElementById("CommunityLeaveInput").value);
    localStorage.setItem("CubeScoring", document.getElementById("CubeScoringInput").value);
    localStorage.setItem("ConeScoring", document.getElementById("ConeScoringInput").value);
    localStorage.setItem("BalanceOption", document.getElementById("BalanceOptionInput").value);
}

function CommunityLeave() {
    localStorage.setItem("CommunityLeave", document.getElementById("CommunityLeaveInput").value);
}

function CubeScoring() {
    localStorage.setItem("CubeScoring", document.getElementById("CubeScoringInput").value);
}

function ConeScoring() {
    localStorage.setItem("ConeScoring", document.getElementById("ConeScoringInput").value);
}

function BalanceOption() {
    localStorage.setItem("BalanceOption", document.getElementById("BalanceOptionInput").value);
}

function TeleOp() {
    localStorage.setItem("CommunityLeave", document.getElementById("CommunityLeaveInput").value);
    localStorage.setItem("CubeScoring", document.getElementById("CubeScoringInput").value);
    localStorage.setItem("ConeScoring", document.getElementById("ConeScoringInput").value);
    localStorage.setItem("BalanceOption", document.getElementById("BalanceOptionInput").value);
    localStorage.setItem("ScoutingType", "Match-Scouting");

    window.location = "/ScoutingType/Match-Scouting/Teleop-Endgame";
}