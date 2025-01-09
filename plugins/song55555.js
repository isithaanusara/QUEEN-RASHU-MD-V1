const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); // request package.json "@dark-yasiya/yt-dl.js": "latest"

cmd({
    pattern: "song55555",
    alias: ["ytmp5", "ytsong5"],
    react: "🎶",
    desc: "Download Youtube song",
    category: "download",
    use: '.song < Yt url or Name >',
    filename: __filename
},
async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
    try {
        if (!q) return await reply("Please give me Yt url or Name");

        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("Results not found!");

        let yts = yt.results[0];
        const ytdl = await ytmp3(yts.url);

        let ytmsg = `*🎶 HASHI MD YT DOWNLOAD 🎶*

🎵 *TITLE :* ${yts.title}
🤵 *AUTHOR :* ${yts.author.name}
⏱ *RUNTIME :* ${yts.timestamp}
👀 *VIEWS :* ${yts.views}
🖇️ *URL :* ${yts.url}

> *© CREATED BY LAKSIDU NIMSARA*

*Reply with a number:*
1. Download Audio
2. Download Document`;
        
       
        await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: `${ytmsg}`}, { quoted: mek });

   
        const filter = (message) => message.from === from && message.text;
        const userReply = await conn.waitForMessage(filter);

        if (userReply) {
            const selectedOption = userReply.text.trim();

            switch (selectedOption) {
                case '1':
             
                    await conn.sendMessage(from, { audio: { url: ytdl.download.url }, mimetype: "audio/mpeg" }, { quoted: mek });
                    break;

                case '2':
            
                    await conn.sendMessage(from, { document: { url: ytdl.download.url }, mimetype: "audio/mpeg", fileName: ytdl.result.title + '.mp3', caption: `${ytdl.result.title}` }, { quoted: mek });
                    break;

                default:
                    reply("Invalid option. Please reply with 1 for audio or 2 for document.");
            }
        } else {
            reply("You did not reply with a valid option.");
        }
    } catch (e) {
        console.log(e);
        reply("An error occurred while processing your request.");
    }
});
