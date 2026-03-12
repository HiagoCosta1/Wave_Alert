const beaches = [
    { name: "Modulo 2", lat: "-23.81479030859816", lon: "-46.03854488511348" },
    { name: "Frente Casa - VL", lat: "-23.81430439092693", lon: "-46.064640055790065" },
    { name: "Frente Casa - Thi", lat: "-23.815289697718132", lon: "-46.05447492976146" },
    { name: "Frente Half", lat: "-23.846120910787985", lon: "-46.13048625061682" }

];

module.exports = beaches;

// uma lista que contem objetos com 3 propriedades(name, lat, lon);

// arquivo que vou salvar as informações das praias e pode disponibilizar para qualquer outro arquivo
// do projeto, usando const beaches = require('./beaches');
// Caso precise adicionar mais praias, basta adicionar no array beaches