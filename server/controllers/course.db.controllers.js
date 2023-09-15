import Courses from "../../src/DB/course.model.js";

export const getCourses = async (req, res) => {
  const courses = await Courses.find();
  res.json(courses);
};
export const createCourse = async (req, res) => {
  const { name, url, id, clases } = req.body;

  const newCourse = new Courses({
    name,
    url,
    id,
    clases,
  });
  const savedCourse = await newCourse.save();
  res.json(savedCourse);
};
export const getCourse = async (req, res) => {
  const course = await Courses.findById(req.params.id);
  res.json(course);
};
export const deleteCourse = async (req, res) => {
  const course = await Courses.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "course not found" });
  res.json(course);
};
