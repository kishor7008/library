const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    category: {
        type: String,
        trim: true
    }, name: {
        type: String,
        trim: true
    }, author: {
        type: String, trim: true
    }, image: {
        type: String, trim: true
    }, description: {
        type: String, trim: true
    }, price: {
        type: Number, trim: true
    }, quantity: {
        type: Number, trim: true
    }, bookId: {
        type: Number, trim: true
    },
   
}, { timestamps: true })
const Book = mongoose.model("Book", BookSchema)
module.exports = Book