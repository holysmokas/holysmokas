// src/sheetsApi.js
/**
 * Retrieves projects from your published Google Sheet
 * where each row represents a client submission
 * and includes at least columns like: businessName, email, liveUrl
 */

export async function getProjectsForUser(userEmail) {
    try {
        // Replace with your actual published Google Sheet URL
        const sheetUrl =
            "https://docs.google.com/spreadsheets/d/2PACX-1vS4LC3Il-CiUOv-S-PY51q8q09t1VGWr3eFOL2HmkT3If1Q8BhGgnuOW3ntbP0g4H5lyAJx16Y1S-tF/gviz/tq?tqx=out:json";

        const res = await fetch(sheetUrl);
        const text = await res.text();

        // The response from gviz starts with "/*O_o*/" so we strip it off
        const json = JSON.parse(text.substring(47).slice(0, -2));
        const rows = json.table.rows;

        // Adjust these indexes based on your sheet columns
        // Example: [0: Timestamp, 1: BusinessName, 2: Email, 3: Theme, 4: LiveURL]
        const projects = rows.map((r) => ({
            timestamp: r.c[0]?.v,
            businessName: r.c[1]?.v,
            email: r.c[2]?.v,
            theme: r.c[3]?.v,
            liveUrl: r.c[4]?.v,
        }));

        // Return only this user's projects
        return projects.filter(
            (p) => p.email?.trim().toLowerCase() === userEmail?.trim().toLowerCase()
        );
    } catch (err) {
        console.error("❌ Error fetching projects:", err);
        return [];
    }
}
