import mongoose, { Mongoose } from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./Routes/auth.js";
import './models/user.js';
const app = express();
const PORT = 4000;
app.use(express.json())
app.use(router) //routing from route.js folder using get
const CUSTOM_MIDDLEWARE = (req,res,next)=>{
    console.log("Middleware Executed");
    next();
}

app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());
// app.use(CUSTOM_MIDDLEWARE)
const CONNECTION_URL = 'mongodb+srv://socialnetwork:socialnetwork@cluster0.c6z3v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(CONNECTION_URL).then(()=>{
    console.log(`server running: ${PORT}`) 
})


app.get("/login",CUSTOM_MIDDLEWARE,(req,res)=>{    //Specific for particualr navigation middleware
    console.log("hello from LoginPage")
    res.send("Hello I am response from server")//BROWER
})

app.listen(PORT,()=>{
    console.log(`server running ON:`,PORT) //TERMINAL
})