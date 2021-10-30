const mongoose = require('mongoose')
const Post = require('./post')
const authorSchema = mongoose.Schema({

    username: {
        type: String,
      },
      posts: {
        type: [Post],
      },
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author