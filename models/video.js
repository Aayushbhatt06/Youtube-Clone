import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  thumb: String,
  title: String,
  channel: String,
  ch_logo: String,
  views: String,
  release: String,
  duration: String,
});

const Video = mongoose.model('Video', videoSchema);

export default Video;



