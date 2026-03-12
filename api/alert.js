require('dotenv').config();
const { getWaveData } = require('../lib/waves');
const { sendWhatsApp } = require('../lib/whatsapp');
const beaches = require('../beaches');

export default async function handler(req, res) {
    try {
        let message = '*Previsao de Ondas*\n\n';

        for (const beach of beaches) {
            const data = await getWaveData(beach.lat, beach.lon);
            message += `*${beach.name}*\n`;
            message += `Altura: ${data.waveHeight}m\n`;
            message += `Periodo: ${data.wavePeriod}s\n`;
            message += `Direcao: ${data.waveDirection}°\n\n`;
        }

        await sendWhatsApp(message);

        res.status(200).json({ success: true, message: 'Alerta enviado!' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}