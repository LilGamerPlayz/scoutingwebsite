var data = [];

async function Submit() {


    if (document.getElementById("SubmitBox")) {
        document.getElementById("SubmitBox").style.display = "block";
    }

    let Yes = document.getElementById("SubmitYes");
    let No = document.getElementById("SubmitNo");


    Yes.addEventListener("click", async function () {
        if (localStorage.getItem("ScoutingType") == "Pit-Scouting") {
            data.push({
                MatchType: localStorage.getItem("MatchType"),
                TeamNumber: localStorage.getItem("TeamNum"),
                DriverExperience: localStorage.getItem("DriverExperience"),
                DriveTrain: localStorage.getItem("DriveTrain"),
                AutoPlan: localStorage.getItem("AutoPlan"),
                GamePieceLocation: localStorage.getItem("GamePieceLocation"),
                AverageTime: localStorage.getItem("AverageTime"),
                ScoringLocation: localStorage.getItem("ScoringLocation"),
                DockEngage: localStorage.getItem("DockEngage"),
                PictureRobot: localStorage.getItem("PictureRobot"),
                Comments: localStorage.getItem("Comments")
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

            window.location = "Submitted";
        } else if (localStorage.getItem("ScoutingType") == "Match-Scouting") {
            data.push({
                MatchType: localStorage.getItem("MatchType"),
                TeamNumber: localStorage.getItem("TeamNumber"),
                GamePieces: localStorage.getItem("GamePieces"),
                DriverExperience: localStorage.getItem("DriverExperience"),
                DriveTrain: localStorage.getItem("DriveTrain"),
                AutoPlan: localStorage.getItem("AutoPlan"),
                GamePieceLocation: localStorage.getItem("GamePieceLocation"),
                AverageTime: localStorage.getItem("AverageTime"),
                ScoringLocation: localStorage.getItem("ScoringLocation"),
                DockEngage: localStorage.getItem("DockEngage"),
                PictureRobot: localStorage.getItem("PictureRobot"),
                Comments: localStorage.getItem("Comments")
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
    });

    No.addEventListener("click", function () {
        document.getElementById("SubmitBox").style.display = "none";
    });
};