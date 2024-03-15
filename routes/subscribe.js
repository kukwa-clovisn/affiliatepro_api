const express = require("express");

const router = express.Router();

const { validationResult } = require("express-validator");
const subscribeModel = require("../models/subscribers");

router.get("/", async (req, res) => {
  const subscribers = await subscribeModel.find({});

  if (!subscribers) return res.status(404);

  return res.status(200).json(subscribers);
});

router.post("/", async (req, res) => {
  let checkError = validationResult(req);
  if (!checkError.isEmpty()) {
    let msg = "";
    for (let i = 0; i < checkError.errors.length; i++) {
      msg += checkError.errors[i].msg;
    }
    console.log(msg);
    return res.status(401).json({
      msg,
    });
  }

  const user = await subscribeModel.findOne({ email: req.body.email });

  if (user)
    return res.status(200).json({
      msg: "You are already subscribed to our newsletter.",
    });

  await subscribeModel.create(req.body);
  return res
    .status(200)
    .json({ msg: "You've subscribed to our newsletter successfully." });
});

module.exports = router;
