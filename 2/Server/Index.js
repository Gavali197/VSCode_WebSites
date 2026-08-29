const express = require("express");
const dbConnection = require("./Utils/Db");
const router = require("./Routers/UsersRoutes");
const app = express();
const PORT = 5050;

app.use(express.json());

dbConnection();

app.use("/api", router);

app.listen(PORT, ()=>{
    console.log(`server is runing on ${PORT}`);
})