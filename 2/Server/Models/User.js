const { default: mongoose } = require("mongoose");
const mongo = require("mongoose");

const UserSchema = new mongo.Schema({
    name : {
        type : String
    },

    email : {
        type : String
    },

    phone : {
        type : Number
    },

    password :{
        type : String
    }
})

module.exports = mongoose.model("Users", UserSchema);