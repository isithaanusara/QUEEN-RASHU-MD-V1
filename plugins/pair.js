const { cmd, commands } = require('../command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    sleep,
    fetchJson,
  } = require('../lib/functions')
cmd(
  {
    pattern: 'pair',
    alias: ['register', 'link'],
    react: '\uD83D\uDD22',
    desc: 'pair',
    category: 'download',
    use: '.pair +923096287432',
    filename: __filename,
  },
  async (
    _0x5b297c,
    _0x3a3e44,
    _0xefafe8,
    {
      from: _0x5aafb9,
      prefix: _0x322641,
      quoted: _0x587384,
      q: _0x560654,
      reply: _0x2b55a0,
    }
  ) => {
    try {
      if (!_0x560654) {
        return await _0x2b55a0('*Example - :* .pair +947xxxxxxxx')
      }
      const _0x29763b = await fetchJson(
          'https://queen-ishu-md-bac894e0fbb6.herokuapp.com/code?number=' +
            _0x560654
        ),
        _0x3d603f = '*𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 𝐏𝐀𝐈𝐑 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐄𝐃✅*\n\n> *© 𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 ✾*',
        _0x4b5713 = _0x29763b.code
      _0xefafe8.reply(_0x4b5713 + '\n\n' + _0x3d603f)
    } catch (_0x5be2b9) {
      console.log(_0x5be2b9)
      _0x2b55a0(_0x5be2b9)
    }
  }
)
