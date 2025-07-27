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
  res.render('index', { results });
});
app.get('/video/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;
    const video = await Video.findById(slug);
    console.log(video);
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
