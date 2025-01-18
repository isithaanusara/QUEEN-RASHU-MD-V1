const { cmd, commands } = require("../command");
const { fetchJson } = require("../lib/functions");

cmd({
  pattern: 'ai',
  alias: ["chatgpt", "gpt"],
  react: '🤖',
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (_context, _event, _args, {
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
      return reply("Please ask a question or provide input for the AI.");
    }
    const aiResponse = await fetchJson('https://api.davidcyriltech.my.id/ai/gpt4omini?text=' + q);
    console.log(aiResponse);
    if (!aiResponse.message) {
      return reply("No response from the AI.");
    }
    return reply(" `🤖 QUEEN RASHU MD AI RESPONSE:` \n\n" + aiResponse.message);
  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});

//=================( )=================

cmd({
  pattern: "mistraai",
  alias: ["mistra", "zimai"],
  react: '🪄',
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (_context, _event, _args, {
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
      return reply("Please ask a question or provide input for the AI.");
    }
    const aiResponse = await fetchJson('https://pikabotzapi.vercel.app/ai/mistral/?apikey=anya-md&message=' + q);
    console.log(aiResponse);
    if (!aiResponse.message) {
      return reply("No response from the AI.");
    }
    return reply(" `🤖 QUEEN RASHU MD MISTRA AI:` \n\n" + aiResponse.message);
  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});

//=================( )=================

cmd({
  pattern: "gpt3",
  alias: ["gptturbo", "chatgpt3"],
  react: '😇',
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (_context, _event, _args, {
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
      return reply("Please ask a question or provide input for the AI.");
    }
    const aiResponse = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt3?text=" + q);
    console.log(aiResponse);
    if (!aiResponse.message) {
      return reply("No response from the AI.");
    }
    return reply(" `🤖 QUEEN RASHU MD CHATGPT 3:` \n\n" + aiResponse.message);
  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});

//=================( )=================

cmd({
  pattern: 'gpt4',
  alias: ['ai4', 'chatgpt4'],
  react: '🪄',
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (message, match, metadata, {
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
      return reply("Please ask a question or provide input for the AI.");
    }
    const response = await fetchJson(`https://api.davidcyriltech.my.id/ai/gpt4omini?text=${q}`);
    console.log(response);
    if (!response.message) {
      return reply("No response from the AI.");
    }
    return reply(`🤖 QUEEN RASHU MD CHATGPT 4: \n\n${response.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//=================( )=================

cmd({
  pattern: "llama3",
  alias: ["llama", "model3"],
  react: '✅',
  desc: "AI chat.",
  category: 'main',
  filename: __filename
}, async (message, match, metadata, {
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
      return reply("Please ask a question or provide input for the AI.");
    }
    const response = await fetchJson(`https://api.davidcyriltech.my.id/ai/llama3?text=${q}`);
    console.log(response);
    if (!response.message) {
      return reply("No response from the AI.");
    }
    return reply(`🤖 QUEEN RASHU MD LLAM AI: \n\n${response.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//=================( )=================

cmd({
  pattern: "metai",
  alias: ["meta", "llama2"],
  react: '🔄',
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (message, match, metadata, {
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
      return reply("Please ask a question or provide input for the AI.");
    }
    const response = await fetchJson(`https://api.davidcyriltech.my.id/ai/metaai?text=${q}`);
    console.log(response);
    if (!response.message) {
      return reply("No response from the AI.");
    }
    return reply(`🤖 QUEEN RASHU MD META AI: \n\n${response.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

//=================( )=================

cmd({
  pattern: 'gpt4o',
  alias: ['ai4', 'chatgpt4'],
  react: '🟢',
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (message, match, metadata, {
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
      return reply("Please ask a question or provide input for the AI.");
    }
    const response = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + q);
    console.log(response);
    if (!response.message) {
      return reply("No response from the AI.");
    }
    return reply(`🤖 QUEEN RASHU MD CHATGPT 4o: \n\n${response.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});

cmd({
  pattern: "gemini",
  alias: ['bard', 'bing'],
  react: '⏳',
  desc: "AI chat.",
  category: "main",
  filename: __filename
}, async (message, match, metadata, {
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
      return reply("Please ask a question or provide input for the AI.");
    }
    const response = await fetchJson('https://api.davidcyriltech.my.id/ai/gpt4omini?text=' + q);
    console.log(response);
    if (!response.message) {
      return reply("No response from the AI.");
    }
    return reply(`🤖 QUEEN RASHU MD GOOGLE AI: \n\n${response.message}`);
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});


