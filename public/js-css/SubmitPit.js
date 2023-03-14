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
    });
};