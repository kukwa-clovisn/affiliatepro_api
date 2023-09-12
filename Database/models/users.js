var mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    referralCode: {
      type: String,
      required: true,
    },
    wishlist: {
      type: Array,
      required: false,
    },
    referrals: {
      type: Array,
      required: false,
    },
  },
  {
    collection: "users",
  }
);

const userModel = mongoose.model("userSchema", userSchema);

module.exports = userModel;
