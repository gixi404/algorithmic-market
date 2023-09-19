import mongoose from "mongoose";

const shoppingSchema = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String
    }
})

export default mongoose.model('Shopping',shoppingSchema)