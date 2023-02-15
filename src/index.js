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
console.log("Listening on port " + port);

app.use(express.static('public'));

//Limiting the size of json data (1mb) and parsing JSON data
app.use(express.json({ limit: '5mb' }));

var data = ""

//Match Fetching
app.post('/scouting', (req, res) => {
    data = req.body;

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
    let scoutingdata = req.body;
    let PitScoutingData = fs.readFileSync("/src/ScoutingData/PitScoutingData.json");
    let MatchScoutingData = fs.readFileSync("/src/ScoutingData/MatchScoutingData.json");

    if (scoutingdata == "Pit-Scouting") {
        res.sendFile(PitScoutingData);
    } else if (scoutingdata == "Match-Scouting") {
        res.sendFile(MatchScoutingData);
    } else if (scoutingdata == "All-Scouting") {
        res.sendFile(PitScoutingData);
        res.sendFile(MatchScoutingData);
    } else {
        res.send("Error");
    }
});

//The authentication for the google API
const authentication = async() => {
    //The credentials for the google API
    const auth = new google.auth.GoogleAuth({
            keyFile: "src/credentials.json",
            scopes: "https://www.googleapis.com/auth/spreadsheets"
        })
        //The client for the google API, waiting for the authentication to get the credentials
    const client = await auth.getClient();
    //The google API
    const googleAPI = google.sheets({
        version: "v4",
        auth: client
    });
    //Returning the google API
    return { googleAPI };
}

//Sheets ID
const id = "1ep0FhzY4HWUXlWaoLAAE543cOTlCwb2iunyHC0DmnVQ";

//The function that will be called to add the data to the google sheet
app.get("/api", async(request, res1) => {
    try {
        //Waiting for the authentication to get the credentials
        const { googleAPI } = await authentication();

        //The data that will be added to the google sheet
        const response = await googleAPI.spreadsheets.values.append({
            spreadsheetId: id,
            range: "Sheet1!A1:F1",
        });
        res1.send({ status: "ok" });
        //If there is an error, it will be logged in the console
    } catch (error) {
        console.log(error);
        res1.status(500).send(error.message);
    }
});


//Sending data to the sheet
app.post("/api", async(request, response1) => {
    try {
        //destructure 'newName' and 'newValue' from request.body
        const { Name, Team, Category, Pass, Score, Type, Abbreviated } = request.body;

        let UnStrTime = new Date();
        let Time = UnStrTime.toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
        })

        const { googleAPI } = await authentication();
        //add the new name and value to the sheet
        const response = await googleAPI.spreadsheets.values.append({
            spreadsheetId: id,
            range: "Sheet1!A1:F1",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [Name, Team, Category, Pass, Score, Type, Abbreviated, Time]
                ]
            }
        });

        response1.send({ status: response.status });

    } catch (error) {
        console.log(error, "There was an error updating the spreadsheet", error.message);
        response1.status(500).send();
    }
});