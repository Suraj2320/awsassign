require("dotenv").config()
const PORT=process.env.PORT || 8000
const express=require("express")
const connect=require("./config/db")
const cors=require("cors")
const app=express()
const userRoute=require("./src/view/userRoute")


app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
app.use("/users",userRoute)


app.use("/users",userRoute)
app.listen(PORT,async ()=>{
    await connect
    console.log("SERVER IS RUNNING")
})
