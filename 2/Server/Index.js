const express = require("express");
const dbConnection = require("./Utils/Db");
const router = require("./Routers/UsersRoutes");
const Auth = require("./Middleware/Auth");
const app = express();
const PORT = 5050;
require("dotenv").config();

app.use(express.json());

dbConnection();

app.use("/api", router);

app.listen(PORT, ()=>{
    console.log(`server is runing on ${PORT}`);
})