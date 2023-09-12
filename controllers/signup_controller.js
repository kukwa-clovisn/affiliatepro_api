const userModel = require("../Database/models/users");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

module.exports = {
  post: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      let userCheck = await userModel.findOne({
        email: req.body.email,
      });

      if (userCheck)
        return res.status(403).json({
          msg: "User already has an account.",
        });

      const usernameCheck = await userModel.findOne({
        username: req.body.username,
      });

      if (usernameCheck)
        return res.status(403).json({ msg: "username already taken..." });

      const plaintextPassword = req.body.password;

      // Generate a salt (a random string) with 10 rounds of salting
      bcrypt.genSalt(10, async (err, salt) => {
        // Handle error
        if (err) return res.status(500);

        // Hash the password with the generated salt
        bcrypt.hash(plaintextPassword, salt, (err, hash) => {
          // Handle error
          if (err) if (err) return res.status(500);

          // Store the 'hash' in your database
          const createdUser = userModel.create({
            username: req.body.username,
            email: req.body.email,
            password: hash,
          });

          return res.status(200).json({ msg: "user created." })
            ? createdUser
            : res.status(500).json({ msg: "user not created" });
        });
      });
    } catch (error) {
      return res.status(500);
    }
  },
};
