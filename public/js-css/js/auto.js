
function OnLoad() {
    localStorage.setItem("CommunityLeave", document.getElementById("CommunityLeaveInput").value);
    localStorage.setItem("AutoLowCubeScoring", document.getElementById("CubesLowInput").value);
    localStorage.setItem("AutoMiddleCubeScoring", document.getElementById("CubesMiddleInput").value);
    localStorage.setItem("AutoHighCubeScoring", document.getElementById("CubesHighInput").value);
    localStorage.setItem("AutoLowConeScoring", document.getElementById("ConesLowInput").value);
    localStorage.setItem("AutoMiddleConeScoring", document.getElementById("ConesMiddleInput").value);
    localStorage.setItem("AutoHighConeScoring", document.getElementById("ConesHighInput").value);
    localStorage.setItem("BalanceOption", document.getElementById("BalanceOptionInput").value);
}

function CommunityLeave() {
    localStorage.setItem("CommunityLeave", document.getElementById("CommunityLeaveInput").value);
}

function CubeScoring() {
    localStorage.setItem("AutoLowCubeScoring", document.getElementById("CubesLowInput").value);
    localStorage.setItem("AutoMiddleCubeScoring", document.getElementById("CubesMiddleInput").value);
    localStorage.setItem("AutoHighCubeScoring", document.getElementById("CubesHighInput").value);
}

function ConeScoring() {
    localStorage.setItem("AutoLowConeScoring", document.getElementById("ConesLowInput").value);
    localStorage.setItem("AutoMiddleConeScoring", document.getElementById("ConesMiddleInput").value);
    localStorage.setItem("AutoHighConeScoring", document.getElementById("ConesHighInput").value);
}

function BalanceOption() {
    localStorage.setItem("BalanceOption", document.getElementById("BalanceOptionInput").value);
}

function TeleOp() {
    localStorage.setItem("CommunityLeave", document.getElementById("CommunityLeaveInput").value);
    localStorage.setItem("AutoLowCubeScoring", document.getElementById("CubesLowInput").value);
    localStorage.setItem("AutoMiddleCubeScoring", document.getElementById("CubesMiddleInput").value);
    localStorage.setItem("AutoHighCubeScoring", document.getElementById("CubesHighInput").value);
    localStorage.setItem("AutoLowConeScoring", document.getElementById("ConesLowInput").value);
    localStorage.setItem("AutoMiddleConeScoring", document.getElementById("ConesMiddleInput").value);
    localStorage.setItem("AutoHighConeScoring", document.getElementById("ConesHighInput").value);
    localStorage.setItem("BalanceOption", document.getElementById("BalanceOptionInput").value);
    localStorage.setItem("ScoutingType", "Match-Scouting");

    window.location = "/ScoutingType/Match-Scouting/Teleop-Endgame";
}

function Appear() {
    if (!document.getElementById("CubesLowInput").value <= 1 &&
        !document.getElementById("CubesMiddleInput").value <= 1 &&
        !document.getElementById("CubesHighInput").value <= 1 &&
        !document.getElementById("ConesLowInput").value <= 1 &&
        !document.getElementById("ConesMiddleInput").value <= 1 &&
        !document.getElementById("ConesHighInput").value <= 1) {
            if (document.getElementById("CargoLabel")) {
                document.getElementById("CargoLabel").remove();
            }
            if (document.getElementById("CargoInput")) {
                document.getElementById("CargoInput").remove();
            }
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
    } else if (document.getElementById("CubesLowInput").value <= 1 &&
        document.getElementById("CubesMiddleInput").value <= 1 &&
        document.getElementById("CubesHighInput").value <= 1 &&
        document.getElementById("ConesLowInput").value <= 1 &&
        document.getElementById("ConesMiddleInput").value <= 1 &&
        document.getElementById("ConesHighInput").value <= 1) {
        if (document.getElementById("CargoInput")) {
            document.getElementById("CargoInput").remove();
        }
        if (document.getElementById("CargoLabel")) {
            document.getElementById("CargoLabel").remove();
        }
    }
}

function Cargo() {
    localStorage.setItem("Cargo", document.getElementById("CargoInput").value);
    if (!document.getElementById("CargoInput")) {
        localStorage.setItem("Cargo", "None");
    }
}
function CubesRun() {
    CubeScoring();
    Appear();
}

function ConesRun() {
    ConeScoring();
    Appear();
}

