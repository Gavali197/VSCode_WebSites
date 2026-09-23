const mongoose = require("mongoose");

const db = async()=> {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/ICT3A")
        if (!connect) {
            console.log("connection failed");

        }

        console.log("connection success");

    } catch (err) {
        console.log(err + "server error");

    }
}

module.exports = db;