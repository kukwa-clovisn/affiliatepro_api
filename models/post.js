const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },
    likes: {
      type: Number,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
  },
  {
    collection: "comments",
  }
);

const commentModel = mongoose.model("commentSchema", commentSchema);

const imageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const postSchema = new mongoose.Schema(
  {
    Author: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      requied: false,
    },
    links: {
      type: Array,
      required: false,
    },
    comment: {
      type: String,
      required: true,
    },
    images: [imageSchema],
    date: {
      type: Date,
      required: true,
    },
    likes: {
      type: Number,
      required: false,
    },
    tags: {
      type: Array,
      required: false,
    },
    comments: [commentSchema],
  },
  {
    collection: "posts",
  }
);

const postModel = mongoose.model("postSchema", postSchema);

module.exports = postModel;
