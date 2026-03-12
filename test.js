require('dotenv').config();
const { getWaveData } = require('./lib/waves');
const { sendWhatsApp } = require('./lib/whatsapp');
const beaches = require('./beaches');

async function test() {
    let message = '*Previsao de Ondas*\n\n';

    for (const beach of beaches) {
        const data = await getWaveData(beach.lat, beach.lon);
        message += `*${beach.name}*\n`;
        message += `Altura: ${data.waveHeight}m\n`;
        message += `Periodo: ${data.wavePeriod}s\n`;
        message += `Direcao: ${data.waveDirection}°\n\n`;
    }

    console.log(message);
    await sendWhatsApp(message);
}

test();