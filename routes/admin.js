const {Router} = require("express");
const adminRouter = Router(); 
const { adminModel, userModel, courseModel } = require("../db");
const jwt = require('jsonwebtoken');
const{ JWT_ADMIN_PASSWORD} = require("../config")
const {adminMiddleware} = require("../middleware/admin")

adminRouter.post("/signup",async function(req,res){
    const {email, password,firstName,lastName} = req.body  // zod
   
    // const hashedPassword = await bcrypt.hash(password,5)
    // put in try catch 
    adminModel.create({
        email,
        password,
        firstName,
        lastName,
    })
    res.json({
        message:"admin signup successfully"
    })
})

adminRouter.post("/signin",async function(req,res){
    const {email, password } = req.body
  // password should hashes and we connect compare user provide password and the database

    const response = await userModel.findOne({
        email:email,
        passsword:password
    })
   
    if(response){
        const token = jwt.sign({
            id:response._id
        },JWT_ADMIN_PASSWORD)
    
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"incorrect credential"
        })
    }
   
})

adminRouter.post("/create/course",adminMiddleware,async function(req,res){
    const adminId = req.userId;

    const{title,description,imageUrl,price} = req.body;

   const course =  await courseModel.create({
        title , 
        description, 
        imageUrl,
        price,
        creatorId:adminId
    })

    res.json({
        message:"Course created",
        courseId: course._id
    })
})


adminRouter.put("/update/course",adminMiddleware,async function(req,res){
    
    res.json({
        message:"admin signin"
    })
})

adminRouter.get("/course/allcourses",function(req,res){
    res.json({
        message:"admin signin"
    })
})

module.exports={
    adminRouter: adminRouter,
}