const {Router} = require("express")
const userRouter = Router();
const jwt = require('jsonwebtoken');
const {JWT_USER_PASSWORD} = require("../config")
const { userModel, purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user")

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

    const response = userModel.findOne({
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

userRouter.get("/purchases", userMiddleware,async function(req,res){
   const userId = req.userId

   const purchases = await purchaseModel.find({
    userId
   })

   const courseData = await courseModel.find({
    _id:{$in : purchases.map(x => x.courseId)}
   })
    res.json({
        purchases, 
        courseData
    })
})

module.exports = {
    userRouter: userRouter
}