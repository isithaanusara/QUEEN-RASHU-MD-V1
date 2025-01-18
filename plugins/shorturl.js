const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');


cmd({
  pattern: 'tinyurl',
  alias: ['tiny', 'shorten', 'short', 'shorturl'],
  react: '🍒',
  desc: 'Shorten a URL using TinyURL or ShortURL.',
  category: 'main',
  filename: __filename
}, async (conn, mek, m, {
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
    if (!q) return reply('Please provide a URL to shorten.');

    await reply('> *Queen Rashu Md Processing...*');

    let apiUrl = '';
    if (command === 'tiny' || command === 'tinyurl') {
      apiUrl = `https://api.giftedtech.web.id/api/tools/tinyurl?apikey=gifted&url=${encodeURIComponent(q)}`;
    } else {
      apiUrl = `https://api.giftedtech.web.id/api/tools/shorturl?apikey=gifted&url=${encodeURIComponent(q)}`;
    }

    await reply('> *Queen Rashu Md Shortening URL...*');

    const response = await fetchJson(apiUrl);
    const result = response.result;

    const caption = ` \`QUEEN RASHU MD URL SHORTENER\` \n\n\n*Original Link:* ${q}\n\n*Shortened Link:* ${result}\n\n> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

   /* await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
*/
 // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/DR0k2XM/mrfrankofc.jpg` },  // Image URL
            caption: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363368882758119@newsletter',
                    newsletterName: '『 𝐐𝐔𝐄𝐄𝐄 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 』',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in shortining URL:", e);
        reply(`An error occurred: ${e.message}`);
    }
});