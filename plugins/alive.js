const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["online", "bot", "info"],
    desc: "Check The Queen Rashu Md Bot Online Test",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `[ •  𝙱 𝙾 𝚃 _ 𝙾 𝚆 𝙽 𝙴 𝚁 ‎ • ]*
*╭┈───────────────•*
*│  ◦* *𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃*
*╰┈───────────────•*

*[ •  𝙱 𝙾 𝚃 _ 𝚁 𝙴 𝙿 𝙾 ‎ • ]*
*╭┈───────────────•*
*│  ◦* *https://github.com/NipunHarshana0/QUEEN-RASHU-MD-V1*
*╰┈───────────────•*

*[ •  𝚈 𝙾 𝚄 𝚃 𝚄 𝙱 𝙴 • ]*
*╭┈───────────────•*
*│  ◦*https://youtube.com/@rashumodz_0715?si=5pg_wumwy6VzizMP*
*╰┈───────────────•*
* *[ •  𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 - 𝚄𝙿𝚃𝙸𝙼𝙴‎ • ]*
*╭┈───────────────•*
*│  ◦* *_UPTIME:➠_*
*│  ◦* ${runtime(process.uptime())}
*│  ◦*
*│  ◦* *_RAM USAGE:➠_*
*│  ◦* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*│  ◦*
*│  ◦* *_HOSTNAME:➠_*
*│  ◦* ${os.hostname()}
*│  ◦*
*╰┈───────────────•*

*•────────────⥁⥁•⟢*
> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*
*•────────────⥁⥁•⟢*`;

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
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

cmd({
    pattern: "system",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: QUEEN-RASHU-MD
┃◈┃• *🧬 Version*: 1.0.0
┃◈└───────────┈⊷
╰──────────────┈⊷
> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

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
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

