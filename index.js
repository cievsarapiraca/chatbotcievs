const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

// Initialize the WhatsApp client
const client = new Client();

// Generate and display the QR code for authentication
client.on('qr', (qr) => {
    // Generate and display QR code in terminal
    qrcode.generate(qr, { small: true });
});

// When authenticated
client.on('authenticated', () => {
    console.log('Authenticated successfully!');
});

// When the client is ready
client.on('ready', () => {
    console.log('Client is ready!');
});

// Initialize the client
client.initialize();
