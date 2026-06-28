const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    Title : {
        type : String
    },

    Description : {
        type : String
    },

    Author : {
        type : String
    },

    Price : {
        type : String
    }
})

module.exports = mongoose.model("booksData", bookSchema);