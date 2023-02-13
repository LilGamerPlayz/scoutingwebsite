//Packages
const express = require('express');

//Accessing the library/module for usage
const app = express();

//FS File System
const fs = require('fs');

//Server
const port = process.env.PORT || 3000;

//Port hosted on, as well as logging the status of the server, if it is running or not
app.listen(port, () => console.log('Server started on port ' + port));
console.log("Listening..")

app.use(express.static('public'));

//Limiting the size of json data (1mb) and parsing JSON data
app.use(express.json({ limit: '5mb' }));

//Match Fetching
app.post('/scouting', (req, res) => {
    let data = req.body;

    //Different types of data scouting types
    if (data.MatchType == "Pit-Scouting") {
        fs.writeFileSync("/src/ScoutingData/PitScoutingData.json", JSON.stringify(data, null, 2))
        console.log("Pit Scouting Data Received");
    } else if (data.MatchType == "Match-Scouting") {
        fs.writeFileSync("/src/ScoutingData/MatchScoutingData.json", JSON.stringify(data, null, 2))
        console.log("Match Scouting Data Received");
    }

    console.log(data);

    if (res.status === 200) {
        req.send("Data Received");
    }
});

app.post("/sendscoutingdata", (req, res) => {
    let data = req.body;
    let PitScoutingData = fs.readFileSync("/src/ScoutingData/PitScoutingData.json");
    let MatchScoutingData = fs.readFileSync("/src/ScoutingData/MatchScoutingData.json");

    if (data == "Pit-Scouting") {
        res.sendFile(PitScoutingData);
    } else if (data == "Match-Scouting") {
        res.sendFile(MatchScoutingData);
    } else if (data == "All-Scouting") {
        res.sendFile(PitScoutingData);
        res.sendFile(MatchScoutingData);
    } else {
        res.send("Error");
    }
});