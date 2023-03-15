var ScoutingData = "";



async function setUp(ScoutingTypeListener) {

    let ScoutingType = { "ScoutingType": ScoutingTypeListener };
    console.log(JSON.stringify(ScoutingType));

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
            console.log("Scouting Data Received");
            console.log(ScoutingData);
        });
}