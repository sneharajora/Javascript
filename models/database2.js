// mongo db questions
// fetch all users

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// User schema 
const userSchema = mongoose.Schema({
     name:{
        type:String
     },
     email:{
        type:String,
         unique:true
     }
})

// product  schema
 
const productSchema = mongoose.Schema({
    name:{
        type:String
    },
    price:String,
    stock:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

// cart

const cartschema = mongoose.Schema({
    itemname:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"Product"
    },
    quantity:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})
  
const User = mongoose.model('User',userSchema);
const Product = mongoose.model('Product',productSchema);
const Cart = mongoose.model('Cart',cartschema);

// routes
app.post('/cart',async(req,res)=>{
     const cartadd = await Cart.create(req.body);
     console.log("added to cart",cartadd);
     res.json(cartadd);
})

app.get('/users/:id/cart',async(req,res)=>{
    const getcart = await Cart.findById(req.params.id);
     res.send({message:"Cart fetched"});
     console.log("Items in the cart")
})

app.delete('/product/:id/cart',async(req,res)=>{
      const removeitem = await Cart.findByIdAndDelete(req.params.id);
      console.log("Item Removed from cart");
})


app.listen(3002,()=>console.log("Listening on port 3002"));