import * as fs from 'fs';
import express = require('express');

interface ChartDataItem {
    Letter: string;
    Freq: number;
}

const app = express();
const PORT = 3000;

let cache: ChartDataItem[] | null = null;
let lastUpdate: number = 0;
const cacheTTL: number = 3000;  // Cache lifetime in milliseconds

function fetchData(): ChartDataItem[] | null {
    try {
        const rawData = fs.readFileSync('chart_data.json', 'utf-8');
        return JSON.parse(rawData);
    } catch (error) {
        console.error('Error reading or parsing chart_data.json', error);
        return null;
    }
}

app.get('/api/chart-data', (req, res) => {
    const currentTime = Date.now();

    if (currentTime - lastUpdate > cacheTTL || !cache) {
        cache = fetchData();
        lastUpdate = currentTime;
    }

    res.json(cache);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/api/chart-data`);
});
