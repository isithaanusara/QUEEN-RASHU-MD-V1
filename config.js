const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TRUgCCwJ#3lHXiDF8DA0cgkxdf-8Yjm9Onh39Z0LjoPUk5ghl9Mo",
MONGODB: process.env.MONGODB || "mongodb://mongo:ZVTCGNDYGVsavzvCobPMxKBHyfcdnHaZ@junction.proxy.rlwy.net:49951",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BsjkCDP/9555.jpg",
BOT_NAME: process.env.BOT_NAME || "QUEEN-RASHU-MD",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
};
