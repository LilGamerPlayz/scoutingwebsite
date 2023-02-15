function Submit() {
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
    }