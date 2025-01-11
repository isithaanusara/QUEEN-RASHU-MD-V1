const moment = require("moment-timezone");
 const { fetchJson, cmd, tlang } = require("../lib");
 const axios = require("axios");
 const fetch = require("node-fetch");
 const gis = require("async-g-i-s");
 
cmd({
   pattern: "google",
   alias: ["search", "gs"],
   category: "search",
   desc: "Sends info of given query from Google Search.",
   use: "<text>",
   filename: __filename
 }, async (Void, citel, text) => {
   if (!text) return citel.reply("Give me a query.\nExample: .google Who is Suhail Tech.");
 
   const google = require("google-it");
   const res = await google({ query: text });
   let msg = `Google Search Results for: ${text}\n\n`;
 
   res.forEach(g => {
     msg += `➣ Title: ${g.title}\n➣ Description: ${g.snippet}\n➣ Link: ${g.link}\n\n────────────────────────\n\n`;
   });
 
   return citel.reply(msg);
 });
 
 // Image search command
 cmd({
   pattern: "img",
   category: "search",
   desc: "Searches Image on Google",
   use: "<text>",
   filename: __filename
 }, async (Void, citel, text) => {
   if (!text) return citel.reply("Provide me a query!");
 
   const [name1, name2 = '1'] = text.split("|");
   citel.reply(`Sending ${name2} image(s) of ${name1} in chat`);
 
   for (let i = 0; i < name2; i++) {
     const images = await gis(name1);
     const imageUrl = images[Math.floor(Math.random() * images.length)].url;
     const buttonMessage = {
       image: { url: imageUrl },
       caption: `_Sector Image Search_\n*${name1}*`,
       headerType: 4
     };
 
    Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });
   }
 });
