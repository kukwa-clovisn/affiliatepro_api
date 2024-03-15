const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      requied: false,
    },
    videos: {
      type: Array,
      required: true,
    },
  },
  {
    collection: "courses",
  }
);

const courseModel = mongoose.model("courseSchema", courseSchema);

module.exports = courseModel;
