const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "repo",
    alias: ["sc","mrrashu","deploy","reposity","github","info2"],
    desc: "Check The Queen Rashu Md Bot github",
    category: "main",
    react: "🌟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `*╭┉┉※𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐈𝐍𝐅𝐎※┉┉╮*\n\n\n*☬ ʋҽɾƚισɳ              :* _v0.1_\n*☬ ԃҽʋҽʅσρҽɾ        :* _Nipun Harshana_\n*☬ ɾҽρσ υʂҽɾɳαɱҽ :* _NipunHarshana0_\n\n*╭┉┉┉┉┉┉┉┉※ 𝐋𝐈𝐍𝐊𝐒 ※┉┉┉┉┉┉┉┉╮*\n\n* *𝑩𝑶𝑻 𝑮𝑰𝑻𝑯𝑼𝑩*
> https://github.com/NipunHarshana0/QUEEN-RASHU-MD-V1\n* *𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷 𝑮𝑹𝑶𝑼𝑷*\n> https://chat.whatsapp.com/LmfWnYTjh605xVz5J1tgnq\n* *𝑶𝑾𝑵𝑬𝑹 𝑪𝑶𝑵𝑻𝑨𝑪𝑻*\n> wa.me/94727319036\n* *𝒀𝑶𝑼𝑻𝑼𝑩𝑬 𝑪𝑯𝑨𝑵𝑵𝑬𝑳*\n> https://youtube.com/@rashumodz_0715?si=5pg_wumwy6VzizMP\n\n~𝘽𝙊𝙏 𝘾𝙊𝙈𝙈𝙄𝙉𝙂 𝙎𝙊𝙊𝙉~\n\n> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*
`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/BsjkCDP/9555.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363368882758119@newsletter',
                    newsletterName: 'QUEEN-RASHU-MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in repo command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});


