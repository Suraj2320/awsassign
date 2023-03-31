const userModel =require("../model/userModel")
const argon2=require("argon2")
const jwt=require("jsonwebtoken")

const signUp=async (req,res)=>{
    const {firstname,lastname,mobileNumber,password}=req.body
//console.log(firstname,lastname,password);
const hash=await argon2.hash(password)
try{
    const user=new userModel({firstname,lastname,mobileNumber,password:hash})
    await user.save()    
    return res.status(201).send("user created")
}
catch(e){
    console.log(e.message)
    return res.send(e.message)
}
}

const logIn=async (req,res)=>{
    
    const {mobileNumber,password}=req.body;
    
    const user=await userModel.findOne({mobileNumber});
  console.log(user,password)
  if(user){
    if( await argon2.verify(user.password,password)){
        const token=jwt.sign({id:user._id,firstname:user.firstname,lastname:user.lastname,mobileNumber:user.mobileNumber},"SECRET",{expiresIn:"24 hours"})
        const refreshToken=jwt.sign({id:user._id,firstname:user.firstname,lastname:user.lastname,mobileNumber:user.mobileNumber},"REFRESH",{expiresIn:"7 days"})
        return res.status(201).send({message:"login sucess",token,refreshToken,user})
    }
    else{
        return res.status(401).send("wrong credentials")
    }
  }
  else{
    return res.status(401).send("wrong credentials")
}

}

module.exports ={logIn,signUp}