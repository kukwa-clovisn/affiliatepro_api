const userModel = require("../models/userModel");
const courseModel = require("../models/courseModel");

function filterCourses(courses, plan) {
  console.log(plan);
  let freeCourses;
  if (plan === "free") {
    freeCourses = courses.map((course) => {
      return course.plan === "free";
    });

    return freeCourses;
  } else {
    return courses;
  }
}

module.exports = {
  getAllCourses: async (req, res) => {
    const courses = await courseModel.find({});

    if (!courses)
      return res
        .status(404)
        .json({ msg: "Courses not available at the moment" });

    return res.status(200).json(courses);
  },
  getCourse: async (req, res) => {
    const courseName = req.body;
    const courseData = await courseModel.find({ courseName: courseName });

    if (!courseData) return res.status(404).json({ msg: "course not found" });
    return res.status(200).json(courseData);
  },
};
