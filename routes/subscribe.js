const express = require("express");
const subscribe_controller = require("../controllers/subscribe_controller");

const router = express.Router();

router.get("/", subscribe_controller.get);

router.post("/", subscribe_controller.post);

module.exports = router;
