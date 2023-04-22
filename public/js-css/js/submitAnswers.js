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
            localStorage.setItem("ScoutingType", "Match-Scouting");
            AfterComments();
            Competition();
            PlayedDefense();
            DefenseWho('DefenseInputNumber');
            Cargo();
            Balanced();
            Cubes();
            Cones();

            data.push({
                ScoutingType: localStorage.getItem("ScoutingType"),
                TeamNumber: localStorage.getItem("TeamNumber"),
                MatchNumber: localStorage.getItem("MatchNumber"),
                AllianceColor: localStorage.getItem("AllianceColor"),
                CommunityLeave: localStorage.getItem("CommunityLeave"),
                AutoLowCubeScoring: localStorage.getItem("AutoLowCubeScoring"),
                AutoMiddleCubeScoring: localStorage.getItem("AutoMiddleCubeScoring"),
                AutoHighCubeScoring: localStorage.getItem("AutoHighCubeScoring"),
                AutoLowConeScoring: localStorage.getItem("AutoLowConeScoring"),
                AutoMiddleConeScoring: localStorage.getItem("AutoMiddleConeScoring"),
                AutoHighConeScoring: localStorage.getItem("AutoHighConeScoring"),
                AutoBalanceOption: localStorage.getItem("BalanceOption"),
                Defense: localStorage.getItem("Defense") + "; Teams: " + localStorage.getItem("DefenseTeams"),
                TeleLowConeScoring: localStorage.getItem("TeleLowCubeScoring"),
                TeleMiddleConeScoring: localStorage.getItem("TeleMiddleConeScoring"),
                TeleHighConeScoring: localStorage.getItem("TeleHighConeScoring"),
                TeleLowCubeScoring: localStorage.getItem("TeleLowCubeScoring"),
                TeleMiddleCubeScoring: localStorage.getItem("TeleMiddleCubeScoring"),
                TeleHighConeScoring: localStorage.getItem("TeleHighConeScoring"),
                Cargo: localStorage.getItem("Cargo"),
                TeleEndBalance: localStorage.getItem("Balanced"),
                Comments: localStorage.getItem("Comments"),
                Competition: localStorage.getItem("Competition")
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
                    let overlay = document.createElement("div");
                    overlay.classList.add("overlay");
                    document.body.appendChild(overlay);
                    overlay.classList.add("fade-in");
                    setTimeout(() => {
                        window.location='../Submitted';
                    }, 500);
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
                Comments: localStorage.getItem("Comments"),
                Competition: localStorage.getItem("Competition")
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
                    let overlay = document.createElement("div");
                    overlay.classList.add("overlay");
                    document.body.appendChild(overlay);
                    overlay.classList.add("fade-in");
                    setTimeout(() => {
                        window.location='Submitted';
                    }, 500);
                });
        }
    });
};