const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "cm8TAJKL#C3e3K0NcSuYogfwT6Z_aZWoL5mcxkqEfeOJwvLwNCNo",
MONGODB: process.env.MONGODB || "mongodb://mongo:wFBjtvtYJCAnUnRgrDfADaUckFULbMOS@:",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BsjkCDP/9555.jpg",
BOT_NAME: process.env.BOT_NAME || "QUEEN-RASHU-MD",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
};
