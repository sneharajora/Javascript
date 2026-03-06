const express = require('express');
const mongoose = require('mongoose');
const { type } = require('os');

const app = express();
app.use(express.json());
 


 ////// practcie code 
// connect db

mongoose.connect('mongodb://127.0.0.1:27017/shop').then(()=> console.log('Mongo connected'));


// schema 
 //User schema 
 const userSchema = new mongoose.Schema({
    name:{
      type:String,
    },
    email:{
       type:String,
       unique:true
    }
 });

 // order schema

 const orderSchema = new mongoose.Schema({
     item:String,
     price:Number,
     quantity:Number,
     user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
     }
 });

 //Models

 const User = mongoose.model("User",userSchema);
 const Order = mongoose.model("Order",orderSchema);


 // routes 
// create user

app.post('/users',async(req,res)=>{
    const user = await User.create(req.body);
    console.log("user created:",user);
    res.json(user);
});


// create order for a user

app.post('/orders',async(req,res)=>{
 const order = await Order.create(req.body);
  console.log("order create:",order);
  res.json(order);
})

//get all users
app.get('/users',async(rq,res)=>{
   const users = await User.find();
   console.log("All Users:",users);
   res.json(users);
})

// get specific user 
app.get('/users/:id',async(req,res)=>{
    const user = await User.findById(req.params.id);
    console.log(user);
    res.json(user);
})

// get order of specific users
app.get('users/:id/orders',async(req,res)=>{
     const order = await Order.find({user:req.params.id});
     console.log("Orders of user:",order);
     res.json(order);
});


app.listen(3001,()=> console.log('Server running on port 3001'));
