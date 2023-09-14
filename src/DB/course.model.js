import mongoose from "mongoose";

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
        type: String,
        required: true
    }
})

export default mongoose.model('Course',CourseSchema)