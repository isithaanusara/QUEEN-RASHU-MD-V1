const axios = require("axios");
const fetch = require("node-fetch");
const {
  sleep
} = require("../lib/functions");
const {
  cmd,
  commands
} = require('../command');
const config = {
  pattern: "loading",
  react: "⬇️",
  filename: __filename
};

cmd(config, async (sendMessage, message, args, { from, q, sender, reply }) => {
  try {
    const loadingStates = [
      "[■□□□□□□□□□□□]", "[■■■□□□□□□□□□]", "[■■■■■□□□□□□□]", "[■■■■■■■□□□□□]",
      "[■■■■■■■■■□□□]", "[■■■■■■■■■■□□]", "[■■■■■■■■■■■□]", "[■■■■■■■■■■■■]",
      "[■□□□□□□□□□□□]", "[■■■□□□□□□□□□]", "[■■■■■□□□□□□□]", "[■■■■■■■□□□□□]",
      "[■■■■■■■■■□□□]", "[■■■■■■■■■■□□]", "[■■■■■■■■■■■□]", "[■■■■■■■■■■■■]",
      "[■□□□□□□□□□□□]", "[■■■□□□□□□□□□]", "[■■■■■□□□□□□□]", "[■■■■■■■□□□□□]",
      "[■■■■■■■■■□□□]", "[■■■■■■■■■■□□]", "[■■■■■■■■■■■□]", "[■■■■■■■■■■■■]",
      "[■□□□□□□□□□□□]", "[■■■□□□□□□□□□]", "[■■■■■□□□□□□□]", "[■■■■■■■□□□□□]",
      "[■■■■■■■■■□□□]", "[■■■■■■■■■■□□]", "[■■■■■■■■■■■□]", "[■■■■■■■■■■■■]",
      "*මොනාත් නෑ ලෝඩ් උනාට*"
    ];
    
    const initialMessage = {
      text: "...."
    };
    const messageOptions = {
      quoted: message
    };
    
    let { key: messageKey } = await sendMessage(from, initialMessage, messageOptions);
    
    for (let i = 0; i < loadingStates.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const updateMessage = {
        text: loadingStates[i],
        edit: messageKey
      };
      await sendMessage(from, updateMessage);
    }
  } catch (error) {
    reply("❗ Error: " + error);
  }
});
