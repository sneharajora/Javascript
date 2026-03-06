const { timeStamp } = require("console");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(json());

const studentSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    courses:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        default:[]
    }
},{timeStamp:true})

const Student =  mongoose.model("Student",studentSchema);

// schema for course

const courseSchema = mongoose.Schema({
    title:{
        type:String
    },
    instructor:{
        Type:String
    },
    students:{
        type:mongoose.Schema.Types.Objects,
        ref:"Student",
        default:[]
    }
},{timeStamp:true})

const Course = mongoose.model("Course",courseSchema);

// endpoints


// cretaing student 
app.post('/students',async (req,res)=>{
     const createstudent = await Student.create(req.body);
     console.log("studentcreated",createstudent);
     res.send(createstudent);

})

// creaate course

app.post('/course',async (req,res)=>{
    const createcourse = await Course.create(req.body);
    console.log("coursecreated",createcourse);
    res.send(createcourse);
})

// enroll student in  a course

app.post('/courses/:courseId/enroll/:studentId' ,async(req,res)=>{
       const {courseId,studentId} = req.params

       await Student.updateOne(
           {_id:studentId},
           {$push:{courses:courseId}}
       )

       await Course.updateOne(
         {_id:courseId},
         {$push:{students:studentId}}
       )

       res.send("Students enrolled")
})


