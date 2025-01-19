const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")

cmd({
    pattern: "settings",
    alias: ["setting","st"],
    desc: "settings the bot",
    category: "owner",
    react: "⚙",
    filename: __filename


},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    try {
        let desc = `*╭───╎◈𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃◈╎────╮*

> *🍒💗 QUEEN RASHU MD SETTING PANEL*

- *🔢 Reply Below Number*

✤ ============================ ✤

* *1️⃣ 𝐌𝐎𝐃𝐄*
*1.1 ╎ ⛭  PUBLIC 🗃️*
*1.2 ╎ ⛭  PRIVATE 🔐*
*1.3 ╎ ⛭  GROUPS 🎛️*
*1.4 ╎ ⛭  INBOX 🎭*
✤ ============================ ✤

* *2️⃣ 𝐀𝐔𝐓𝐎 𝐕𝐎𝐈𝐂𝐄*
*2.1 ╎ ⛭ TRUE 🔑*
*2.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *3️⃣ 𝐀𝐔𝐓𝐎 𝐒𝐓𝐀𝐓𝐔𝐒 𝐒𝐄𝐄𝐍*
*3.1 ╎ ⛭ TRUE 🔑*
*3.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *4️⃣ 𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑*
*4.1 ╎ ⛭ TRUE 🔑*
*4.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *5️⃣ 𝐀𝐔𝐓𝐎 𝐑𝐄𝐏𝐋𝐘*
*5.1 ╎ ⛭ TRUE 🔑*
*5.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *6️⃣ 𝐁𝐎𝐓 𝐎𝐍𝐋𝐈𝐍𝐄 𝐎𝐅𝐅𝐋𝐈𝐍𝐄*
*6.1 ╎ ⛭ TRUE 🔑*
*6.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *7️⃣ 𝐌𝐒𝐆 𝐑𝐄𝐀𝐃*
*7.1 ╎ ⛭ TRUE 🔑*
*7.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *8️⃣ 𝐌𝐒𝐆 𝐑𝐄𝐀𝐂𝐓*
*8.1 ╎ ⛭ TRUE 🔑*
*8.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *9️⃣ 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊*
*9.1 ╎ ⛭ TRUE 🔑*
*9.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *1️⃣0️⃣ 𝐀𝐍𝐓𝐈 𝐁𝐎𝐓*
*10.1 ╎ ⛭ TRUE 🔑*
*10.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *1️⃣1️⃣ 𝐀𝐔𝐓𝐎 𝐒𝐓𝐀𝐓𝐔𝐒 𝐑𝐄𝐏𝐋𝐘*
*11.1 ╎ ⛭ TRUE 🔑*
*11.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤

* *1️⃣1️⃣ 𝐀𝐔𝐓𝐎 𝐒𝐓𝐀𝐓𝐔𝐒 𝐑𝐄𝐀𝐂𝐓*
*12.1 ╎ ⛭ TRUE 🔑*
*12.2 ╎ ⛭ FALSE 🔐*
✤ ============================ ✤


> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://i.ibb.co/BsjkCDP/9555.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply(".update MODE:public" );
                        reply(".restart" );
                        break;
                    case '1.2':               
                        reply(".update MODE:private");
                        reply(".restart" );
                        break;
                    case '1.3':               
                          reply(".update MODE:group");
                        reply(".restart" );
                      break;
                    case '1.4':     
                        reply(".update MODE:inbox");
                        reply(".restart" );
                      break;
                    case '2.1':     
                        reply(".update AUTO_VOICE:true");
                        reply(".restart" );
                        break;
                    case '2.2':     
                        reply(".update AUTO_VOICE:false");
                        reply(".restart" );
                    break;
                    case '3.1':    
                        reply(".update AUTO_READ_STATUS:true");
                        reply(".restart" );
                    break;
                    case '3.2':    
                        reply(".update AUTO_READ_STATUS:false");
                        reply(".restart" );
                    break;                    
                    case '4.1':    
                        reply(".update AUTO_STICKER:true");
                        reply(".restart" );
                    break;
                    case '4.2':    
                        reply(".update AUTO_STICKER:false");
                        reply(".restart" );
                    break;                                        
                    case '5.1':    
                        reply(".update AUTO_REPLY:true");
                        reply(".restart" );
                    break;
                    case '5.2':    
                        reply(".update AUTO_REPLY:false");
                        reply(".restart" );
                    break;                        
                    case '6.1':    
                        reply(".update ALLWAYS_OFFLINE:true");
                        reply(".restart" );
                    break; 
                    case '6.2':    
                        reply(".update ALLWAYS_OFFLINE:false");
                        reply(".restart" );
                    break;                       
                    case '7.1':    
                        reply(".update READ_MESSAGE:true");
                        reply(".restart" );
                    break;
                    case '7.2':    
                        reply(".update READ_MESSAGE:false");
                        reply(".restart" );
                    break;
                    case '8.1':    
                        reply(".update AUTO_REACT:true");
                        reply(".restart" );
                    break;
                    case '8.2':    
                        reply(".update AUTO_REACT:false");
                        reply(".restart" );
                    break;
                    case '9.1':    
                        reply(".update ANTI_LINK:true");
                        reply(".update ANTI_LINKK:false");
                        reply(".restart" );
                    break;
                    case '9.2':    
                        reply(".update ANTI_LINKK:true");
                        reply(".update ANTI_LINK:false");
                        reply(".restart" );
                    break;
                    case '9.3':    
                        reply(".update ANTI_LINK:false");
                        reply(".update ANTI_LINKK:false");
                        reply(".restart" );
                    break;
                        case '10.1':     
                        reply(".update ANTI_BOT:true");
                        reply(".restart" );
                        break;
                    case '10.2':     
                        reply(".update ANTI_BOT:false");
                        reply(".restart" );
                    break;
                    case '11.1':     
                        reply(".update AUTO_STATUS_REPLY:true");
                        reply(".restart" );
                        break;
                    case '11.2':     
                        reply(".update AUTO_STATUS_REPLY:false");
                        reply(".restart" );
                    break;
                    case '12.1':    
                        reply(".update AUTO_REACT_STATUS:true");
                        reply(".restart" );
                    break;
                    case '12.2':    
                        reply(".update AUTO_REACT_STATUS:false");
                        reply(".restart" );
                    break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
