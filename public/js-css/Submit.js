var data = [];
let MatchType = "";
if (document.getElementById("Title").textContent.includes("Pit")) {
    MatchType = "Pit-Scouting";
} else if (document.getElementById("Title").textContent.includes("Match")) {
    MatchType = "Match-Scouting";
} else {
    MatchType = "Unknown";
}

async function Submit() {


    if (document.getElementById("SubmitBox")) {
        document.getElementById("SubmitBox").style.display = "block";
    }

    let Yes = document.getElementById("SubmitYes");
    let No = document.getElementById("SubmitNo");


    Yes.addEventListener("click", function () {
        let Title = document.getElementById("Title").textContent;

        if (Title.includes("Pit")) {
            window.location = "Submitted";
        } else if (Title.includes("Match")) {
            window.location = "../Submitted";
        }


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

    });

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