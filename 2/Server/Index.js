const express = require("express");
const dbConnection = require("./Utils/Db");
const UserRouter = require("./Routers/UsersRoutes");
const InventoryRouter = require("./Routers/InventoryRoutes")
const Auth = require("./Middleware/Auth");
const app = express();
const PORT = 5050;
require("dotenv").config();

app.use(express.json());

dbConnection();

app.use("/api", UserRouter);
app.use("/api", InventoryRouter);

app.listen(PORT, ()=>{
    console.log(`server is runing on ${PORT}`);
})