import  User  from "../../src/DB/user.model.js";

export const createUser = async(req, res) => {
    const {username, email, password} = req.body

    const newUser = new User({
        username,
        email,
        password
    })
    const userSaved = await newUser.save()
    res.json(userSaved)
}