const {Router} = require("express");
const { courseModel, purchaseModel } = require("../db");
const courseRouter = Router();
const { userMiddleware } = require("../middleware/user")

courseRouter.post("/purchase",userMiddleware, async function(req,res){
    //expect the user to pay you money
    const userId = req.userId
    const courseId = req.body.courseId;
 // should check that the user has actully paid the price
 // make sure user does not paying secound time for the same course
    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"you have successfully bought the course"
    })
})

courseRouter.get("/allcourses", async function(req,res){

    const courses = await courseModel.find({})
    res.json({
    courses
    })
})

module.exports = {
    courseRouter: courseRouter
}