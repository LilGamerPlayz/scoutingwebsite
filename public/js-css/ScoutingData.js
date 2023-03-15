var ScoutingData = "";
var ScoutingType = "All-Scouting";

async function setUp() {
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
        .then(response => response.text())
        .then(data => {
            ScoutingData = data;
            console.log(ScoutingData);
        });
}