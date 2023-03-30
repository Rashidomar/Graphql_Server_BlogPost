const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
      },
      message: {
        type: String,
      },

      post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
},{ timestamps: true })

const Comment = mongoose.model('Comment', commentSchema)

module.exports = {Comment}