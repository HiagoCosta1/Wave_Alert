const fetch = require('node-fetch');
// importar biblioteca node-fetch para fazer requisições HTTP

// função assíncrona que recebe latitude e longitude como parâmetros
async function getWaveData(lat, lon) {
    //monta a URL da requisição para a API open-meteo, usando lat e lon dinamicamente, pegando só os dados de hoje e usando fuso do brasil
    const url = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&hourly=wave_height,wave_period,wave_direction&forecast_days=1&timezone=America/Sao_Paulo`;

    //faz a requisição para a API
    const response = await fetch(url);
    //converte a resposta para JSON
    const data = await response.json();

    //pega a hora atual
    const now = new Date();
    const currentHour = now.getHours();

    //pega os dados da hora atual
    const waveHeight = data.hourly.wave_height[currentHour];
    const wavePeriod = data.hourly.wave_period[currentHour];
    const waveDirection = data.hourly.wave_direction[currentHour];

    //retorna os dados
    return {
        waveHeight,
        wavePeriod,
        waveDirection
    }
}

// exporta a função getWaveData para ser usada em outros arquivos
module.exports = { getWaveData };