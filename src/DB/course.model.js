import mongoose from "mongoose";
import { number } from "yargs";

const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        unique:true
    },
    id:{
        type:String,
        unique: true
    },
    url:{
        type: String,
        unique: true
    },
    clases:{
        type: number,
    }
})

export default mongoose.model('course',CourseSchema)