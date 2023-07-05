const mongoose = require("mongoose")
let bookBuy = new mongoose.Schema({

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    book:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
    bookDetails: {
        name: { type: String },
        image: { type: String },
        description: { type: String },
        price: { type: String },
        quantity: { type: Number },
        total: { type: Number },
        category: { type: String },
        adress: { type: String }
    },
    status: { type: String },
    orderId: { type: String },
    day: {
        type: String
    }
}, { timestamps: true })

let BuyBook = mongoose.model("BuyBook", bookBuy)
module.exports = BuyBook