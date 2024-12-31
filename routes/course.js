const {Router} = require("express");
const { courseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase", function(req,res){
    //expect the user to pay you money
    res.json({
        message:"cou endpoint"
    })
})

courseRouter.get("/allcourses", function(req,res){
    res.json({
        message:"allcourses endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}