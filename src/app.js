const express=require("express")
const cors=require("cors")
require("dotenv").config()
const connectDB=require("./config/db")

const app=express()

app.use(express.json())
app.use(cors())
const PORT= process.env.port

connectDB()
.then(()=>{
     console.log("DB connected!")
     app.listen(PORT,()=>{
          console.log(`Server connected to port : ${PORT}`)
     })
})
.catch(()=>{
console.log("DB not connected!")
})



