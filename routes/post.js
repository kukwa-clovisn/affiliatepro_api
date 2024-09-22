const express = require("express");
const postModel = require("../models/post");
const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await postModel.find({});

  return res.status(200).json(posts)
    ? posts
    : res.status(404).json({ msg: "no posts found." });
});
module.exports = router;
