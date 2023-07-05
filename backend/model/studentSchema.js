const mongoose = require("mongoose");
let studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    }, email: {
        type: String
    }, avtar: {
        type: String
    }, password: {
        type: String
    }, token: {
        type: String
    },
    role: {
        type: String,
        default: "Student"
    },
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true
    }],
    wallet: {
        type: Number,
        default: 0
    },
    country:{
        type: String,
        default: "India"
    }
}, { timestamps: true })

const Student = mongoose.model("Student", studentSchema)
module.exports = Student
