const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
    Name : {
        type : "string"
    },

    Salary :{
        type : "String"
    },

    Age : {
        type : "String"
    },

    Phone : {
        type : "string"
    }
})

//Intially handle device

module.exports = mongoose.model("StaffRecord", StaffSchema);