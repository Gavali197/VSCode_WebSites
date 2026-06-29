const express = require("express");
const router = express.Router();

const { PostBook, GetBook, PostUser } = require("../Controller/BookPostController");

router.post("/bookpost", PostBook);
router.get("/bookget", GetBook);
router.post("/register", PostUser);

module.exports = router