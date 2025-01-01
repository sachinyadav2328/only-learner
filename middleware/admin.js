const jwt = require('jsonwebtoken');
const {JWT_ADMIN_PASSWORD} = require("../config")

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decorded = jwt.verify(token,JWT_ADMIN_PASSWORD)

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
    adminMiddleware:adminMiddleware
}