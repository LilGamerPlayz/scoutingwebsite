function Submit() {

    let amountofQuestions = document.getElementsByClassName("Question").length;

    let data = {
        TeamNumber: document.getElementById("TeamNumberInput").value,
        GamePieces: document.getElementById("GamePiecesInput").value,
        DriverExperience: document.getElementById("DriverExperienceInput").value,
        DriveTrain: document.getElementById("DriveTrainInput").value,
        AutoPlan: document.getElementById("AutoPlanInput").value,
        GamePieceLocation: document.getElementById("GamePieceLocationInput").value,
        AverageTime: document.getElementById("AverageTimeInput").value,
        ScoringLocation: document.getElementById("ScoringLocationInput").value,
        DockEngage: document.getElementById("DockEngageInput").value,
        PictureRobot: document.getElementById("PictureRobotInput").checked,
        Comments: document.getElementById("CommentsInput").value,
    }
    console.log(data);
}