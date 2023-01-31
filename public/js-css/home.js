function ScoutingType() {
    window.location = "ScoutingType";
    if (!localStorage.getItem("Name")) {
        let name = prompt("Please enter your name", "Name");
        localStorage.setItem("Name", name);
    }
}

function Survey() {
    window.location = "Survey";
}