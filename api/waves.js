const { getWaveData } = require('../lib/waves');
const beaches = require('../beaches');

export default async function handler(req, res) {
    try {
        const results = [];

        for (const beach of beaches) {
            const data = await getWaveData(beach.lat, beach.lon);
            results.push({ name: beach.name, ...data });
        }

        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}