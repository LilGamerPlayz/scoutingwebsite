var data = [];
let MatchType = "";

async function Submit() {
    if (document.getElementById("Title") == "Pit Scouting | Robotics Scouting Site") {
        MatchType = "Pit";
    } else if (document.getElementById("Title") == "Match - Tele-Op/Endgame | Robotics Scouting Site") {
        MatchType = "Match";
    } else {
        MatchType = "Unknown";
    }

    let confirm = window.confirm("Are you sure you want to submit? You cannot edit your responses after submission.");


    if (confirm == true) {
        let TeamNumber = document.getElementById("TeamNumberInput");
        let GamePieces = document.getElementById("GamePiecesInput");
        let DriverExperience = document.getElementById("DriverExperienceInput");
        let DriveTrain = document.getElementById("DriveTrainInput");
        let AutoPlan = document.getElementById("AutoPlanInput");
        let GamePieceLocation = document.getElementById("GamePieceLocationInput");
        let AverageTime = document.getElementById("AverageTimeInput");
        let ScoringLocation = document.getElementById("ScoringLocationInput");
        let DockEngage = document.getElementById("DockEngageInput");
        let PictureRobot = document.getElementById("PictureRobotInput");
        let Comments = document.getElementById("CommentsInput");

        document.cookie = "TeamNumber=" + TeamNumber.value;
        document.cookie = "GamePieces=" + GamePieces.value;
        document.cookie = "DriverExperience=" + DriverExperience.value;
        document.cookie = "DriveTrain=" + DriveTrain.value;
        document.cookie = "AutoPlan=" + AutoPlan.value;
        document.cookie = "GamePieceLocation=" + GamePieceLocation.value;
        document.cookie = "AverageTime=" + AverageTime.value;
        document.cookie = "ScoringLocation=" + ScoringLocation.value;
        document.cookie = "DockEngage=" + DockEngage.value;
        document.cookie = "PictureRobot=" + PictureRobot.value;
        document.cookie = "Comments=" + Comments.value;

        window.location = "Submitted";

        data.push({
            MatchType: MatchType,
            TeamNumber: TeamNumber.value,
            GamePieces: GamePieces.value,
            DriverExperience: DriverExperience.value,
            DriveTrain: DriveTrain.value,
            AutoPlan: AutoPlan.value,
            GamePieceLocation: GamePieceLocation.value,
            AverageTime: AverageTime.value,
            ScoringLocation: ScoringLocation.value,
            DockEngage: DockEngage.value,
            PictureRobot: PictureRobot.value,
            Comments: Comments.value
        });
    }

    let scouting = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }

    await fetch("/scouting", scouting)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}