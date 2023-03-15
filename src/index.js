//Packages
const { response } = require('express');
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

//Sends pit scouting data to google sheets
app.post('/pitscouting', (req, res) => {
    try {
        data = req.body;

        console.log(data);

        //Creates a new JWT client using the service account email and private key
        const auth = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        //Creates a new date object and converts it to a string
        var UnStrTime = new Date();
        var Time = UnStrTime.toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
        });

        //Different types of data scouting types

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

            //Writes data to the google sheet
            try {
                //console.log("Sending to google sheets");
                const response = (await sheets.spreadsheets.values.append(request)).data;
                //console.log("Data Sent to google sheets");

                //console.log(JSON.stringify(response, null, 2));

                if (response.status == "200") {
                    res.send("Data Sent");
                    //console.log("Data Sent");
                } else {
                    res.send("Data Not Sent");
                    //console.log("Data Not Sent");
                }
            } catch (err) {
                console.error(err);
            }
        }

        //Calls the function to write to the google sheet
        writeToSheet(auth);

        fs.appendFileSync("src/ScoutingData/PitScoutingData.json", JSON.stringify(data) + nextLine);

    } catch (err) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

//Sends match data to google sheets
app.post('/matchscouting', (req, res) => {
    try {
        data = req.body;

        console.log(data);

        //Creates a new JWT client using the service account email and private key
        const auth = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );

        //Creates a new date object and converts it to a string
        var UnStrTime = new Date();
        var Time = UnStrTime.toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
        });

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

        fs.appendFileSync("src/ScoutingData/MatchScoutingData.json", JSON.stringify(data) + nextLine);

        res.status(200).send("Match Scouting Data Received");
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

//Gets data from google sheets
app.post("/request", (req, res) => {
    try {
        let Type = JSON.stringify(req.body.ScoutingType);
        //console.log(Type);
        
        const auth = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );


        if (Type == "Pit-Scouting") {
            async function readFromSheet(auth) {
                const request = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Pit-Scouting!A1:L1',
                    auth: auth,
                };

                try {
                    const responseP = (await sheets.spreadsheets.values.get(request)).data;
                    console.log(JSON.stringify(response, null, 2));

                    res.status(200).send(responseP);
                } catch (err) {
                    console.error(err);
                }
            }

            readFromSheet(auth);
        } else if (Type == "Match-Scouting") {
            async function readFromSheet(auth) {
                const request = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Match-Scouting!A1:L1',
                    auth: auth,
                };

                try {
                    const responseM = (await sheets.spreadsheets.values.get(request)).data;
                    console.log(JSON.stringify(response, null, 2));

                    res.status(200).send(responseM);
                } catch (err) {
                    console.error(err);

                }


            }

            readFromSheet(auth);
        } else if (Type == "All-Scouting") {
            async function readFromSheet(auth) {
                const request1 = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Pit-Scouting!A1:L1',
                    auth: auth,
                };

                const request2 = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Match-Scouting!A1:L1',
                    auth: auth,
                };

                try {
                    const response1 = (await sheets.spreadsheets.values.get(request1)).data;
                    console.log(JSON.stringify(response1, null, 2));

                    const response2 = (await sheets.spreadsheets.values.get(request2)).data;
                    console.log(JSON.stringify(response2, null, 2));

                    res.send(response1, response2);
                } catch (err) {
                    console.error(err);
                }
            }

            readFromSheet(auth);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});