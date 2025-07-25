const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const path = require('path')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/svg', express.static('svg'));

let result;
async function fetchData() {
  await mongoose.connect('mongodb://localhost:27017/yt-clone');
  result = await MyModel.find({});
  await mongoose.disconnect(); 
}

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let results = [
  {
    thumb:
      "https://i.ytimg.com/vi/QbNv1LMPdPI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBRdn7HVw1n2apknDRaH0VhrRCIQg",  
    title:
      "Bassi & Kapil Sharma REVEAL Comedy Secrets, On-Set Moments & More with the Gang | TGIKS | Netflix",
    channel: "Netflix India",
    ch_logo:
      "https://yt3.ggpht.com/7FgzPrXXEx3gtp6UEfSnZz6qnl0IlC4Z6w8OTNQhJoDRaKoLqlJLkymECW8pTCQPspvHH_bPDZQ=s68-c-k-c0x00ffffff-no-rj",
    views: "9.9M",
    release: "7 Months",
    duration: "21:05",
  },
  {
    thumb:
      "https://i.ytimg.com/vi/tW40XQwYhcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLA7Twzx-0HLXG8k_cqmrd9ADjO74A",
    title:
      "BRONZE CS:GO Player Says He Deserves IMMORTAL... and then TOPFRAGS an IMMO Lobby",
    channel: "eggwick",
    ch_logo:
      "https://yt3.ggpht.com/ytc/AIdro_lFjUiVb-UYhzj2z2c1_p1dMRkrUPj487whoCwVRjBgc-k=s68-c-k-c0x00ffffff-no-rj",
    views: 906000,
    release: 2,
    duration: "29:40",
  },
  {
    thumb:
      "https://i.ytimg.com/vi/tW40XQwYhcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLA7Twzx-0HLXG8k_cqmrd9ADjO74A",
    title:
      "BRONZE CS:GO Player Says He Deserves IMMORTAL... and then TOPFRAGS an IMMO Lobby",
    channel: "eggwick",
    ch_logo:
      "https://yt3.ggpht.com/ytc/AIdro_lFjUiVb-UYhzj2z2c1_p1dMRkrUPj487whoCwVRjBgc-k=s68-c-k-c0x00ffffff-no-rj",
    views: 906000,
    release: 2,
    duration: "29:40",
  },
  {
    thumb:
      "https://i.ytimg.com/vi/tW40XQwYhcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLA7Twzx-0HLXG8k_cqmrd9ADjO74A",
    title:
      "BRONZE CS:GO Player Says He Deserves IMMORTAL... and then TOPFRAGS an IMMO Lobby",
    channel: "eggwick",
    ch_logo:
      "https://yt3.ggpht.com/ytc/AIdro_lFjUiVb-UYhzj2z2c1_p1dMRkrUPj487whoCwVRjBgc-k=s68-c-k-c0x00ffffff-no-rj",
    views: 906000,
    release: 2,
    duration: "29:40",
  },
  {
    thumb:
      "https://i.ytimg.com/vi/tW40XQwYhcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLA7Twzx-0HLXG8k_cqmrd9ADjO74A",
    title:
      "BRONZE CS:GO Player Says He Deserves IMMORTAL... and then TOPFRAGS an IMMO Lobby",
    channel: "eggwick",
    ch_logo:
      "https://yt3.ggpht.com/ytc/AIdro_lFjUiVb-UYhzj2z2c1_p1dMRkrUPj487whoCwVRjBgc-k=s68-c-k-c0x00ffffff-no-rj",
    views: 906000,
    release: 2,
    duration: "29:40",
  },
  {
    thumb:
      "https://i.ytimg.com/vi/tW40XQwYhcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLA7Twzx-0HLXG8k_cqmrd9ADjO74A",
    title:
      "BRONZE CS:GO Player Says He Deserves IMMORTAL... and then TOPFRAGS an IMMO Lobby",
    channel: "eggwick",
    ch_logo:
      "https://yt3.ggpht.com/ytc/AIdro_lFjUiVb-UYhzj2z2c1_p1dMRkrUPj487whoCwVRjBgc-k=s68-c-k-c0x00ffffff-no-rj",
    views: 906000,
    release: 2,
    duration: "29:40",
  },
  {
    thumb:
      "https://i.ytimg.com/vi/tW40XQwYhcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLA7Twzx-0HLXG8k_cqmrd9ADjO74A",
    title:
      "BRONZE CS:GO Player Says He Deserves IMMORTAL... and then TOPFRAGS an IMMO Lobby",
    channel: "eggwick",
    ch_logo:
      "https://yt3.ggpht.com/ytc/AIdro_lFjUiVb-UYhzj2z2c1_p1dMRkrUPj487whoCwVRjBgc-k=s68-c-k-c0x00ffffff-no-rj",
    views: 906000,
    release: 2,
    duration: "29:40",
  },
  {
    thumb:
      "https://i.ytimg.com/vi/tW40XQwYhcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLA7Twzx-0HLXG8k_cqmrd9ADjO74A",
    title:
      "BRONZE CS:GO Player Says He Deserves IMMORTAL... and then TOPFRAGS an IMMO Lobby",
    channel: "eggwick",
    ch_logo:
      "https://yt3.ggpht.com/ytc/AIdro_lFjUiVb-UYhzj2z2c1_p1dMRkrUPj487whoCwVRjBgc-k=s68-c-k-c0x00ffffff-no-rj",
    views: 906000,
    release: 2,
    duration: "29:40",
  },
  {
    thumb:
      "https://i.ytimg.com/vi/tW40XQwYhcs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLA7Twzx-0HLXG8k_cqmrd9ADjO74A",
    title:
      "BRONZE CS:GO Player Says He Deserves IMMORTAL... and then TOPFRAGS an IMMO Lobby",
    channel: "eggwick",
    ch_logo:
      "https://yt3.ggpht.com/ytc/AIdro_lFjUiVb-UYhzj2z2c1_p1dMRkrUPj487whoCwVRjBgc-k=s68-c-k-c0x00ffffff-no-rj",
    views: 906000,
    release: 2,
    duration: "29:40",
  },
];

// let result;
// async function fetchData() {
//   await mongoose.connect('mongodb://localhost:27017/yt-clone');
//   result = await MyModel.find({});
//   await mongoose.disconnect(); 
// }

// let container = document.querySelector(".r-content");

// results.map((video) => {
//   let card = document.createElement("div");
//   card.className = "vid-item";
//   card.innerHTML = `
//   <div class="item w-[390px] cursor-pointer">
//     <img class="w-full h-[210px] object-cover rounded-xl" src="${video.thumb}" alt="">
//     <div class="flex gap-3 mt-3">
//       <img class="w-9 h-9 rounded-full" src="${video.ch_logo}" alt="">
//       <div>
//         <p class="text-sm font-semibold leading-snug mb-1">${video.title}</p>
//         <p class="text-xs text-gray-400 mb-0.5">${video.channel}</p>
//         <p class="text-xs text-gray-400">${video.views} views • ${video.release} ago</p>
//       </div>
//     </div>
//   </div>`;
//   container.appendChild(card);
// });
