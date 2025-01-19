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
  pattern: "loading",
  desc: "bbh.",
  category: "loading",
  react: '😁',
  filename: __filename
}, async (client, message, args, { from, reply }) => {
  try {
    const sentMessage = await client.sendMessage(from, { text: '❤️' });
    const heartSequence = ['Loading . . . ', 'Start Loading😉', '▰▱▱▱▱▱▱▱▱▱▱▱ 10%', '▰▰▱▱▱▱▱▱▱▱▱▱ 20%', '▰▰▰▱▱▱▱▱▱▱▱▱ 30%', '▰▰▰▰▱▱▱▱▱▱▱▱ 40%', '▰▰▰▰▰▱▱▱▱▱▱▱ 50%', '▰▰▰▰▰▰▰▱▱▱▱▱ 60%', '▰▰▰▰▰▰▰▰▱▱▱▱ 70%', '▰▰▰▰▰▰▰▰▰▰▱▱ 80%', '▰▰▰▰▰▰▰▰▰▰▰▱ 90%', '▰▰▰▰▰▰▰▰▰▰▰▰ 100%', 'COMPLETE LOADING ☘️👋', '😉☘️', '😉', '🥰', '💘', '💝', '♥️', '💟', '🫀', 'QUEEN RASHU MD'];

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


Loading . . . 

▰▱▱▱▱▱▱▱▱▱▱▱ 10%
▰▰▱▱▱▱▱▱▱▱▱▱ 20%
▰▰▰▱▱▱▱▱▱▱▱▱ 30%
▰▰▰▰▱▱▱▱▱▱▱▱ 40%
▰▰▰▰▰▱▱▱▱▱▱▱ 50%
▰▰▰▰▰▰▰▱▱▱▱▱ 60%
▰▰▰▰▰▰▰▰▱▱▱▱ 70%
▰▰▰▰▰▰▰▰▰▰▱▱ 80%
▰▰▰▰▰▰▰▰▰▰▰▱ 90%
▰▰▰▰▰▰▰▰▰▰▰▰ 100%