const { cmd, commands } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  removebg,
  h2k,
  isUrl,
  Json,
  sleep,
  fetchJson
} = require("../lib/functions");


const command = {
  pattern: "removebg",
  alias: ["rbg", "bgremove"],
  react: "🖇",
  desc: "Remove the background from an image.",
  category: "image",
  use: ".removebg",
  filename: __filename
};

cmd(command, async (client, message, args, { from, quoted, reply }) => {
  try {
    let quotedMessage = quoted ? quoted : message;
    let mimetype = quotedMessage.msg?.mimetype || '';

    if (!mimetype || !mimetype.startsWith("image/")) {
      throw "🌻 Please reply to an image.";
    }

    let downloadedImage = await quotedMessage.download();
    if (!downloadedImage) {
      throw "Failed to download the image. Please try again.";
    }

    const path = require("path");
    const FormData = require("form-data");
    const axios = require("axios");
    const os = require("os");
    const fs = require("fs");

    let tempFilePath = path.join(os.tmpdir(), "tempImage.png");
    fs.writeFileSync(tempFilePath, downloadedImage);

    let formData = new FormData();
    formData.append("image", fs.createReadStream(tempFilePath));

    let uploadResponse = await axios.post("https://api.imgbb.com/1/upload?key=06d00f0e4520243a32b58138765a2ecc", formData, {
      headers: {
        ...formData.getHeaders()
      }
    });

    if (!uploadResponse.data || !uploadResponse.data.data.url) {
      fs.unlinkSync(tempFilePath);
      throw "❌ Error uploading the file. Please try again.";
    }

    let imageUrl = uploadResponse.data.data.url;
    let removeBgApiUrl = `https://api.nexoracle.com/image-processing/remove-bg?apikey=RDB9bTxrjAf71NFHd&img=${imageUrl}`;

    const imagePayload = {
      url: removeBgApiUrl
    };
    const messagePayload = {
      image: imagePayload,
      caption: "> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*"
    };
    const sendMessageOptions = {
      quoted: message
    };

    await client.sendMessage(from, messagePayload, sendMessageOptions);
    fs.unlinkSync(tempFilePath);
  } catch (error) {
    console.error(error);
    reply("❌ An error occurred: " + (error.message || error));
  }
});

const img2UrlCommand = {
  pattern: "img2url",
  react: "🔗",
  alias: ["tourl","url","imgurl","telegraph","imgtourl"]
};

function helperFunction(param1, param2, param3, param4, param5) {
  return someOtherFunction(param4 - 0xe8, param3); // Needs context for `someOtherFunction`
}

img2UrlCommand.category = "convert";
img2UrlCommand.use = ".img2url <reply image>";
img2UrlCommand.filename = __filename;

cmd(img2UrlCommand, async (context, args, utils, { reply, quoted }) => {
  try {
    const { image2url } = require("@dark-yasiya/imgbb.js");
    const isViewOnceMessage = quoted ? quoted.type === "viewOnceMessage" : false;
    const isImageMessage = quoted
      ? quoted.type === "imageMessage" || (isViewOnceMessage ? quoted.msg.type === "imageMessage" : false)
      : false;

    if (utils.type === "imageMessage" || isImageMessage) {
      const randomFileName = getRandom('');
      const downloadedFile = isImageMessage
        ? await quoted.download(randomFileName)
        : await utils.download(randomFileName);
      const fileType = await require('file-type').fromBuffer(downloadedFile);

      if (!fileType || (fileType.ext !== "jpg" && fileType.ext !== "png")) {
        return reply("Only JPG or PNG images are supported!");
      }

      const savedFilePath = `./${randomFileName}.${fileType.ext}`;
      await require('fs').promises.writeFile(savedFilePath, downloadedFile);

      const uploadedImageUrl = await image2url(savedFilePath);
      console.log(uploadedImageUrl);
      await reply(
        `📍 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐔𝐑𝐋 𝐆𝐄𝐍𝐀𝐑𝐀𝐓𝐄𝐃:\n\n\n${uploadedImageUrl.result.url}\n\n\n> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`
      );

      await require('fs').promises.unlink(savedFilePath);
    } else {
      reply("⚠️ Please reply to an image message.");
    }
  } catch (error) {
    console.error("Error:", error);
    reply("❌ An error occurred while processing the image.");
  }
});
