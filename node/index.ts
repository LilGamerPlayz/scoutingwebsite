// Libraries
import express, { Express } from "express";
import fs from "fs";
const app: Express = express();

app.get("/api/match-scouting-auto", async (req, res) => {
    const data = fs.readFileSync("/dependencies/match-scouting-auto.json");

    if (!data) {
        throw new Error("No data found");
    }

    res.send(data);
});

const PORT = process.env.PORT || 3000;

app.use(express.static("Temporary"));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});