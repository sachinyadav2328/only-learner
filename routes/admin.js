const {Router} = require("express");
const { adminModel, userModel } = require("../db");
const jwt = require('jsonwebtoken');
const JWT_ADMIN_PASSWORD = "adminPassword"
const adminRouter = Router();

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

    const response = await userModel.find({
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

adminRouter.post("/create/course",function(req,res){
    res.json({
        message:"admin signin"
    })
})


adminRouter.put("/update/course",function(req,res){
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