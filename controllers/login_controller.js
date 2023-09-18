const userModel = require("../Database/models/users");

const capitalizeUserName = require("../middlewares/capitalize");

const userToken = require("../utils/jwt");

const verifyToken = require("../middlewares/verifyHash");

const jwt = require("jsonwebtoken");

module.exports = {
  post: async (req, res) => {
    try {
      // let findUserEmail = capitalizeUserName(req.body.username);
      const findUserEmail = req.body.email;

      const data = await userModel.findOne({
        email: findUserEmail,
      });
      // id the user is not logged in,
      if (!data)
        return res.status(403).json({
          msg: `user ${findUserEmail} has no account.`,
        });

      // if data, compare password,
      const result = await verifyToken(
        req.body.password,
        data.password,
        findUserEmail
      );

      if (!result)
        return res.status(403).json({
          msg: "unauthorized user. incorrect password",
        });

      let accessToken = userToken.createUserToken(req.body);

      return res.status(200).json({
        username: data.username,
        email: data.email,
        accessId: data._id,
        msg: "Loading courses...",
        accessToken,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  },
};
