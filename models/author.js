const mongoose = require('mongoose')
const authorSchema = mongoose.Schema({

    username: {
        type: String,
      },

}, { timestamps: true })

const Author = mongoose.model('Author', authorSchema)

module.exports = { Author }