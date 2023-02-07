function Submit() {
    if (localStorage.getItem("ScoutingType") == "Pit-Scouting") {
        let data = {
            MatchType: "Pit-Scouting",
            TeamNumber: document.cookie = "TeamNumber=" + TeamNumber.value,
            GamePieces: document.cookie = "GamePieces=" + GamePieces.value,
            DriverExperience: document.cookie = "DriverExperience=" + DriverExperience.value,
            DriveTrain: document.cookie = "DriveTrain=" + DriveTrain.value,
            AutoPlan: document.cookie = "AutoPlan=" + AutoPlan.value,
            GamePieceLocation: document.cookie = "GamePieceLocation=" + GamePieceLocation.value,
            AverageTime: document.cookie = "AverageTime=" + AverageTime.value,
            ScoringLocation: document.cookie = "ScoringLocation=" + ScoringLocation.value,
            DockEngage: document.cookie = "DockEngage=" + DockEngage.value,
            PictureRobot: document.cookie = "PictureRobot=" + PictureRobot.value,
            Comments: document.cookie = "Comments=" + Comments.value
        }

        fetch("/scouting", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then(res => {
            if (res.status == 200) {
                console.log("Sent Data");
            }
        });
        console.log(data);
    } else if (localStorage.getItem("ScoutingType") == "Match-Scouting") {
        let data = {
            MatchType: "Match-Scouting",
            TeamNumber: document.getElementById("TeamNumberInput").value,
            Autonomous: document.getElementById("AutonomousInput").value,
            Teleop: document.getElementById("TeleopInput").value,
            Endgame: document.getElementById("EndgameInput").value,
            Comments: document.getElementById("CommentsInput").value,
        }

        fetch("/scouting", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }).then(res => {
            if (res.status == 200) {

            }
        });
    } else {
        console.log("Error: Scouting Type not set, returning to home page");
        window.location = "/";
    }

}