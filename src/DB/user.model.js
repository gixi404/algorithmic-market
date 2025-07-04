import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  courses: {
    type: Array,
  },
});

export default mongoose.model("User", userSchema);
