const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video2

cmd({
    pattern: "video",
    alias: ["video2", "ytvideo", "ytdl"],
    react: "🎥",
    desc: "Download YouTube video with selectable quality",
    category: "main",
    use: '.play4 <Yt url or Name>',
    filename: __filename
},
async (conn, mek, m, { from, prefix, quoted, q, reply, waitForReply }) => {
    try {
        if (!q) return await reply("Please provide a YouTube URL or Name");

        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");

        let yts = yt.results[0];

        let ytmsg = `╭━━━〔 *𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃* 〕━━━╮

* *ʋιԃҽσ ԃαɯɳʅσαԃιɳɠ 🎥*

╰──────────────────────╯
╭━┉┉┉┉┉┉┉┉┉┉┉┉━❐━⪼
┇๏ *𝑻𝒊𝒕𝒍𝒆* -  _${yts.title}_
┇๏ *𝑫𝒖𝒓𝒂𝒕𝒊𝒐𝒏* - _${yts.timestamp}_
┇๏ *𝑽𝒊𝒆𝒘𝒔* -  _${yts.views}_
┇๏ *𝑨𝒖𝒕𝒉𝒐𝒓* -  _${yts.author.name}_
┇๏ *𝑳𝒊𝒏𝒌* -  _${yts.url}_
╰━┉┉┉┉┉┉┉┉┉┉┉┉━❑━⪼

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

        // Send video details
        await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: `${ytmsg}` }, { quoted: mek });

        let quality = "360p"; // Directly set quality to 360p
        const ytdl = await ytmp4(yts.url, quality);
        if (!ytdl.download.url) return reply("Failed to get the download link!");

        // Send video file
        await conn.sendMessage(from, {
            video: { url: ytdl.download.url },
            mimetype: "video/mp4",
            caption: `> *${yts.title}*\n> *Quality: ${quality}*\n\n\n> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(e.message || "An error occurred!");
    }
});

// play2

cmd({
    pattern: "song",
    alias: ["audio2","ytdl2","ytsong2"],
    react: "🎧",
    desc: "Download Youtube song",
    category: "main",
    use: '.song < Yt url or Name >',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{

if(!q) return await reply("Please give me Yt url or Name")
	
const yt = await ytsearch(q);
if(yt.results.length < 1) return reply("Results is not found !")

let yts = yt.results[0]  
const ytdl = await ytmp3(yts.url)
		
let ytmsg = `╭━━━〔 *𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃* 〕━━━╮

* ʂσɳɠ ԃαɯɳʅσαԃιɳɠ 🎧

╰──────────────────────╯
╭━┉┉┉┉┉┉┉┉┉┉┉┉━❐━⪼
┇๏ *𝑻𝒊𝒕𝒍𝒆* -  _${yts.title}_
┇๏ *𝑫𝒖𝒓𝒂𝒕𝒊𝒐𝒏* - _${yts.timestamp}_
┇๏ *𝑽𝒊𝒆𝒘𝒔* -  _${yts.views}_
┇๏ *𝑨𝒖𝒕𝒉𝒐𝒓* -  _${yts.author.name}_
┇๏ *𝑳𝒊𝒏𝒌* -  _${yts.url}_
╰━┉┉┉┉┉┉┉┉┉┉┉┉━❑━⪼

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`
// SEND DETAILS
await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: `${ytmsg}`}, { quoted: mek });

// SEND AUDIO TYPE
await conn.sendMessage(from, { audio: { url: ytdl.download.url }, mimetype: "audio/mpeg" }, { quoted: mek })

// SEND DOC TYPE
await conn.sendMessage(from, { document: { url: ytdl.download.url }, mimetype: "audio/mpeg", fileName: ytdl.result.title + '.mp3', caption: `> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*` }, { quoted: mek })


} catch (e) {
console.log(e)
reply(e)
}}
)

const commandDetails = {
  pattern: "video99",
  alias: ["ytvideo99"],
  desc: "Download Song / Video",
  use: ".play Title",
  react: "🎬",
  category: "download",
  filename: __filename
};

cmd(commandDetails, async (client, message, chat, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const statusBroadcast = { remoteJid: "status@broadcast" };
    const participantData = {
      participant: "0@s.whatsapp.net",
      ...(chat ? statusBroadcast : {})
    };
    const locationMessage = {
      name: "✨ ...𝐌𝐚𝐧𝐮-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭 𝐁𝐲 - : 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥... 💗",
      thumbnailUrl: "https://i.ibb.co/XZFdhy0/IMG-20250102-WA0065.jpg"
    };
    const quotedMessage = {
      key: participantData,
      message: { locationMessage }
    };

    if (!q) {
      return reply("Please provide a title.");
    }

    const query = convertYouTubeLink(q);
    const searchResults = await yts(query);
    const videoDetails = searchResults.videos[0];
    const responseMessage = `
*💚🎵 𝐘𝐓 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🎵💚*
      
> *➤ Title:* ${videoDetails.title}
> *➤ Views:* ${videoDetails.views}
> *➤ DESCRIPTION:* ${videoDetails.description}
> *➤ TIME:* ${videoDetails.timestamp}
> *➤ AGO:* ${videoDetails.ago}
> ⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚`;

    await client.sendMessage(chat, {
      document: fs.readFileSync("./package.json"),
      fileName: "©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚",
      mimetype: "application/pdf",
      caption: responseMessage,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: "© 𝐌𝐚𝐧𝐮𝐥 𝐎𝐟𝐜 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭.💗",
          thumbnailUrl: videoDetails.thumbnail,
          sourceUrl: "https://mr-manul-official-web.vercel.app/"
        }
      }
    }, { quoted: quotedMessage });

    const apiData = (await axios.get("https://raw.githubusercontent.com/User-King-X-999/MANUX-DB/refs/heads/main/API.json")).data;
    const videoApiUrl = apiData.VIDEO;
    const videoData = await fetchJson(videoApiUrl + videoDetails.url);
    const downloadUrl = videoData.result.download_url;

    const videoMessage = {
      video: { url: downloadUrl },
      mimetype: "video/mp4",
      caption: "> ⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚"
    };

    await client.sendMessage(from, videoMessage, { quoted: quotedMessage });

    await client.sendMessage(from, {
      document: { url: downloadUrl },
      mimetype: "video/mp4",
      fileName: `${videoDetails.title}.mp4`,
      caption: "> ⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚"
    }, { quoted: quotedMessage });

  } catch (error) {
    reply("*Error !!*");
    console.error(error);
  }
});
