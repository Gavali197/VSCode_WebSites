const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: "string"
    },
    dateOfBrith: {
        type: "string"
    },
    email: {
        type: "string"
    },
    password: {
        type: "string"
    },
    Gender: {
        type: "string"
    }
})

module.exports = mongoose.model("UserData", UserSchema);
//a