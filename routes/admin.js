const {Router} = require("express");


const adminRouter = Router();


adminRouter.post("/signup",function(req,res){
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
    adminRoute: adminRouter,
}