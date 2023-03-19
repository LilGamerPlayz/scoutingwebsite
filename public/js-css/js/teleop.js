function AfterComments() {
    localStorage.setItem("Comments", document.getElementById("CommentsInput").value);
}

function MatchSubmit() {
    localStorage.setItem("Competition", document.getElementById("CompetitionInput").value);
    if (localStorage.getItem("DefenseTeams") == "No") {
        localStorage.setItem("DefenseTeams", "None");
    }
    if (localStorage.getItem("Comments") == "") {
        localStorage.setItem("Comments", "None");
    }
    if (localStorage.getItem("Competition") == "") {
        localStorage.setItem("Competition", "Not Specified");
    }
}

function Competition() {
    localStorage.setItem("Competition", document.getElementById("CompetitionInput").value);
}

function PlayedDefense() {
    let DefenseInput = document.getElementById("DefenseInput").value;

    if (DefenseInput == "Yes") {
        localStorage.setItem("Defense", "Yes");

        document.getElementById("DefenseInputNumber").style.display = "block";
    } else if (DefenseInput == "No") {
        localStorage.setItem("Defense", "No");

        document.getElementById("DefenseInputNumber").style.display = "none";
    }
}

function DefenseWho() {
    localStorage.setItem("DefenseTeams", document.getElementById("DefenseInputNumber").value);
}

function OnLoad() {
    localStorage.setItem("ScoutingType", "Match-Scouting");
    AfterComments();
    Competition();
    PlayedDefense();
    DefenseWho();
    Cargo();
    Balanced();
    Cubes();
    Cones();

}

function Cargo() {
    localStorage.setItem("Cargo", document.getElementById("CargoInput").value);
}

function Balanced() {
    localStorage.setItem("Balanced", document.getElementById("BalancedInput").value);
}

function Cubes() {
    localStorage.setItem("TeleCubeScoring", document.getElementById("CubesInput").value);
}

function Cones() {
    localStorage.setItem("TeleConeScoring", document.getElementById("ConesInput").value);
}