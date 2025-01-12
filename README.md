## <p align="center"> QUEEN-RASHU-MD WHATSAPP BOT
<br>

<p align="center"><a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=EB+Garamond&weight=800&size=28&duration=4000&pause=1000&random=false&width=435&lines=WELCOME+TO+THE+QUEEN-RASHU-MD;MULTI-DEVICE+WHATSAPP+BOT;DEVELOPED+BY+NIPUN;RELEASED+DATE+24%2F03%2F2024." alt="Typing SVG" /></a>
</p>


<img src="https://i.ibb.co/BsjkCDP/9555.jpg" width="540" height="280" />
</p>             ꧁ 𝐐𝐔𝐄𝐄𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃 ꧂

### Setup

**📌DEPLOY ON HEROKU**
   - ***Click [`FORK`](https://github.com/NipunHarshana0/QUEEN-RASHU-MD-V1/fork) and `Star ⭐ Repository` for Courage.***
   - You will get a session ID in WhatsApp, copy the ID only.
   - **If you don't have an account on [Heroku](https://signup.heroku.com/), [create an account now](https://signup.heroku.com/).**p
</p>
🌟 𝗤𝗨𝗘𝗘𝗡 𝗥𝗔𝗦𝗛𝗨 𝗠𝗗 𝗪𝗘𝗕 𝗦𝗜𝗧𝗘 🌟

<a href="https://youtube.com/@rashumodz_0715?si=5pg_wumwy6VzizMP/"><img src="https://img.shields.io/badge/RASHU-WEB%20SITE-red" alt="RASHU WEB SITE" width="250"></a>

**`𝗤𝗨𝗘𝗘𝗡 𝗥𝗔𝗦𝗛𝗨 𝗠𝗗 𝗕𝗢𝗧`**

##  PAIRING CODE SCAN SAVER 01

<a href="https://lithu-md-pair-13dc62a31d33.herokuapp.com/"><img src="https://img.shields.io/badge/LOGIN%20WITH-PAIR%20CODE-red" alt="LOGIN WITH PAIR CODE" width="250"></a>

## PAIRING CODE SCAN SAVER 02

<a href="https://paircoderashu-da08a61d6074.herokuapp.com/"><img src="https://img.shields.io/badge/LOGIN%20WITH-QR%20CODE-red" alt="LOGIN WITH PAIR CODE" width="250"></a>
## DEPLOY IN HEROKU

 [![Deploy on Heroku](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?template=https://github.com/NipunHarshana0/QUEEN-RASHU-MD-V1/)

   </details>
</P>

![repo views](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FPurnageethanjana%2FDEXTER-V1-MD&count_bg=%2379C83D&title_bg=%23555555&icon=gitpod.svg&icon_color=%23E7E7E7&title=Views&edge_flat=false)




## Contributions

Contributions to Queen-Rashu-Md are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

The QUEEN-RASHU-MD is released.

Enjoy the diverse features of the QUEEN-RASHU-MD  to enhance your conversations and make your WhatsApp experience more interesting!

## Developer:
- [**WhatsApp**](https://wa.me/94727319036)



## github workflows deploy

● github/workflows/deploy.yml

_______________________________________

name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
