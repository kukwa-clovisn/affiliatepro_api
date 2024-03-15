const express = require("express");
const courseModel = require("../models/course");
const router = express.Router();

router.get("/all", async (req, res) => {
  const courses = await courseModel.find({});

  if (!courses) return res.status(404).json({ msg: "no courses found." });

  return res.status(200).json(courses);
});
router.post("/create-course", async (req, res) => {
  await courseModel.create(req.body);

  return res.status(200).json({ msg: "course created" });
});
router.post("/some", async (req, res) => {
  const courseName = req.body.courseName;

  const courseData = await courseModel.find({ courseName: courseName });

  if (!courseData) return res.status(404).json({ msg: "course not found" });

  return res.status(200).json(courseData);
});

router.post("/id", async (req, res) => {
  const courseId = req.body.courseId;

  const courseData = await courseModel.find({ _id: courseId });

  if (!courseData) return res.status(404).json({ msg: "course not found" });

  return res.status(200).json(courseData);
});

module.exports = router;
