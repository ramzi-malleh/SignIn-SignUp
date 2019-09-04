const express = require("express");
const router = express.Router();

// route    api/auth
// desc     Test route
router.get("/", (req, res) => res.send("profile"));

module.exports = router;
