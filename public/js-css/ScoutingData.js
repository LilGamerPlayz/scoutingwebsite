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
    });
}

function createBoxes() {
    let container = document.getElementById("Teams");

    for (let i = 0; i < ScoutingData.values.length; i++) {

        // Create the box
        let box = document.createElement("div");
        box.className = "box";
        box.id = "box" + i;
        container.appendChild(box);

        // Create the team number
        let h1TeamNumber = document.createElement("h1");
        h1TeamNumber.innerHTML = "Team " + ScoutingData.values[i][0];
        box.appendChild(h1TeamNumber);

        // Create the table
        let h2Summary = document.createElement("h2");
        if (ScoutingData.values[i].length == 12) {
            //Work on it tomorrow
        }
    }
}