const express = require("express");

const router = express.Router();

const userModel = require("../models/users");

const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  let authHeader = req.headers["authorization"];
  let [bearer, token] = authHeader.split(" ");
  let userData;

  if (token === null) {
    return res.status(401).json({
      msg: "Access Denied!",
    });
  }
  jwt.verify(token, process.env.user_login_token, async (err, data) => {
    if (err) return res.status(403).json(err);

    if (!data)
      return res.status(403).json({
        msg: "token expired",
      });

    console.log(data);

    let userEmail = data.email;

    const user = await userModel.findOne({
      email: userEmail,
    });

    console.log(user);

    if (!user) {
      return res.status(403).json({ msg: "Access Denied" });
    }
    return res.status(200).json({
      email: user.email,
      username: user.username,
      id: user._id,
    });
  });
});

module.exports = router;
