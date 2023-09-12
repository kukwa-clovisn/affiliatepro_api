var mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  {
    collection: "subscribers",
  }
);

const subscriberModel = mongoose.model("subscriberSchema", subscriberSchema);

module.exports = subscriberModel;
