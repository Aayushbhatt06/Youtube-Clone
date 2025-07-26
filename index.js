import express from "express";
import mongoose from "mongoose";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Video from "./models/video.js"; // Use .js at end for ES Modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/svg', express.static(path.join(__dirname, 'svg')));
app.use('/components', express.static(path.join(__dirname, 'components')));

await mongoose.connect('mongodb://localhost:27017/yt-clone');
let results;
app.get('/', async (req, res) => {
  results = await Video.find({});
  res.render('index', { results }); // pass to index.ejs
});
app.get('/video/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;
    const video = await Video.findById(slug);

    // Fetch other videos to show on right sidebar
    const results = await Video.find({ _id: { $ne: slug } }).limit(10);

    res.render('video_page', { video, results });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


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
