const express = require("express");
const router = express.Router();

const authMiddleware = require("../Middleware/Auth");
const adminMiddleware = require("../Middleware/adminMiddleware");

router.get(
    "/api/admin/inventory",
    authMiddleware,
    adminMiddleware,
    (req, res) => {
        res.json({
            message: "Inventory data",
            user: req.user
        });
    }
);

module.exports = router;
