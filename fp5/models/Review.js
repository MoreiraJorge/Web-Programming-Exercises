const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({

    book: String,
    email: String,
    read : Boolean,
    image: String,
    slug: String,
    review: String,
    updated_at: {type: Date}
    
})