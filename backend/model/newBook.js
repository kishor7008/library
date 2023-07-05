const mongoose = require('mongoose')
const newBookSchema = new mongoose.Schema({
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    name: {
        type: String
    }
},{timestamps:true})

const newBook = mongoose.model("NewBook", newBookSchema)
module.exports = newBook