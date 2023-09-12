const express = require("express");
const userModel = require("../Database/models/users");
const router = express.Router();

router.get("/", async (req, res) => {
  //   console.log(req.ip);
  const users = await userModel.find({});

  return res.status(200).json(users)
    ? users
    : res.status(404).json({ msg: "no users found." });
});
module.exports = router;
