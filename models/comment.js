const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
      },
      message: {
        type: String,
      },


})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment