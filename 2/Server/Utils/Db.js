const mongo = require("mongoose");

const dbConnection = async() => {
    try{
        const connect = await mongo.connect("mongodb://localhost:27017/0404");
        if(!connect){
            console.log("Connection Failed To connect database");
        }
        console.log("Connection Successfully Database");
    }catch{
        console.log("Server Error to connect database");
        process.exit(1);
    }
}

module.exports = dbConnection;