const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    react: "🎛️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃 𝐒𝐘𝐒𝐓𝐄𝐀𝐌*\n\n\n\n* Ram usage:- *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*\n\n* Run Time:- *_${runtime(process.uptime())}_*\n\n\* Platform:- *${os.hostname()}\n\n\* Owners:- *Nipun Harshana*\n\n\* Version:- *1.0.0*\n\n\> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*
`
return reply(`${status}`)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "boom",
    desc: "Send a custom message any number of times (owner only).",
    category: "main",
    react: "💣",
    filename: __filename
},
async (conn, mek, m, { from, args, senderNumber, isOwner, reply }) => {
    try {
        if (!isOwner) {
            return reply('❌ This command is restricted to the owner only.');
        }
        const count = parseInt(args[0]) || 10;
        const customText = args.slice(1).join(' ') || 'Boom!';
        for (let i = 0; i < count; i++) {
            await conn.sendMessage(from, { text: customText });
        }
        reply(`✅ Sent ${count} messages.`);
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
