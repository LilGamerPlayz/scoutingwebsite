var data = [];
let MatchType = "";

async function Submit() {
    if (document.getElementById("Title") == "Pit Scouting | Robotics Scouting Site") {
        MatchType = "Pit-Scouting";
    } else if (document.getElementById("Title") == "Match - Tele-Op/Endgame | Robotics Scouting Site") {
        MatchType = "Match-Scouting";
    } else {
        MatchType = "Unknown";
    }

    if (document.getElementById("SubmitBox")) {
        document.getElementById("SubmitBox").style.display = "block";
    }

    let Yes = document.getElementById("SubmitYes");
    let No = document.getElementById("SubmitNo");

    Yes.addEventListener("click", function () {
        /*
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
*/

let Title = document.getElementById("Title").textContent;

if (Title.includes("Pit")) {
    window.location = "Submitted";
} else if (Title.includes("Match")) {
    window.location = "../Submitted";
}

/*
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
        */
    }
    );

    No.addEventListener("click", function () {
        document.getElementById("SubmitBox").style.display = "none";
    });
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