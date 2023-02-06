function Submit() {
    if (localStorage.getItem("ScoutingType") == "Pit-Scouting") {
        let data = {
            TeamNumber: document.getElementById("TeamNumberInput").value,
            GamePieces: document.getElementById("GamePiecesInput").value,
            DriverExperience: document.getElementById("DriverExperienceInput").value,
            DriveTrain: document.getElementById("DriveTrainInput").value,
            AutoPlan: document.getElementById("AutoPlanInput").value,
            GamePieceLocation: document.getElementById("GamePieceLocationInput").value,
            AverageTime: document.getElementById("AverageTimeInput").value,
            ScoringLocation: document.getElementById("ScoringLocationInput").value,
            DockEngage: document.getElementById("DockEngageInput").value,
            PictureRobot: document.getElementById("PictureRobotInput").checked,
            Comments: document.getElementById("CommentsInput").value,
        }
        console.log(data);
    } else if (localStorage.getItem("ScoutingType") == "Match-Scouting") {
        let data = {
            TeamNumber: document.getElementById("TeamNumberInput").value,
            Autonomous: document.getElementById("AutonomousInput").value,
            Teleop: document.getElementById("TeleopInput").value,
            Endgame: document.getElementById("EndgameInput").value,
            Comments: document.getElementById("CommentsInput").value,
        }
        console.log(data);
    } else {
        console.log("Error: Scouting Type not set, returning to home page");
        window.location = "/";
    }

}