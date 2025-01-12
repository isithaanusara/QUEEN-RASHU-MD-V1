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
           📑 *LANKADEEPA NEWS* 📑
           
• *Title* - ${newsData.result.title}

• *News* - ${newsData.result.desc}

• *Date* - ${newsData.result.date}

• *Link* - ${newsData.result.url}

*㋛ 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰 〽️Ｄ*
`;

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
    reply(`hutta error:${e}`);
  }
});
