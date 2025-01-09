const { cmd, commands } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');

cmd({
  pattern: "song",
  react: "🎵",
  alias: ["ytmp3", "mp3"],
  desc: "Download Your Songs.",
  category: "download",
  filename: __filename
}, async (client, message, chat, {
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
    if (!q) {
      return reply("*❌ Provide a title or URL*");
    }

    const searchResults = await ytsearch(q);
    if (searchResults.results.length < 1) {
      return reply("*❌ No results found!*");
    }

    const firstResult = searchResults.results[0];
    const downloadInfo = await ytmp3(firstResult.url);

    let messageCaption = `
🎶 *𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐀𝐖𝐍𝐋𝐎𝐃𝐄𝐑* 📥

🎵 *TITEL :* ${firstResult.title}
🤵 *AUTHOR :* ${firstResult.author.name}
⏱ *DURATION :* ${firstResult.timestamp}
👀 *VIEWS :* ${firstResult.views}
🖇️ *URL :* ${firstResult.url}

*📥 CHOOSE A DAWNLOAD FORMAT;*

1️⃣ AUDIO FILE 
2️⃣ DOCUMENT FILE

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*
`;

    const sentMessage = await client.sendMessage(from, {
      image: { url: firstResult.thumbnail || firstResult.image || '' },
      caption: messageCaption
    }, { quoted: message });

    client.ev.on('messages.upsert', async update => {
      const newMessage = update.messages[0];
      if (!newMessage.message || !newMessage.message.extendedTextMessage) return;

      if (newMessage.message.extendedTextMessage.contextInfo &&
          newMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {
        const userChoice = newMessage.message.extendedTextMessage.text.trim();

        try {
          switch (userChoice) {
            case '1':
              await client.sendMessage(from, {
                audio: { url: downloadInfo.download.url },
                mimetype: 'audio/mpeg'
              }, { quoted: message });
              break;

            case '2':
              await client.sendMessage(from, {
                document: { url: downloadInfo.download.url },
                mimetype: 'audio/mpeg',
                fileName: `${downloadInfo.result.title}.mp3`,
                caption: "> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*"
              }, { quoted: message });
              break;

            default:
              reply("Invalid option. Please select a valid option 🔴");
          }
        } catch (err) {
          console.error(err);
          reply(`${err}`);
        }
      }
    });
  } catch (err) {
    console.error(err);
    await client.sendMessage(from, {
      react: { text: '❌', key: message.key }
    });
    reply(`${err}`);
  }
});

cmd({
  pattern: "video",
  react: "📽️",
  alias: ["ytmp4", "mp4"],
  desc: "Download YouTube Videos.",
  category: "download",
  filename: __filename
}, async (bot, message, args, context) => {
  const {
    from,
    quoted,
    body,
    isCmd,
    command,
    args: cmdArgs,
    q: query,
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
  } = context;

  try {
    if (!query) {
      return reply("*❌ Provide a title or URL*");
    }

    const searchResults = await ytsearch(query);

    if (searchResults.results.length < 1) {
      return reply("*❌ No results found!*");
    }

    const videoDetails = searchResults.results[0];
    const downloadInfo = await ytmp4(videoDetails.url);

    let messageCaption = `*🎧 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐕𝐈𝐃𝐄𝐎 𝐃𝐀𝐖𝐍𝐋𝐎𝐃𝐄𝐑📥*\n\n🎵 *TITLE :* ${videoDetails.title}\n\n🤵 *AUTHOR :* ${videoDetails.author.name}\n\n⏱ *RUNTIME :* ${videoDetails.timestamp}\n\n👀 *VIEWS :* ${videoDetails.views}\n\n🖇️ *URL :* ${videoDetails.url}\n\n*📥 CHOOSE A DAWNLOAD FORMAT;*\n\n1️⃣ VIDEO FILE\n2️⃣ DOCUMENT FILE\n\n> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

    const sentMessage = await bot.sendMessage(from, {
      image: { url: videoDetails.thumbnail || videoDetails.image || '' },
      caption: messageCaption
    }, { quoted: message });

    bot.ev.on("messages.upsert", async (event) => {
      const userMessage = event.messages[0];
      if (!userMessage.message || !userMessage.message.extendedTextMessage) return;

      if (userMessage.message.extendedTextMessage.contextInfo &&
          userMessage.message.extendedTextMessage.contextInfo.stanzaId === sentMessage.key.id) {

        const userOption = userMessage.message.extendedTextMessage.text.trim();

        try {
          switch (userOption) {
            case '1':
              await bot.sendMessage(from, {
                video: { url: downloadInfo.download.url },
                mimetype: "video/mp4"
              }, { quoted: message });
              break;

            case '2':
              await bot.sendMessage(from, {
                document: {
                  url: downloadInfo.download.url,
                  mimetype: 'video/mp4',
                  fileName: `${downloadInfo.result.title}.mp4`,
                  caption: "> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*"
                }
              }, { quoted: message });
              break;

            default:
              reply("Invalid option. Please select a valid option 🔴");
          }
        } catch (error) {
          console.log(error);
          reply(`Error: ${error}`);
        }
      }
    });

  } catch (error) {
    console.log(error);
    reply(`Error: ${error}`);
  }
});
