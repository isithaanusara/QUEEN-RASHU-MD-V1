const axios = require("axios");
const fetch = require("node-fetch");
const {
  sleep
} = require("../lib/functions");
const {
  cmd,
  commands
} = require('../command');
cmd({
  pattern: "alive2",
  desc: "bbh.",
  category: "loading alive",
  react: '👋',
  filename: __filename
}, async (client, message, args, { from, reply }) => {
  try {
    const sentMessage = await client.sendMessage(from, { text: '> *𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐀𝐋𝐈𝐕𝐄*' });
    const heartSequence = ['Loading . . . ', 'Nipun Harshana', '▰▰▰▱▱▱▱▱▱▱▱▱ 10%', '▰▰▰▰▱▱▱▱▱▱▱▱ 20%', '▰▰▰▰▰▱▱▱▱▱▱▱ 30%', '▰▰▰▰▰▰▱▱▱▱▱▱ 40%', '▰▰▰▰▰▰▰▱▱▱▱▱ 50%', '▰▰▰▰▰▰▰▰▱▱▱▱ 60%', '▰▰▰▰▰▰▰▰▰▱▱▱ 70%', '▰▰▰▰▰▰▰▰▰▰▱▱ 80%', '▰▰▰▰▰▰▰▰▰▰▰▱ 90%', '▰▰▰▰▰▰▰▰▰▰▰▰ 100%', 'COMPLETE LOADING ☘️👋','ALIVE NOW', '👋 𝑯𝒚𝒆  𝑰 𝑨𝒎 𝑶𝒏𝒍𝒊𝒏𝒆 𝑵𝒐𝒘\n\n*♡︎•━━ ❖ 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 ❖ ━━•♡︎*\n\n> ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}\n> ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\n> ʜᴏꜱᴛ ɴᴀᴍᴇ : ${os.hostname()}\n> ᴏᴡɴᴇʀ : 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃\n\n> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*'];

    for (const heart of heartSequence) {
      await new Promise(resolve => setTimeout(resolve, 500));
      await client.relayMessage(from, {
        protocolMessage: {
          key: sentMessage.key,
          type: 14,
          editedMessage: {
            conversation: heart
          }
        }
      }, {});
    }
  } catch (error) {
    console.log(error);
    reply("❌ *Error!* " + error.message);
  }
});
