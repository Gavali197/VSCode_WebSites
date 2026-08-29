const express = require("express");
const router = express.Router();

const {postUser, getUser} = require("../Controller/UserController");

router.post("/register", postUser);
router.post("/login", getUser);

module.exports = router;