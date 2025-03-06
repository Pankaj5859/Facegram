const express=require("express")
const userRouter=express.Router()
const {Users}=require("../models/userSchema")

userRouter.get("/users",()=>{})


userRouter.post("/signup",(req,res)=>{
   const {firstName,lastName,userName,password,dateofBirth}=req.body
})





module.exports=userRouter