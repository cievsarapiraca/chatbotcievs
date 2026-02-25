#!/bin/bash

# Check for Node.js installation
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Please install it before running this script."
    exit 1
fi

# Navigate to the project directory (if needed)
# cd /path/to/your/project

# Install dependencies
npm install

# Create .env file
cat <<EOL > .env
# WhatsApp Chatbot Configuration

# Your WhatsApp API credentials
WHATSAPP_API_KEY=your_api_key_here
WHATSAPP_API_SECRET=your_api_secret_here

# Additional environment variables as needed
EOL

echo "Setup completed successfully!"