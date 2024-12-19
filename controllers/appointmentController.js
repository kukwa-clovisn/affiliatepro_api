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
                Email: "codingherald@gmail.com",
                Name: "Gospelfxtrader",
              },
              To: [
                {
                  Email: "gospelfxconsultant@gmail.com",
                },
              ],
              Subject: `${req.body.type}`,
              TextPart: `${req.body.email}`,
              HTMLPart: `
               <div style="margin: 0; padding: 20px ; font-family: Arial, sans-serif;">
 
  <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
       
        <table width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
         
          <tr>
            <td align="center" style="padding: 10px 0;">
              <h1 style="color: #333333; font-size: 24px; margin: 0;">Welcome to Our Service</h1>
              <p style="color: #666666; font-size: 14px;">Your satisfaction is our priority</p>
            </td>
          </tr>
          <!-- Divider -->
          <tr>
            <td align="center">
              <hr style="border: none; border-top: 2px solid #eeeeee; margin: 20px 0;">
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding: 20px 40px; color: #555555; font-size: 16px; line-height: 1.6;">
              <p style="margin: 0;">Greetings Mr Gospel Yong!,</p>
              <p style="margin: 20px 0;">Thank you for signing up for our service! We’re excited to have you on board. Below are the details of the message you received from a client on your website.</p>
              <div style="background:rgb(1, 94, 111); color:white; padding:20px;">
                <ul style="padding-left: 3px; margin: 20px 0; list-style-type:none;">
                <li style="color:rgb(240,240,240); font-weight:light;">Username:<strong style="color:white"> ${req.body.name}</strong></li>
              <li style="color:rgb(240,240,240); font-weight:light;">Email:<strong style="color:white !important;"> ${req.body.email}</strong></li>
                <li style="color:rgb(240,240,240); font-weight:light;">Phone Number:<strong style="color:white"> ${req.body.tel}</strong></li>
              </ul>
              <p style="margin: 20px 0; color:white;">
              <span style="color:white;">Message:</span> <br />
              ${req.body.message}
              </p>
              </div>
             <br />
              <p style="margin: 20px 0;">If you have any questions or need assistance, feel free to contact us at <a href="mailto:kcn.123.com@gmaii.com" style="color: #007BFF; text-decoration: none;"> <a href="kcn.123.com@gmail.com" >here</a></a>.</p>
              <p style="margin: 0;">Best regards!,<br><strong> <a href="kukwaclovis.onrender.com" style="text-decoration:none; color:black;">Codingherald</a></strong></p>
            </td>
          </tr>
          <!-- Call-to-Action Button -->
          <tr>
            <td align="center" style="padding: 20px;">
              <a href="https://gospelfxtrader.com" style="display: inline-block; padding: 12px 30px; background:rgb(1, 94, 111); color: #ffffff; text-decoration: none; font-size: 16px; border-radius: 4px;">Visit website</a>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td align="center" style="padding: 20px 0; font-size: 12px; color: #999999;">
              <p style="margin: 0;">You received this email from Gospelfxtrader.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>`,
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
