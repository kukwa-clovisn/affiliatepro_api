const express = require("express");
const signup_controller = require("../controllers/signup_controller");

const router = express.Router();

router.post("/", signup_controller.post);

module.exports = router;
