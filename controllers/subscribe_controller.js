const subscriberModel = require("../Database/models/subscribers");

module.exports = {
  get: async (req, res) => {
    try {
      const data = await subscriberModel.find({});

      return res.status(200).json({
        msg: "subscribers list",
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  post: async (req, res) => {
    try {
      const userEmail = req.body.email;

      const data = await subscriberModel.findOne({ email: userEmail });
      console.log(data);
      if (!data) {
        await subscriberModel.create({ email: userEmail });
        return res.status(200).json({ msg: "subscription successful.." });
      }

      return res.status(300).json({
        msg: "user has already been subscribed",
        data: userEmail,
      });
    } catch (err) {
      console.log(err);
      return res.status(500);
    }
  },
};
