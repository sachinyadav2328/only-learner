const jwt = require('jsonwebtoken');
const {JWT_USER_PASSWORD} = require("../config")

function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decorded = jwt.verify(token,JWT_USER_PASSWORD)

    if(decorded){
        req.userId = decorded.id;
        next()
    }else{
        res.status(403).json({
            message:"you are not signed in"
        })
    }
}


module.exports = {
    userMiddleware:userMiddleware
}