const express = require("express");
const dbConnection = require("./Utils/Db");
const app = express();
const PORT = 5050;

app.use(express.json());

dbConnection();

app.listen(PORT, ()=>{
    console.log(`server is runing on ${PORT}`);
})