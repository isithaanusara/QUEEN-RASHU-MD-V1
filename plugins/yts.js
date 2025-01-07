const { cmd, commands } = require('../command')
const axios = require('axios');

cmd({
    pattern: "yts",
    react: "🔍",
    alias: ["youtubesearch2"],
    desc: "Search for YouTube videos using a query",
    category: "search",
    use: ".yts2 ",
    filename: __filename
}, async (conn, mek, m, { from, quoted, q, reply }) => {
    try {
       
        if (!q) return reply("Please provide a search query.");

       
      await conn.sendMessage(from, { text: "*🔍 Searching YouTube...*" }, { quoted: mek });

        
        const apiUrl = `https://saviya-kolla-api.up.railway.app/api/search?query=${encodeURIComponent(q)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText}`);
            return reply("Failed to fetch results. Please try again later.");
        }

        const data = await response.json();

       
        if (!data || !Array.isArray(data.results) || data.results.length === 0) {
            return reply("No YouTube videos found for your search query.");
        }

       
        let videoInfo = "*𝐐𝐔𝚵𝚵𝐍 𝐑𝚫𝐒𝐇𝐔 𝐌𝐃 𝐘𝐓 𝐒𝐄𝐀𝐑𝐂𝐇💗:*\n\n";
        data.results.forEach(video => {
            const views = video.views ? video.views.toLocaleString() : "N/A"; 
            videoInfo += `┌──────────────────────\n`;
            videoInfo += `├✨ *Title:* ${video.title || 'N/A'}\n`;
            videoInfo += `├🕒 *Duration:* ${video.duration?.timestamp || 'N/A'}\n`;
            videoInfo += `├👀 *Views:* ${views}\n`;
            videoInfo += `├📆 *Uploaded:* ${video.ago || 'N/A'}\n`;
            videoInfo += `├🔗 *Video URL:* ${video.url || 'N/A'}\n`;
            videoInfo += `├📸 *Author:* ${video.author?.name || 'N/A'} (${video.author?.url || 'N/A'})\n`;
            videoInfo += `└──────────────────────\n\n`;
        });

      
        await conn.sendMessage(from, { text: videoInfo }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`An error occurred: ${e.message}`);
    }
});
