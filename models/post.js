const mongoose = require('mongoose')
const {Comments, commentSchema} = require('./comment')

const postSchema = new mongoose.Schema({
    title: {
      type: String,
    },
    details: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    banner: {
      type: String,
    },
    comments: {
      type: [Comments],
    },
    likes: {
      type: Number,
      default: 0,
    },
    disLikes: {
      type: Number,
      default: 0,
    },
  });
  
  const Post = mongoose.model("Post", postSchema);

  module.exports = Post