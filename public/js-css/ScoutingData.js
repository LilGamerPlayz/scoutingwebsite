var ScoutingData;

async function setUp(ScoutingTypeListener) {

    let ScoutingType = { "ScoutingType": ScoutingTypeListener };
    //console.log(JSON.stringify(ScoutingType));

    // Set up the page
    // Get the data from the server
    let sendscoutingdata = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ScoutingType)
    };

    await fetch("/request", sendscoutingdata)
        .then(response => response.json())
        .then(data => {
            ScoutingData = data;
            console.log(ScoutingData);
            createBoxes();
        });
}

function createBoxes() {
    let container = document.getElementsByClassName("container")[0];

    for (let i = 0; i < ScoutingData.length; i++) {

        // Create the box
        let box = document.createElement("div");
        box.className = "box";
        box.id = "box" + i;
        container.appendChild(box);

        console.log(ScoutingData[i][1])

        // Create the team number
        let h1TeamNumber = document.createElement("h1");
        if (ScoutingData[i].length == 12) {
            h1TeamNumber.innerHTML = "Team " + ScoutingData[i][0];
        } else if (ScoutingData[i].length == 14) {
            h1TeamNumber.innerHTML = "Team " + ScoutingData[i][1];
        };
        box.appendChild(h1TeamNumber);

        // Create the table
        let h2Summary = document.createElement("h2");
        let Scouting;
        if (ScoutingData[i].length == 12) {
            Scouting = "Pit Scouting at "+ ScoutingData[i][11] + " at " + ScoutingData[i][12];
        } else if (ScoutingData[i].length == 14) {
            Scouting = "Match Scouting at "+ ScoutingData[i][13] + " at " + ScoutingData[i][14]
        };
        h2Summary.innerHTML = Scouting;
        box.appendChild(h2Summary);
    }
}