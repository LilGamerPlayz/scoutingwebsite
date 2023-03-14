async function Submit() {

    if (document.getElementById("SubmitBox")) {
        document.getElementById("SubmitBox").style.display = "block";
    }

    let Yes = document.getElementById("SubmitYes");
    let No = document.getElementById("SubmitNo");

    No.addEventListener("click", function () {
        document.getElementById("SubmitBox").style.display = "none";
    });
    
    Yes.addEventListener("click", async function () {
        var data = [];

        console.log("Submit Button Clicked");

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
    });
};