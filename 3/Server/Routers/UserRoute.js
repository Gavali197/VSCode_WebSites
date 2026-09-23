// const router = require("Router");
const express = require("express");
const router = express.Router();

const { postUser, findUser } = require("../Controller/UserController")

router.post("/addUser", postUser);
router.get("/findUser", findUser);


module.exports = router;

