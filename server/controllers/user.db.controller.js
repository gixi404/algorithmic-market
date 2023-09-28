import User from "../../src/DB/user.model.js";

export const createUser = async (req, res) => {
  const { username, email, courses, waitingcourse } = req.body;
  console.log(req.body);
  const newUser = new User({
    username,
    email,
    courses,
    waitingcourse,
  });
  const userSaved = await newUser.save();
  res.json(userSaved);
};
