const express = require("express");
const {login} = require("../../controllers/UserController");
const auth = require("../../middleware/auth");
const router = express.Router();

router.post("/login", (req, res) => login(req, res));

module.exports = router;