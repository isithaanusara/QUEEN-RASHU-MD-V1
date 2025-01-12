const { cmd, commands } = require('../command'),
  axios = require('axios')
cmd(
  {
    pattern: 'img',
    alias: ['image', 'pinterest', 'pinimg'],
    react: '\uD83D\uDDBC️',
    desc: 'Search and download images from Pinterest using keywords.',
    category: 'image',
    use: '.img <keywords>',
    filename: __filename,
  },
  async (
    _0x1a9409,
    _0x59fdb9,
    _0x3f150e,
    { from: _0x163393, args: _0x12b1f7, reply: _0x2ac5cb }
  ) => {
    try {
      const _0x3207b0 = _0x12b1f7.join(' ')
      if (!_0x3207b0) {
        return _0x2ac5cb('*Please provide search keywords for the image.*')
      }
      _0x2ac5cb(
        '*\uD83D\uDD0D 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃-𝐈𝐌𝐀𝐆𝐄\uD83C\uDF38 - ' +
          _0x3207b0 +
          '...*'
      )
      const _0x2f5556 =
          'https://apitest1-f7dcf17bd59b.herokuapp.com/download/piniimg?text=' +
          encodeURIComponent(_0x3207b0),
        _0x530cac = await axios.get(_0x2f5556)
      if (
        !_0x530cac.data ||
        !_0x530cac.data.result ||
        _0x530cac.data.result.length === 0
      ) {
        return _0x2ac5cb('\u274C No images found for "' + _0x3207b0 + '".')
      }
      const _0x82a454 = _0x530cac.data.result
      for (
        let _0xecb4cf = 0;
        _0xecb4cf < Math.min(_0x82a454.length, 5);
        _0xecb4cf++
      ) {
        const _0x58b5b7 = _0x82a454[_0xecb4cf]
        _0x58b5b7.images_url &&
          (await _0x1a9409.sendMessage(
            _0x163393,
            {
              image: { url: _0x58b5b7.images_url },
              caption:
                '*\uD83E\uDD0D𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃-𝐈𝐌𝐀𝐆𝐄\uD83D\uDD10 - ' +
                _0x3207b0 +
                '*',
            },
            { quoted: _0x59fdb9 }
          ))
      }
      _0x82a454.every((_0x45deb7) => !_0x45deb7.images_url) &&
        _0x2ac5cb('\u274C No valid image URLs found in the results.')
    } catch (_0x422b47) {
      console.error(_0x422b47)
      _0x2ac5cb('\u274C An error occurred while processing your request.')
    }
  }
)
