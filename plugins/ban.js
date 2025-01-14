
const {cmd} = require('../command')
const fs = require('fs')
const path = require('path')
const configPath = path.join(__dirname,'../config.cjs')
let config = require('configPath')

cmd({
    pattern: 'ban',
    desc: 'Add a JID to the banned list',
    category: 'settings',
    filename: __filename
}, async (conn, mek, m, { from, q, reply, isOwner }) => {
    if (!isOwner) return await reply("❌ You are not the owner!");

    let jid = q && q.trim() ? q.trim() : from; // Use provided JID or fallback to the current chat JID
    if (!config.BANNED) config.BANNED = []; // Ensure BANNED exists as an array

    if (config.BANNED.includes(jid)) {
        return await reply(❌ The JID "${jid}" is already banned.);
    }

    config.BANNED.push(jid);
    fs.writeFileSync(configPath, module.exports = ${JSON.stringify(config, null, 2)};);
    reply(✅ The JID "${jid}" has been added to the banned list.);
});

cmd({
    pattern: 'unban',
    desc: 'Remove a JID from the banned list',
    category: 'settings',
    filename: __filename
}, async (conn, mek, m, { q, reply, isOwner }) => {
    if (!isOwner) return await reply("❌ You are not the owner!");

    let jid = q && q.trim() ? q.trim() : null;
    if (!jid) return await reply("❌ Please provide a JID to unban.");

    if (!config.BANNED || !config.BANNED.includes(jid)) {
        return await reply(❌ The JID "${jid}" is not in the banned list.);
    }

    config.BANNED = config.BANNED.filter(bannedJid => bannedJid !== jid);
    fs.writeFileSync(configPath, module.exports = ${JSON.stringify(config, null, 2)};);
    reply(✅ The JID "${jid}" has been removed from the banned list.);
});
