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
            Blacked();
            setTimeout(() => {
                window.location.href = "ScoutingType";
            }, 500); // adjust the timeout to match the duration of the fade-in animation
        };
    }

function Survey() {
    Blacked();
    setTimeout(() => {
        window.location = "SurveyResults";
    }, 500);
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
}