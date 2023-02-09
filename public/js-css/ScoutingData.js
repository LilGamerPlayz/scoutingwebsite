function setUp() {
    // Set up the page
    // Get the data from the server
    fetch("/sendscoutingdata", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => {
        if (res.status == 200) {
            console.log("Sent Data");
        }
    }).then(data => {
        let ScoutingData = data;
        console.log(ScoutingData);
    });
}