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

function Competition() {
    let Competition = document.getElementById("CompetitionInput");
    localStorage.setItem("Competition", Competition.value);
}

function SaveMatchType() {
    localStorage.setItem("ScoutingType", "Pit-Scouting");
}

function TeamNumber() {
    let TeamNumber = document.getElementById("TeamNumberInput");
    localStorage.setItem("TeamNumber", TeamNumber.value);
}

function GamePieces() {
    let GamePieces = document.getElementById("GamePiecesInput");
    localStorage.setItem("GamePieces", GamePieces.value);
}

function DriverExperience() {
    let DriverExperience = document.getElementById("DriverExperienceInput");
    localStorage.setItem("DriverExperience", DriverExperience.value);
}

function DriveTrain() {
    let DriveTrain = document.getElementById("DriveTrainInput");
    localStorage.setItem("DriveTrain", DriveTrain.value);
}

function AutoPlan() {
    let AutoPlan = document.getElementById("AutoPlanInput");
    localStorage.setItem("AutoPlan", AutoPlan.value);
}

function GamePieceLocation() {
    let GamePieceLocation = document.getElementById("GamePieceLocationInput");
    localStorage.setItem("GamePieceLocation", GamePieceLocation.value);
}

function AverageTime() {
    let AverageTime = document.getElementById("AverageTimeInput");
    localStorage.setItem("AverageTime", AverageTime.value);
}

function ScoringLocation() {
    let ScoringLocation = document.getElementById("ScoringLocationInput");
    localStorage.setItem("ScoringLocation", ScoringLocation.value);
}

function DockEngage() {
    let DockEngage = document.getElementById("DockEngageInput");
    localStorage.setItem("DockEngage", DockEngage.value);
}

function PictureRobot() {
    let PictureRobot = document.getElementById("PictureRobotInput");
    localStorage.setItem("PictureRobot", PictureRobot.value);
}

function Comments() {
    let Comments = document.getElementById("CommentsInput");
    localStorage.setItem("Comments", Comments.value);
}