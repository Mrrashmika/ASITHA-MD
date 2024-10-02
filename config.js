const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=7QdQXJ4T#_MhNje-cRG4budhtWZ41II1hevnFzY2K4cq8kl9dCJ4",
MONGODB: process.env.MONGODB || "mongodb://mongo:ypiPXBRszwKoMcXtwNJKRfSRVElHkAUS@junction.proxy.rlwy.net:39391",//enter mongo db url
};

