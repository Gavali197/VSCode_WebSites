const express = require("express")
const app = express()
const session = require("express-session");
const router = require("./Routes/StudentRoute");
const dbConnect = require("./Db");

dbConnect();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session({
    secret : "hello123",
    resave: false,
    saveUninitialized: true
}))

app.use("/", router)

app.listen(3000, ()=>{
    console.log("server running on 3000")
})
