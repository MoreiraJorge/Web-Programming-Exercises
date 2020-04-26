const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    name: String,
    email: String,
    book: String,
    description: String,
    read: String,
    image : String
})

module.exports = mongoose.model('Review', ReviewSchema);