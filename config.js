const config = {
    environment: process.env.NODE_ENV || 'development',
    botSettings: {
        token: process.env.BOT_TOKEN,
        prefix: process.env.BOT_PREFIX || '!',
        debug: process.env.BOT_DEBUG === 'true',
    },
};

module.exports = config;