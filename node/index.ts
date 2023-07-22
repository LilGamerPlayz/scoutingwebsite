// Libraries
import express, { Express } from "express";
// import { OpenAPI } from "tba-api-v3client-ts";
// import { google } from "googleapis";
// import { writeToSheet } from "./dependencies/functions";
// import dotenv from "dotenv";
// 
// // Dotenv Init/Import
// dotenv.config({ path: __dirname + "/hidden.env" });
// 
// // TBA Constants
// const TBA_KEY = process.env.TBA_KEY;
// const basePath: string = "https://www.thebluealliance.com/api/v3";
// 
// // TBA API Init
// const api = new OpenAPI();
// api.setApiKey(TBA_KEY);
// api.basePath = basePath;
// 
// // Google API Init
// 
// Express
 const app: Express = express();
// 
// async function getTeams() {
//     const teams = await api.getTeamsSimple({});
//     return teams;
// }
// 
// app.post("/api/teams", async (req, res) => {
//     const teams = await getTeams();
//     res.send(teams);
// });
// 
// app.post("/api/teams/:teamKey", async (req, res) => {
//     const teamKey = req.params.teamKey;
//     const team = await api.getTeamSimple({ teamKey });
//     res.send(team);
// });
// 
// // Sends pit scouting data to google sheets
// app.post("/google/pit", async (req, res) => {
//     try {
//         const DATA = req.body;
//         const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
//         const RANGE: string = "Pit-Scouting!A1:M1";
//         const VALUE_INPUT_OPTION = "RAW";
//         const auth = new google.auth.GoogleAuth({
//             keyFile: "credentials.json",
//             scopes: "https://www.googleapis.com/auth/spreadsheets",
//         });
//         writeToSheet(DATA, auth, SPREADSHEET_ID, RANGE, VALUE_INPUT_OPTION);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

const PORT = process.env.PORT || 3000;

app.use(express.static("Temporary"));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
