const fetch = require('node-fetch');

async function sendWhatsApp(message) {
    const phone = process.env.CALLMEBOT_PHONE;
    const apikey = process.env.CALLMEBOT_APIKEY;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodedMessage}&apikey=${apikey}`;

    const response = await fetch(url);
    const body = await response.text();

    console.log('Resposta CallMeBot:', body);

}

module.exports = { sendWhatsApp };