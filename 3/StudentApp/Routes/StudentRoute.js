const express = require("express")
const router = express.Router();

const { register, login } = require("../Controller/StudentController")

router.get("/register", (req, res)=> res.render("register"))
router.post("/register", register);
router.get("/login", (req, res)=> res.render("login"))
router.post("/login", login)

module.exports = router