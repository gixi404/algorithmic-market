import User from "../../src/DB/user.model.js";

export const createUser = async (req, res) => {
  const { nickname, email, courses } = req.body;
  const user = await User.find({username:nickname})
  const username = nickname
  if(user.length <= 0){
    const newUser = new User({
      username,
      email,
      courses,
  })
  const userSaved = await newUser.save()
  return res.json(userSaved)
  }
  else{
    return res.json(user)
  }
}