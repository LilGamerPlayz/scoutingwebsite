import { google } from "googleapis";

const sheets = google.sheets({
    version: "v4",
    auth: process.env.GOOGLE_API_KEY,
});

async function writeToSheet(data: any, auth: any, spreadsheetId: any, range: any, valueInputOption: any) {
    const sheets = google.sheets({
        version: "v4",
        auth,
    });

    const resource = {
        values: [data],
    };

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption,
            requestBody: resource,
        });
        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
}

export { writeToSheet };