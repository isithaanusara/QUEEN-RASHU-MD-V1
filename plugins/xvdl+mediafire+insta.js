const { fetchJson } = require("../lib/functions");
const cheerio = require("cheerio");
const { igdl } = require("ruhend-scraper");
const axios = require('axios');
const { cmd, commands } = require("../command");
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');
const apilink = 'https://www.dark-yasiya-api.site'
const apkdl = require('../lib/apkdl')

cmd({
    pattern: "xnxx",
    alias: ["xvdl","xvdown"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    use: '.xvideo < text >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("Please give me few word !")
    
const xv_list = await fetchJson(`${apilink}/search/xvideo?q=${q}`)
if(xv_list.result.length < 0) return await reply("Not results found !")

const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${xv_list.result[0].url}`)
    
  // FIRST VIDEO
  
const msg = `
╭═════════════════○
│*𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃 XVIDEO DOWNLOADER 🔞*
╰═════════════════○
═════════════════○
╭═════════════════○
│ *ℹ️ 𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃* 
│
│🕯️ ⦁ *Title* - ${xv_info.result.title}
│👁️ ⦁ *Views* - ${xv_info.result.views}
│🌀 ⦁ *Like* - ${xv_info.result.like}
│🏷️ ⦁ *Deslike* - ${xv_info.result.deslike}
│📚 ⦁ *Size* - ${xv_info.result.size}
╰═════════════════○

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*
`


await conn.sendMessage( from, { image: { url: xv_info.result.image || '' }, caption: msg }, { quoted: mek })

// XVIDEO
await conn.sendMessage(from, { video: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });

// SEND VIDEO
await conn.sendMessage(from, { document: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });


} catch (error) {
console.log(error)
reply(error)
}
})

