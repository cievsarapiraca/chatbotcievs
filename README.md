# WhatsApp Chatbot Setup and Usage Documentation

Welcome to the WhatsApp Chatbot! This documentation provides a comprehensive guide on how to set up and use the chatbot with QR Code connection.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Connecting to WhatsApp](#connecting-to-whatsapp)
5. [Running the Chatbot](#running-the-chatbot)
6. [Usage](#usage)

## Prerequisites
- Node.js (version x.x.x or higher)
- npm (Node Package Manager)
- A WhatsApp account

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/cievsarapiraca/chatbotcievs.git
   cd chatbotcievs
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
Before running the chatbot, you may need to configure some settings. Edit the `config.js` file to set your preferred options.

## Connecting to WhatsApp
1. Start the application. This will generate a QR code:
   ```bash
   npm start
   ```
2. Open WhatsApp on your phone, go to the settings, and select "Linked Devices."
3. Scan the QR code displayed in the command line interface.
4. Wait for the connection to be established.

## Running the Chatbot
Once connected, you can run the chatbot with the following command:
```bash
npm run chat
```

## Usage
- Send messages to the chatbot through WhatsApp.
- The chatbot will respond based on the predefined logic in the code.

For any issues or feature requests, please raise an issue in the GitHub repository.