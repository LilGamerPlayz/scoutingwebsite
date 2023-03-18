//Packages
const { response } = require('express');
const express = require('express');

//Accessing the library/module for usage
const app = express();

//The Blue Alliance API

const BlueAlliance = require('bluealliance');
const tba = new BlueAlliance("fdLcRddgjqf2JcAbNl1xMyD5aOCDxEYuECPnXgOtuy8TTq3oVDMCstqadnqfhWNb");


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

let nextLine = "\r\n";

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
                range: 'Pit-Scouting!A1:M1',
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
                            data[0].Competition,
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
                range: 'Match-Scouting!A2:O10000',
                valueInputOption: 'RAW',
                resource: {
                    values: [
                        [
                            data[0].TeamNumber,
                            data[0].MatchNumber,
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
                            data[0].Competition,
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


        if (Type == '"Pit-Scouting"') {
            async function readFromSheet(auth) {
                const request = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Pit-Scouting!A2:M10000',
                    auth: auth,
                };

                try {
                    const responseP = (await sheets.spreadsheets.values.get(request)).data;
                    //console.log(JSON.stringify(response, null, 2));

                    res.status(200).send(responseP.values);
                } catch (err) {
                    console.error(err);
                }
            }

            readFromSheet(auth);
        } else if (Type == '"Match-Scouting"') {
            async function readFromSheet(auth) {
                const request = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Match-Scouting!A2:O10000',
                    auth: auth,
                };

                try {
                    const responseM = (await sheets.spreadsheets.values.get(request)).data;
                    //console.log(JSON.stringify(response, null, 2));

                    res.status(200).send(responseM.values);
                } catch (err) {
                    console.error(err);

                }
            }

            readFromSheet(auth);
        } else if (Type == '"All-Scouting"') {
            async function readFromSheet(auth) {
                const sheets = google.sheets({ version: 'v4', auth });
                const request1 = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Pit-Scouting!A2:M10000',
                };
                const request2 = {
                    spreadsheetId: '1C3KSzZVnCiCPlD3zcVN4TqZpOClYCuCvgi4jnHXqFso',
                    range: 'Match-Scouting!A2:O10000',
                };
                let data = [];
                try {
                    let response = await sheets.spreadsheets.values.get(request1);
                    let rows = response.data.values;
                    if (rows.length) {
                        data.push(...rows);
                    }
                    response = await sheets.spreadsheets.values.get(request2);
                    rows = response.data.values;
                    if (rows.length) {
                        data.push(...rows);
                    }

                    //console.log(JSON.stringify(data, null, 2));
                    res.status(200).send(data);
                } catch (err) {
                    console.error(err);
                }
                return data;
            } readFromSheet(auth);
        } else {
            res.status(200).send("Invalid Request");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});



app.post("/matches", (req, res) => {
    try {
    let data = req.body;
    //console.log(data);


    var main = async function () {
        var team = await tba.getTeam(data.TeamNumber);
        //console.log(team.nickname);

        res.status(200).send({
            "message": "Match Data Received",
            "TeamNames": team.nickname
        });
    }

    main()

} catch (err) {
    res.status(500).send(err.message);
}
});

app.post("/updateData", (req, res) => {
    let data = req.body;
    //console.log(data);
    res.status(200).send({data});
});