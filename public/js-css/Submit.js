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
        var data = [];

        console.log("Submit Button Clicked");

        if (Title.includes("Match")) {
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

            console.log("Match Scouting Data Before Sent");

            let scouting = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }

            console.log("Match Scouting Data Sent");

            await fetch("/matchscouting", scouting)
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                    window.location = "..Submitted";
                });

        }
  

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
                body: JSON.stringify(data)
            }

            await fetch("/pitscouting", scouting)
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                    window.location = "Submitted";
                });
        }
    });
};