const {Router} = require("express")
const userRouter = Router();
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = "userPassword"
const { userModel } = require("../db");
//bycrpt , zod , jwttkon
userRouter.post("/signup", function(req,res){
    const{ email, password,firstName,lastName } = req.body
    
    userModel.create({
        email,
        password,
        firstName,
        lastName
    })
    res.json({
        message:"sucessfully signup"
    })
})

userRouter.post("/signin", function(req,res){
    const{email, password} = req.body

    const response = userModel.find({
        email:email,
        password:password
    })
    if(response){
   const token = jwt.sign({
    id:response._id
   },JWT_USER_PASSWORD)

   res.json({
    token
   })
    }else{
        res.json({
            message:"signin endpoint"
        })
    }
   
})

userRouter.get("/purchases", function(req,res){
    res.json({
        message:"cou endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}