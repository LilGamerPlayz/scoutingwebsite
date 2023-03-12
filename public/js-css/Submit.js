var data = [];

async function Submit() {


    if (document.getElementById("SubmitBox")) {
        document.getElementById("SubmitBox").style.display = "block";
    }

    let Yes = document.getElementById("SubmitYes");
    let No = document.getElementById("SubmitNo");

    No.addEventListener("click", function () {
        document.getElementById("SubmitBox").style.display = "none";
    });

    const Title = document.getElementById("Title").textContent;

    Yes.addEventListener("click", async function () {
        if (Title.includes("Pit")) {
            data.push({
                ScoutingType: localStorage.getItem("ScoutingType"),
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
            window.location = "Submitted";

            await fetch("/scouting", scouting)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });

        } else if (Title.includes("Match")) {
            data.push({
                ScoutingType: localStorage.getItem("ScoutingType"),
                MatchNumber: localStorage.getItem("MatchNumber"),
                TeamNumber: localStorage.getItem("TeamNumber"),
                AllianceColor: localStorage.getItem("AllianceColor"),
                CommunityLeave: localStorage.getItem("CommunityLeave"),
                AutoCubeScoring: localStorage.getItem("CubeScoring"),
                AutoConeScoring: localStorage.getItem("ConeScoring"),
                AutoBalanceOption: localStorage.getItem("BalanceOption"),
                Defense: localStorage.getItem("Defense") + "; Teams: " + localStorage.getItem("DefenseTeams"),
                TeleCubeScoring: localStorage.getItem("TeleCubeScoring"),
                TeleConeScoring: localStorage.getItem("TeleConeScoring"),
                Cargo: localStorage.getItem("CargoInput"),
                TeleEndBalance: localStorage.getItem("BalanceInput"),
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
};