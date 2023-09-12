const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const userModel = require("../Database/models/users");
module.exports = {
  post: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const emailCheck = await userModel.findOne({ email: req.body.email });

      if (!emailCheck)
        return res.status(404).json({
          msg: "User has no account.",
        });
      const enteredPassword = req.body.password; // Password entered by the user
      const storedHashedPassword = emailCheck.password; // Retrieved from your database

      bcrypt.compare(enteredPassword, storedHashedPassword, (err, result) => {
        if (err) {
          // Handle error
          return res.status(500).json({ msg: "system error" });
        } else if (result === true) {
          // Passwords match
          console.log("Password is correct");
          return res.status(200).json({ msg: "login successful" });
        } else {
          // Passwords do not match
          console.log("Password is incorrect");
          return res.status(403).json({ msg: "unauthorized login" });
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500);
    }
  },
};
