var ScoutingData;
var searchArray = [
];


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
                    //"Year": ScoutingData[i][12].split("/")[2].split(",")[0]
                })
            }

            fetch("/matches", Matches)
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
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
                    //"Year": ScoutingData[i][14].split("/")[2].split(",")[0]

                })
            }

            fetch("/matches", Matches)
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    TeamName = data;
                    Create();
                });
        }

        async function Create() {

            // Create the box
            let box = document.createElement("div");
            box.className = "box";
            box.id = "box" + i;
            container.appendChild(box);

            //console.log(TeamName)

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
                if (document.getElementById(i).style.display === "none") {
                    document.getElementById(i).style.display = "block";
                } else {
                    document.getElementById(i).style.display = "none";
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
            data.id = i;
            data.className = "data";
            if (ScoutingData[i].length === 13) {
                data.innerHTML =
                    "Team Number: " + "<input id='TeamNumber' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][0] + "'><br>" +
                    "Game Pieces: " + "<input id='GamePieces' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][1] + "'><br>" +
                    "Driver Experience: " + "<input id='DriverExperience' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][2] + "'><br>" +
                    "Drive Train: " + "<input id='DriveTrain' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][3] + "'><br>" +
                    "Auto Plan: " + "<input id='AutoPlan' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][4] + "'><br>" +
                    "Game Piece Pickup: " + "<input id='GamePiecePickup' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][5] + "'><br>" +
                    "Cycle Time (seconds): " + "<input id='CycleTime' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][6] + "'><br>" +
                    "Scoring Location: " + "<input id='ScoringLocation' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][7] + "'><br>" +
                    "Docking and Engaging: " + "<input id='DockingEngaging' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][8] + "'><br>" +
                    "Picture: " + "<input id='Picture' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][9] + "'><br>" +
                    "Comments: " + "<input id='Comments' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][10] + "'><br>" +
                    "Event: " + "<input id='Event' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][11] + "'><br>" +
                    "Time: " + "<input id='Time' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][12] + "'><br>";
            } else if (ScoutingData[i].length === 15) {
                data.innerHTML =
                    "Team Number: " + "<input id='TeamNumber' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][0] + "'><br>" +
                    "Match Number: " + "<input id='MatchNumber' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][1] + "'><br>" +
                    "Alliance Color: " + "<input id='AllianceColor' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][2] + "'><br>" +
                    "Leave Community: " + "<input id='LeaveCommunity' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][3] + "'><br>" +
                    "Auto Cube Scoring: " + "<input id='AutoCubeScoring' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][4] + "'><br>" +
                    "Auto Cone Scoring: " + "<input id='AutoConeScoring' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][5] + "'><br>" +
                    "Auto Balance: " + "<input id='AutoBalance' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][6] + "'><br>" +
                    "Defensive Play: " + "<input id='DefensivePlay' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][7] + "'><br>" +
                    "Teleop Cube Scoring: " + "<input id='TeleopCubeScoring' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][8] + "'><br>" +
                    "Teleop Cone Scoring: " + "<input id='TeleopConeScoring' class='datainput' oninput='runChange(this) 'type='text' value='" + ScoutingData[i][9] + "'><br>" +
                    "Cargo Location: " + "<input id='CargoLocation' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][10] + "'><br>" +
                    "Teleop Balance: " + "<input id='TeleopBalance' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][11] + "'><br>" +
                    "Comments: " + "<input id='Comments' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][12] + "'><br>" +
                    "Event: " + "<input id='Event' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][13] + "'><br>" +
                    "Time: " + "<input id='Time' class='datainput' oninput='runChange(this)' type='text' value='" + ScoutingData[i][14] + "'><br>";
            }
            data.style.display = "none";
            box.appendChild(data);

            box.appendChild(document.createElement("br"));
        }
    }
}
let id;

function runChange(element) {
    let parent = element.parentElement;

    const pTags = parent.getElementsByTagName("input");

    id = parent.id;
    //console.log(id);

    console.log(ScoutingData[id]);

    if (pTags.length === 13) {
        sendDataToServer({
            TeamNumber: pTags[0].value,
            GamePieces: pTags[1].value,
            DriverExperience: pTags[2].value,
            DriveTrain: pTags[3].value,
            AutoPlan: pTags[4].value,
            GamePiecePickup: pTags[5].value,
            CycleTime: pTags[6].value,
            ScoringLocation: pTags[7].value,
            DockingEngaging: pTags[8].value,
            Picture: pTags[9].value,
            Comments: pTags[10].value,
            Event: pTags[11].value,
            Time: pTags[12].value,
            PreviousScoutingData: ScoutingData[id]
        });
        //console.log(pTags);
    } else if (pTags.length === 15) {
        sendDataToServer({
            TeamNumber: pTags[0].value,
            MatchNumber: pTags[1].value,
            AllianceColor: pTags[2].value,
            LeaveCommunity: pTags[3].value,
            AutoCubeScoring: pTags[4].value,
            AutoConeScoring: pTags[5].value,
            AutoBalance: pTags[6].value,
            DefensivePlay: pTags[7].value,
            TeleopCubeScoring: pTags[8].value,
            TeleopConeScoring: pTags[9].value,
            CargoLocation: pTags[10].value,
            TeleopBalance: pTags[11].value,
            Comments: pTags[12].value,
            Event: pTags[13].value,
            Time: pTags[14].value,
            PreviousScoutingData: ScoutingData[id]
        });
    }


    function sendDataToServer(data) {
        fetch('/updateData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data1 => {
                console.log('Success:', data1);
    
                //console.log(pTags.length);
                
                //console.log((ScoutingData[id]));
                ScoutingData[id] = [];
                for (let i = 0; i < pTags.length; i++) {
                    ScoutingData[id].push(pTags[i].value);
                    //console.log(data[i])
                    //console.log(ScoutingData[id]);
                }
    
            });
    
    }
}
