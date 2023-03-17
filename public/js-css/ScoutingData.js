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

        let TeamName;

        if (ScoutingData[i].length === 13) {
            let Matches = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "TeamNumber": ScoutingData[i][0],
                    "Event": ScoutingData[i][11]
                })
            }

            fetch("/matches", Matches)
                .then(response => response.json())
                .then(data => {
                    TeamName = data;
                    Create();
                });
        } else if (ScoutingData[i].length === 15) {
            let Matches = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "TeamNumber": ScoutingData[i][0],
                    "Event": ScoutingData[i][13]
                })
            }

            fetch("/matches", Matches)
                .then(response => response.json())
                .then(data => {
                    TeamName = data;
                    Create();
                });
        }

        function Create() {

            // Create the box
            let box = document.createElement("div");
            box.className = "box";
            box.id = "box" + i;
            container.appendChild(box);

            console.log(TeamName)

            // Create the team number
            let h1TeamNumber = document.createElement("h1");
            h1TeamNumber.innerHTML = "Team " + ScoutingData[i][0] + " - " + TeamName.TeamNames;
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

            box.appendChild(document.createElement("br"));

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

            box.appendChild(document.createElement("br"));

            let data = document.createElement("div");
            data.id = "data" + i;
            data.className = "data";
            if (ScoutingData[i].length === 13) {
                data.innerHTML = "Team Number: " + ScoutingData[i][0] + "<br>" +
                    "Game Pieces: " + ScoutingData[i][1] + "<br>" +
                    "Driver Experience: " + ScoutingData[i][2] + "<br>" +
                    "Drive Train: " + ScoutingData[i][3] + "<br>" +
                    "Auto Plan: " + ScoutingData[i][4] + "<br>" +
                    "Game Piece Pickup: " + ScoutingData[i][5] + "<br>" +
                    "Cycle Time (seconds): " + ScoutingData[i][6] + "<br>" +
                    "Scoring Location: " + ScoutingData[i][7] + "<br>" +
                    "Docking and Engaging: " + ScoutingData[i][8] + "<br>" +
                    "Picture: " + ScoutingData[i][9] + "<br>" +
                    "Comments: " + ScoutingData[i][10] + "<br>" +
                    "Time: " + ScoutingData[i][12] + "<br>";

            } else if (ScoutingData[i].length === 15) {
                data.innerHTML = "Team Number: " + ScoutingData[i][0] + "<br>" +
                    "Match Number: " + ScoutingData[i][1] + "<br>" +
                    "Alliance Color: " + ScoutingData[i][2] + "<br>" +
                    "Leave Community: " + ScoutingData[i][3] + "<br>" +
                    "Auto Cube Scoring: " + ScoutingData[i][4] + "<br>" +
                    "Auto Cone Scoring: " + ScoutingData[i][5] + "<br>" +
                    "Auto Balance: " + ScoutingData[i][6] + "<br>" +
                    "Defensive Play: " + ScoutingData[i][7] + "<br>" +
                    "Teleop Cube Scoring: " + ScoutingData[i][8] + "<br>" +
                    "Teleop Cone Scoring: " + ScoutingData[i][9] + "<br>" +
                    "Cargo Location: " + ScoutingData[i][10] + "<br>" +
                    "Teleop Balance: " + ScoutingData[i][11] + "<br>" +
                    "Comments: " + ScoutingData[i][12] + "<br>" +
                    "Time: " + ScoutingData[i][14] + "<br>";
            }
            data.style.display = "none";
            box.appendChild(data);

            box.appendChild(document.createElement("br"));
        }
    }
}


var searchArray = [

];
