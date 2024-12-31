const {Router} = require("express");
const { adminModel } = require("../db");
const adminRouter = Router();

adminRouter.post("/signup",async function(req,res){
    const {fullName,email, password} = req.body
   
    const hashedPassword = await bcrypt.hash(password,5)
    adminModel.create({
        email: email,
        password:hashedPassword,
        fullName:fullName
    })
    res.json({
        message:"admin signup"
    })
})

adminRouter.post("/signin",function(req,res){
    res.json({
        message:"admin signin"
    })
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