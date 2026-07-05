const express = require("express");
const router = express.Router();

const { PostBook, GetBook, PostUser, PostStaff } = require("../Controller/BookPostController");

router.post("/bookpost", PostBook);
router.get("/bookget", GetBook);
router.post("/register", PostUser);
router.post("/staffpost", PostStaff);

module.exports = router