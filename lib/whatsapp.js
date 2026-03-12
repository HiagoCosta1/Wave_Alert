const fetch = require('node-fetch');

async function sendWhatsApp(message) {
    const token = process.env.WHAPI_TOKEN;
    const to = process.env.WHAPI_TO;

    const response = await fetch('https://gate.whapi.cloud/messages/text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ to, body: message }),
    });

    const data = await response.json();
    console.log('Resposta Whapi:', data);
}

module.exports = { sendWhatsApp };