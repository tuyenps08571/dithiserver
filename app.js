const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser=require("body-parser")
const app = express();


//connect db
require("./src/db/index")
//routes
const UserRoute=require("./src/routes/user.route")
const ProductRoute=require("./src/routes/product.route")
const BookRoute=require("./src/routes/book.route")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(cookieParser());
//routes handler

app.use("/user",UserRoute)
app.use("/product",ProductRoute)
app.use("/book",BookRoute)

app.get("/",(req,res,next)=>{
    res.status(200).send({
        message:"hello word"
    })
})

app.listen(3000,()=>{
    console.log("I am listen port 3000")
})

