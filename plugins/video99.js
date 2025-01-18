// YTMP3 DL PLUGIN

const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); // request package.json "@dark-yasiya/yt-dl.js": "latest"

const videoCommand = {
  pattern: "video99",
  desc: "To download videos.",
  react: "🎥",
  use: ".video < Text or Link >",
  category: "download",
  filename: __filename
};

cmd(videoCommand, async (client, message, args, { prefix, from, quoted, body, isCmd, command, argsArray, query, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    const replyMessages = (await fetchJson("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/Mreply.json")).replyMsg;
    
    if (!query) {
      return reply(replyMessages.giveme);
    }

    query = convertYouTubeLink(query);
    const searchResults = await yts(query);
    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const details = (await axios.get("https://raw.githubusercontent.com/athulakumara604/ASITHA-MD-DATABASE/refs/heads/main/ditels/ditels.json")).data;
    let footer = details.footer;

    const sections = [
      {
        title: "*`[1] Video File`* 🎶",
        rows: [
          { title: "   1.1", rowId: prefix + "ytmp4 " + videoUrl + " & 360", description: "`360` File 🎶" },
          { title: "   1.2", rowId: prefix + "ytmp4 " + videoUrl + " & 480", description: "`480` File 🎶" },
          { title: "   1.3", rowId: prefix + "ytmp4 " + videoUrl + " & 720", description: "`720` File 🎶" },
          { title: "   1.4", rowId: prefix + "ytmp4 " + videoUrl + " & 1080", description: "`1080` File 🎶" }
        ]
      },
      {
        title: "*`[2] Document File`* 📂",
        rows: [
          { title: "   2.1", rowId: prefix + "ytvdoc " + videoUrl + " & 360", description: "`360` File 📂" },
          { title: "   2.2", rowId: prefix + "ytvdoc " + videoUrl + " & 480", description: "`480` File 📂" },
          { title: "   2.3", rowId: prefix + "ytvdoc " + videoUrl + " & 720", description: "`720` File 📂" },
          { title: "   2.4", rowId: prefix + "ytvdoc " + videoUrl + " & 1080", description: "`1080` File 📂" }
        ]
      }
    ];

    let messageContent = `
*◈ VIDEO DOWNLOADER* 

◈=======================◈
╭──────────────╮
┃ 🎵 Title : ${video.title}
┃
┃ ⏱️ Duration : ${video.timestamp}
┃
┃ 📅 Release : ${video.ago}
┃
┃ 📊 Views : ${video.views}
┃
┃ 🔗 Link : ${video.url}
┃
╰──────────────╯

⦁⦂⦁*━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁`;

    const imageContent = {
      url: video.thumbnail
    };

    const messageOptions = {
      caption: messageContent,
      image: imageContent,
      footer: footer,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: sections
    };

    const quotedMessage = {
      quoted: message
    };

    return await client.replyList(from, messageOptions, quotedMessage);
  } catch (error) {
    reply("*ERROR !!*");
    console.error(error);
  }
});

(function () {
  const getGlobalObject = function () {
    let globalObject;
    try {
      globalObject = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (error) {
      globalObject = window;
    }
    return globalObject;
  };
  const globalObject = getGlobalObject();
  globalObject.setInterval(() => {
    console.log("Interval function running...");
  }, 4000);
})();

async function getDownloadUrl(url, quality, format) {
  let attempts = 0;
  while (attempts < 5) {
    attempts++;
    console.log("Retrying... Attempt " + attempts);
    try {
      const downloadUrl = await scrapeSite(url, quality, format);
      if (downloadUrl) {
        return downloadUrl;
      }
    } catch (error) {
      console.error("Attempt " + attempts + " failed: " + error.message);
    }
  }
  throw new Error("Failed to get download URL after 5 attempts.");
}

async function giftm(url) {
  try {
    let response = await fetchJson("https://api.giftedtech.my.id/api/download/dlmp3?apikey=gifted&quality=128&url=" + url + "?feature=shared");
    return {
      status: true,
      Created_by: "asitha",
      dl_link: response.result.download_url
    };
  } catch (error) {
    console.error(error);
  }
}