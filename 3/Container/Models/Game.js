const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    name : {type : String},
    price : {type : String}
})

module.exports = mongoose.model("GameModel", GameSchema);