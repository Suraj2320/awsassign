const express=require("express")
const app=express.Router()
const { signUp, logIn } = require("../controller/userController")

app.post("/signup",signUp)

app.post("/login",logIn)


module.exports =app


