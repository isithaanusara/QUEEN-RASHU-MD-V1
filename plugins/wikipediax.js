const config = require('../config');
const { cmd, commands } = require('../command');
const wiki = require('wikijs').default; 

// Define the Wikipedia search command
cmd({
    pattern: "wiki",
    react: "📚",
    desc: "Search Wikipedia for information",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Check if a query was provided
        if (!q) {
            return reply('Please provide a search query.');
        }

        // Fetch summary from Wikipedia
        const page = await wiki().page(q);
        const summary = await page.summary();

        // Get the image (check if it exists)
        const images = await page.images();
        const imageUrl = images.length > 0 ? images[0] : null; // Use the first image if available

        // Format the reply
        let replyText = `
*📚 Wikipedia Summary 📚*

🔍 *Query*: _${q}_

💬 *Title*: _${summary.title}_

📝 *Summary*: _${summary.extract}_

🔗 *URL*: ${page.url()}

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

        // Send the reply with the image if available
        if (imageUrl) {
            await conn.sendMessage(from, { image: { url: imageUrl }, caption: replyText }, { quoted: mek });
        } else {
            // If no image, send text-only reply
            await conn.sendMessage(from, { text: replyText }, { quoted: mek });
        }

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
