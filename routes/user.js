const express = require("express");
const userModel = require("../models/users");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await userModel.find({});

  return res.status(200).json(users)
    ? users
    : res.status(404).json({ msg: "no users found." });
});
module.exports = router;
