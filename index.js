require('dotenv').config()
console.log(process.env.MONGO_URL)
const express = require('express');
const { userRouter } = require('./routes/user');
const { adminRouter } = require('./routes/admin');
const { courseRouter } = require('./routes/course');
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/admin",adminRouter);
app.use("/api/course",courseRouter);


async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
}

main()
console.log("listing to port 3000")