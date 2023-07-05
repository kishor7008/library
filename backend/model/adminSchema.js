const mongoose = require("mongoose");
let adminSchema = new mongoose.Schema({
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
    }, role: {
        type: String,
        default: "Admin"
    }
},{timestamps:true})

const Admin = mongoose.model("Admin", adminSchema)
module.exports = Admin