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

      const request = mailjet
        .post("send", {
          version: "v3.1",
        })
        .request({
          Messages: [
            {
              From: {
                Email: "kukwaclovisngong3@gmail.com",
                Name: "Gospelfxtrader",
              },
              To: [
                {
                  Email: "yonggospelyuh@gmail.com",
                },
              ],
              Subject: "Appointment Booking",
              TextPart: `${req.body.email}`,
              HTMLPart: `<h1> From: ${req.body.email}</h1> <br />
               <p>${req.body.message}</p> `,
              CustomID: "AppGettingStartedTest",
            },
          ],
        });
      request
        .then((result) => {
          return res.status(201).json({
            msg: "Appointment sent successfully",
          });
        })
        .catch((err) => err.statusCode);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
