const mongoose = require("mongoose");

const dbConnect = async() => {
    const connect = await mongoose.connect("mongodb://localhost:27017/ICT3A")
    if(!connect){
        console.log("failed");
        proccess.exit(1);
    }

    console.log("connection success");

}

module.exports = dbConnect;
