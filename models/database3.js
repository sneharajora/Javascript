const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const userschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    age:{
        type:Number
    }
},{timestamps:true});

const User = mongoose.mode("User",userschema);

// endpoints

app.post('/users',async (req,res)=>{
    const user = req.body;
      const existinguser = await User.find({email:email}) 

      if(existinguser){
        return res.send("User already exists");
      }

       await User.insertOne(user);
       res.send("user cerated successfully");
 });

 app.get('/users',async(req,res)=>{
    const users = await User.find({});
     res.send(users);
 })

 app.get('/users/:id',async(req,res)=>{
       const user = await User.findById(req.params.id);
       res.send(user);
 }) 

 app.patch('/users/:id',async(req,res)=>{
       const {email,age}  = req.body;
       const updateuser = await User.findByIdAndUpdate(
             {_id:req.params.id},
             {$set:req.body},
             {new:true}
       )
       res.send(updateuser);
 });