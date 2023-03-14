//Packages
const express = require('express');

//Accessing the library/module for usage
const app = express();

//FS File System
const fs = require('fs');

//Google Sheets API
const { google } = require('googleapis');
const sheets = google.sheets({ version: 'v4' });
const key = require("./credentials.json");

//Server
const port = process.env.PORT || 3000;

//Port hosted on, as well as logging the status of the server, if it is running or not
app.listen(port, () => console.log('Server started on port ' + port));
console.log("Listening on port " + port);

app.use(express.static('public'));

//Limiting the size of json data (1mb) and parsing JSON data
app.use(express.json({ limit: '5mb' }));

var data = "";

let nextLine = "\n";

app.post('/scouting', (req, res) => {
    try {
        data = req.body;

        console.log(data);

        const auth = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        //Different types of data scouting types
        if (data[0].ScoutingType == "Pit-Scouting") {
            fs.appendFileSync("src/ScoutingData/PitScoutingData.json", JSON.stringify(data) + nextLine);
            console.log("Pit Scouting Data Received");

            async function writeToSheet(auth) {
                const request = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Pit-Scouting!A1:L1',
                    valueInputOption: 'RAW',
                    resource: {
                        values: [
                            [
                                data[0].ScoutingType,
                                data[0].TeamNumber,
                                data[0].GamePieces,
                                data[0].DriverExperience,
                                data[0].DriveTrain,
                                data[0].AutoPlan,
                                data[0].GamePieceLocation,
                                data[0].AverageTime,
                                data[0].ScoringLocation,
                                data[0].DockEngage,
                                data[0].PictureRobot,
                                data[0].Comments,
                                data[0].Time
                            ]
                        ],
                    },
                    auth: auth,
                };

                try {
                    const response = (await sheets.spreadsheets.values.append(request)).data;
                    console.log(JSON.stringify(response, null, 2));
                } catch (err) {
                    console.error(err);
                }
            }

            writeToSheet(auth);

            res.status(200).send("Pit Scouting Data Received");
        } else if (data[0].ScoutingType == "Match-Scouting") {
            fs.appendFileSync("src/ScoutingData/MatchScoutingData.json", JSON.stringify(data) + nextLine);
            console.log("Match Scouting Data Received");
            res.status(200).send("Match Scouting Data Received");
        } else {
            res.send("Unknown Match Type");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

//Sheets ID
const id = "1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso";

app.post("/api", async (request, response1) => {
    const auth = await authorize();
    const spreadsheetId = '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso';
    let sheetName;
    let range;
    let values;

    if (request.body.Title.includes('Pit')) {
        sheetName = 'Pit-Scouting';
        range = 'A1:L1';
        values = [
            [

                Time
            ]
        ];
    } else if (request.body.Title.includes('Match')) {
        sheetName = 'Match-Scouting';
        range = 'A1:N1';
        values = [
            [
                data,
                Time
            ]
        ];
    }

    const resource = {
        values
    };

    sheets.spreadsheets.values.append({
        auth: auth,
        spreadsheetId: spreadsheetId,
        range: `${sheetName}!${range}`,
        valueInputOption: 'RAW',
        resource: resource
    }, (err, result) => {
        if (err) {
            console.log(err);
            response1.status(500).send('An error occurred');
        } else {
            response1.status(200).send('Data added successfully');
        }
    });
});