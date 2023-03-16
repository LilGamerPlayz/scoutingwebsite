var ScoutingData;

async function setUp(ScoutingTypeListener) {

    let ScoutingType = { "ScoutingType": ScoutingTypeListener };

    if (document.getElementsByClassName("box")) {
        const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());
        remove(".box");
    }

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
            //console.log(ScoutingData);
            createBoxes();
        });
}

function createBoxes() {
    let container = document.getElementsByClassName("container")[0];

    searchArray = [];

    for (let i = 0; i < ScoutingData.length; i++) {

        // Create the box
        let box = document.createElement("div");
        box.className = "box";
        box.id = "box" + i;
        container.appendChild(box);

        //console.log(ScoutingData[i][0])

        // Create the team number
        let h1TeamNumber = document.createElement("h1");
        h1TeamNumber.innerHTML = "Team " + ScoutingData[i][0];
        box.appendChild(h1TeamNumber);

        //Pushes Team Number to searchArray
        searchArray.push([ScoutingData[i][0]]);

        // Create the table
        let h2Summary = document.createElement("h2");
        let Scouting;
        if (ScoutingData[i].length === 13) {
            Scouting = "Pit Scouting at " + ScoutingData[i][11] + " at " + ScoutingData[i][12]
        } else if (ScoutingData[i].length === 15) {
            Scouting = "Match Scouting at " + ScoutingData[i][13] + " at " + ScoutingData[i][14];
        }
        h2Summary.innerHTML = Scouting;
        box.appendChild(h2Summary);

        // Create the button
        let button = document.createElement("button");
        button.id = "button" + i;
        button.onclick = function () {
            if (document.getElementById("data" + i).style.display === "none") {
                document.getElementById("data" + i).style.display = "block";
            } else {
                document.getElementById("data" + i).style.display = "none";
            }
        };
        box.appendChild(button);

        // Append an anchor to the box
        let a = document.createElement("a");
        a.id = "a" + i;
        a.innerHTML = "View Survey Results";
        button.appendChild(a);
        
        let data = document.createElement("div");
        data.id = "data" + i;
        data.className = "data";
        data.innerHTML = ScoutingData[i];
        data.style.display = "none";
        box.appendChild(data);
    }
}


var searchArray = [

];
