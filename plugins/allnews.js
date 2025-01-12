const {
  Buffer
} = require("buffer");
const axios = require("axios");
const {
  cmd,
  commands
} = require("../command");
const Esana = require("@sl-code-lords/esana-news");
var api = new Esana();
const DYXT_NEWS = require("@dark-yasiya/news-scrap");
const newss = new DYXT_NEWS();

const cmdDetails = {
  pattern: "lankadeepa",
  alias: ["lanka", "news4"],
  react: "📑",
  desc: '',
  category: "search",
  use: ".lankadeepa",
  filename: __filename
};

cmd(cmdDetails, async (bot, message, args, { from, quoted, reply }) => {
  try {
    // Fetch news from the Lankadeepa source
    const newsData = await newss.lankadeepa();

    // Format the message
    const newsMessage = `
      📑 *QUEEN RASHU MD LANKADEEPA NEWS* 📑
           
• *Title* - ${newsData.result.title}

• *News* - ${newsData.result.desc}

• *Date* - ${newsData.result.date}

• *Link* - ${newsData.result.url}

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

    // Prepare the image and caption
    const imageDetails = {
      url: newsData.result.image || ''
    };

    const messageDetails = {
      image: imageDetails,
      caption: newsMessage
    };

    const options = {
      quoted: message
    };

    // Send the message
    await bot.sendMessage(from, messageDetails, options);
  } catch (error) {
    console.error(error);
    reply(`Error:${e}`);
  }
});

const sirasaNewsCommand = {
  pattern: "sirasanews",
  alias: ["sirasa", "news2"],
  react: "🔺",
  desc: '',
  category: "search",
  use: ".sirasa",
  filename: __filename
};

cmd(sirasaNewsCommand, async (client, message, args, { from, quoted, reply }) => {
  try {
    const newsData = await newss.sirasa(); // Fetch Sirasa news
    const newsMessage = `
      🔺 *QUEEN RASHU MD SIRASA NEWS* 🔺
       
• *Title* - ${newsData.result.title}

• *News* - ${newsData.result.desc}

• *Link* - ${newsData.result.url} 

> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

    const imageDetails = {
      url: newsData.result.image || ''
    };

    const messageDetails = {
      image: imageDetails,
      caption: newsMessage
    };

    const options = {
      quoted: message
    };

    // Send the message with news details
    await client.sendMessage(from, messageDetails, options);
  } catch (error) {
    console.log(error);
    reply(error);
  }
});
