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

function Appear() {

    if (document.getElementById("CargoLabel")) {
        document.getElementById("CargoLabel").remove();
    }
    if (document.getElementById("CargoInput")) {
        document.getElementById("CargoInput").remove();
    }
    if (!document.getElementById("CubesLowInput").value == 0 ||
        !document.getElementById("CubesMiddleInput").value == 0 ||
        !document.getElementById("CubesHighInput").value == 0 ||
        !document.getElementById("ConesLowInput").value == 0 ||
        !document.getElementById("ConesMiddleInput").value == 0 ||
        !document.getElementById("ConesHighInput").value == 0) {

        const Cargo = document.getElementById("Cargo");

        let CargoLabel = document.createElement("h1");
        CargoLabel.id = "CargoLabel";
        CargoLabel.innerHTML = "Where did they pick up most of their cargo from?"
        Cargo.appendChild(CargoLabel);

        let CargoSelection = document.createElement("select");
        CargoSelection.className = "selection";
        CargoSelection.onchange = "Cargo()";
        CargoSelection.id = "CargoInput";
        Cargo.appendChild(CargoSelection);

        let option1 = document.createElement("option");
        option1.value = "Shelf";
        option1.innerHTML = "Feeder Shelf";
        CargoSelection.appendChild(option1);

        let option2 = document.createElement("option");
        option2.value = "Floor";
        option2.innerHTML = "Loading Zone Floor";
        CargoSelection.appendChild(option2);

        let option3 = document.createElement("option");
        option3.value = "Field";
        option3.innerHTML = "Mid-Field";
        CargoSelection.appendChild(option3);
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
    if (!document.getElementById("CargoInput")) {
        localStorage.setItem("Cargo", "None");
    } else if (document.getElementById("CargoInput")) {
        localStorage.setItem("Cargo", document.getElementById("CargoInput").value);
    }
}

function Balanced() {
    localStorage.setItem("Balanced", document.getElementById("BalancedInput").value);
}

function Cubes() {
    localStorage.setItem("TeleLowCubeScoring", document.getElementById("CubesLowInput").value);
    localStorage.setItem("TeleMiddleCubeScoring", document.getElementById("CubesMiddleInput").value);
    localStorage.setItem("TeleHighCubeScoring", document.getElementById("CubesHighInput").value);
}

function Cones() {
    localStorage.setItem("TeleLowConeScoring", document.getElementById("ConesLowInput").value);
    localStorage.setItem("TeleMiddleConeScoring", document.getElementById("ConesMiddleInput").value);
    localStorage.setItem("TeleHighConeScoring", document.getElementById("ConesHighInput").value);
}

function DefenseWho(id) {
    localStorage.setItem("Defense", "Yes; Teams: " + document.getElementById(id).value);
}

function Unblacked() {
    let overlay = document.querySelector(".overlay");
    overlay.classList.add("fade-out");
    overlay.addEventListener("animationend", () => {
        overlay.remove();
    });
}

function Blacked() {
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
    overlay.classList.add("fade-in");
    setTimeout(() => {
        window.location = '../Autonomous'
    }, 500); // adjust the timeout to match the duration of the fade-in animation
}