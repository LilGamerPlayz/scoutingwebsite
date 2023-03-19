function ScoutingType() {
    if (!localStorage.getItem("Name") || localStorage.getItem("Name") == "null") {
        document.getElementById("SubmitBox").style.display = "block";
        let Submit = document.getElementById("Submit");
        Submit.onclick = function () {
            if (document.getElementById("Name").value == "" || document.getElementById("Name").value == "null") {
                alert("Please enter a name");
                return;
            } else {
                let Name = document.getElementById("Name").value;
                localStorage.setItem("Name", Name);
                window.location = "ScoutingType";
            }
        }

    } else if (localStorage.getItem("Name") != "null" && localStorage.getItem("Name") != "") {
        window.location = "ScoutingType";
    }

}

function Survey() {
    window.location = "SurveyResults";
}