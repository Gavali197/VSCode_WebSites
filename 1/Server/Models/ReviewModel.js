const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    writerName: {
        type: String
    },

    Date: {
        type: String
    },

    Review: {
        type: String
    }

})

module.exports = mongoose.model("ReviewData", ReviewSchema);