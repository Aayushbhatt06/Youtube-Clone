import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  url : String,
  thumb: String,
  title: String,
  channel: String,
  ch_logo: String,
  views: String,
  release: String,
  duration: String,
  description: String,
  vid: String
});

const Video = mongoose.model('Video', videoSchema);

export default Video;



