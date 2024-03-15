const express = require("express");
const courseModel = require("../models/course");
const router = express.Router();

router.get("/all", async (req, res) => {
  const courses = await courseModel.find({});

  if (!courses) return res.status(404).json({ msg: "no courses found." });

  return res.status(200).json(courses);
});
router.post("/create-course", async (req, res) => {
  console.log(req.body);

  await courseModel.create(req.body);

  return res.status(200).json({ msg: "course created" });
});
router.post("/some", async (req, res) => {
  const courseName = req.body.courseName;
  const courseData = await courseModel.find({ courseName: courseName });

  if (!courseData) return res.status(404).json({ msg: "course not found" });

  console.log(courseData);
  return res.status(200).json(courseData);
});

module.exports = router;
