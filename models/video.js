const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  thumb: String,
  title: String,
  channel: String,
  ch_logo: String,
  views: String,
  release: String,
  duration: String
});

module.exports = mongoose.model('Video', videoSchema);