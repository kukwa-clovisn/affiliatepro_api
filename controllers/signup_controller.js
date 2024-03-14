const userModel = require("../models/users");

const hashFunc = require("../middlewares/hash");

const userToken = require("../utils/jwt");

const { validationResult } = require("express-validator");

const mailjet = require("node-mailjet").apiConnect(
  process.env.mail_api_key,
  process.env.mail_secret_key
);

module.exports = {
  post: async (req, res) => {
    try {
      let checkError = validationResult(req);
      if (!checkError.isEmpty()) {
        let msg = "";
        for (let i = 0; i < checkError.errors.length; i++) {
          msg += checkError.errors[i].msg;
        }
        console.log(msg);
        return res.status(401).json({
          msg: `${msg}.Please check your signup credentials...`,
        });
      }

      let newEmail = req.body.email;

      /**
       * checking if a user already exist with the same email
       */

      const newUserEmail = await userModel.findOne({
        email: newEmail,
      });

      if (newUserEmail)
        return res.status(403).json({
          msg: `user email ${req.body.email} already has an account.`,
        });

      /**
       * hashing password
       */

      let userKey = await hashFunc(req.body.password);

      /**
       * creating a unigue token for every signed up user
       */

      let refreshToken = userToken.createUserRefreshToken(req.body);

      // defining user to be stored in database

      let user = {
        username: req.body.username,
        email: req.body.email,
        password: userKey,
        token: refreshToken,
      };

      //     storing user in database
      await userModel.create(user);

      const request = mailjet
        .post("send", {
          version: "v3.1",
        })
        .request({
          Messages: [
            {
              From: {
                Email: "yonggospel@gmail.com",
                Name: "Gospelfxtrader",
              },
              To: [
                {
                  Email: user.email,
                },
              ],
              Subject: "Welcome",
              TextPart: `signup successful`,
              HTMLPart: `<h1> Welcome ${user.username}</h1> <p>You successfully signed up to <h4>Gospelfxtrader.s space</h4></p> <p>We offer courses on different fields on our <a href="https://gospelfxtrader.com">website</a> and free online courses for you to watch and learn all there is to know about the financial markets.</p> `,
              CustomID: "AppGettingStartedTest",
            },
          ],
        });
      request
        .then((result) => {
          return res.status(201).json({
            email: user.email,
            msg: "user successfully signed up. signup successful",
          });
        })
        .catch((err) => err.statusCode);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
