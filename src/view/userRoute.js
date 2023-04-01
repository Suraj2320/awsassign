const express=require("express")
const app=express.Router()
const { signUp, logIn,getUser,patchUser,deleteUser } = require("../controller/userController")

app.post("/signup",signUp)

app.post("/login",logIn)
app.get("/",getUser)
app.delete("/:id",deleteUser)
app.put("/edit/:id",patchUser)


module.exports =app


