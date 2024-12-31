const {Router} = require("express")
const userRouter = Router();
const { userModel } = require("../db");
//bycrpt , zod , jwttkon
userRouter.post("/signup", function(req,res){
    const{fullName,email, password} = req.body
    
    res.json({
        message:"signup endpoint"
    })
})

userRouter.post("/signin", function(req,res){
    res.json({
        message:"signin endpoint"
    })
})

userRouter.get("/purchases", function(req,res){
    res.json({
        message:"cou endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}