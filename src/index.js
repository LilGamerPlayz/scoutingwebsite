//Packages
const express = require('express');

//Accessing the library/module for usage
const app = express();

//Server
const port = process.env.PORT || 3000;

//Port hosted on, as well as logging the status of the server, if it is running or not
app.listen(port, () => console.log('Server started on port ' + port));
console.log("Listening..")

app.use(express.static('public'));

//Limiting the size of json data (1mb) and parsing JSON data
app.use(express.json({ limit: '5mb' }));

//Match Fetching
app.get('/scouting', (req, res) => {
    let data = req.body;

    //Different types of data scouting types
    if (data.MatchType == "Pit-Scouting") {
        console.log("Pit Scouting Data Received");
    } else if (data.MatchType == "Match-Scouting") {
        console.log("Match Scouting Data Received");
    }

    console.log(data);

    if (res.status === 200) {
        req.send("Data Received");
    }
});