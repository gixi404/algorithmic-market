import mongoose from "mongoose";

const CourseSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  cash: {
    type: String,
    trim: true
  },
  isBought:{
    type: Boolean
  },
  id: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    unique: true,
  },
  clases: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("Course", CourseSchema);
