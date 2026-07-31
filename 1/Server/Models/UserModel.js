const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    dateOfBrith: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    Gender: {
        type: String
    }
})

module.exports = mongoose.model("UserData", UserSchema);
