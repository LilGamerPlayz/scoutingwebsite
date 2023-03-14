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

app.post('/pitscouting', (req, res) => {
    try {
        data = req.body;

        console.log(data);

        const auth = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        var UnStrTime = new Date();
        var Time = UnStrTime.toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
        });

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
                                Time
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
        }
    } catch (err) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

app.post('/matchscouting', (req, res) => {
    try {
        data = req.body;

        console.log(data);

        const auth = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        var UnStrTime = new Date();
        var Time = UnStrTime.toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
        });

        if (data[0].ScoutingType == "Match-Scouting") {
            fs.appendFileSync("src/ScoutingData/MatchScoutingData.json", JSON.stringify(data) + nextLine);
            console.log("Match Scouting Data Received");

            async function writeToSheet(auth) {
                const request = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Match-Scouting!A1:L1',
                    valueInputOption: 'RAW',
                    resource: {
                        values: [
                            [
                                data[0].MatchNumber,
                                data[0].TeamNumber,
                                data[0].AllianceColor,
                                data[0].CommunityLeave,
                                data[0].AutoCubeScoring,
                                data[0].AutoConeScoring,
                                data[0].AutoBalanceOption,
                                data[0].Defense,
                                data[0].TeleCubeScoring,
                                data[0].TeleConeScoring,
                                data[0].Cargo,
                                data[0].TeleEndBalance,
                                data[0].Comments,
                                Time
                            ]
                        ]
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


            res.status(200).send("Match Scouting Data Received");
        } else {
            res.send("Unknown Match Type");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});