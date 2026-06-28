const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    writerName: {
        type: "string"
    },

    Date: {
        type: "string"
    },

    Review: {
        type: "string"
    }

})

module.exports = mongoose.model("ReviewData", ReviewSchema);