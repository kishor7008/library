const mongoose = require("mongoose")
const connection = () => {
    mongoose.connect(
        "mongodb+srv://kishor7008:kishor7008@cluster0.hxzeokt.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((res) => {
    }).catch((err) => {
    })
}

module.exports = connection;