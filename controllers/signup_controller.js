const userModel = require("../Database/models/users");

const hashFunc = require("../middlewares/hash");

const capitalizeUserName = require("../middlewares/capitalize");

const { v4: uuidv4 } = require("uuid");

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

        res.status(401).json({
          msg,
        });
      }

      let newEmail = req.body.email;

      if (req.body.password.length < 4)
        return res.status(401).json({
          msg: "invalid password",
        });

      let newUser = capitalizeUserName(req.body.username);

      /**
       * checking if user alredy exist with same name
       */
      const newUserName = await userModel.findOne({
        username: newUser,
      });
      if (newUserName)
        return res.status(403).json({
          msg: ` user ${req.body.username} already has an account.`,
        });

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

      const referralCodeUser = newUser.substring(0, 4);

      const referralCodeDigit = new Date().getTime().substring(0, 3);

      const referralId = uuidv4().split("-")[0];

      const referralCode = referralCodeUser + referralCodeDigit + referralId;

      const signupDate = new Date();

      // defining user to be stored in database

      let user = {
        username: newUser,
        email: req.body.email,
        password: userKey,
        token: refreshToken,
        referralCode: referralCode,
        signupDate: signupDate.toString(),
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
                Email: "kukwaclovisngong3@gmail.com",
                Name: "Affiliate pro",
              },
              To: [
                {
                  Email: user.email,
                  Name: user.username,
                },
              ],
              Subject: "Affiliatepro",
              TextPart: `${req.body.message}`,
              HTMLPart: `<h1> Welcome ${user.username}</h1> <p>You successfully signed up to <h4>AFFILIATEPRO</h4></p> <p>We offer courses on different fields on our website <a href="https://advancedtechacademy.onrender.com">advancedtechacademy</a> and free online apps like online Dairy at <a href="https://codingherald.netlify.app">codingheraldapps</a>. learning never ends!</p> <p>happy learning ${user.username}</p> <br /> <h3><a href="https://advancedtechacademy.onrender.com">visit website</a></h3> <br /> <h3><a href="https://codingherald.netlify.app">see apps</a></h3>`,
              CustomID: "AppGettingStartedTest",
            },
          ],
        });
      request
        .then((result) => {
          return res.status(201).json({
            username: user.username,
            msg: "user successfully signed up. signup successful",
          });
        })
        .catch((err) => err.statusCode);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
