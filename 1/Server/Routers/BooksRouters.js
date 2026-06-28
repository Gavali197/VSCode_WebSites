const express = require("express");
const router = express.Router();

const { PostBook, GetBook } = require("../Controller/BookPostController");

router.post("/bookpost", PostBook);
router.get("/bookget", GetBook);

module.exports = router