import express from "express"
import mongoose from "mongoose";
import '../../Server/models/user.js'
import bcrypt from "bcryptjs"
const router = express.Router();
const User = mongoose.model("User")
router.get('/',(req,res)=>{
res.send("hello")
});

router.post('/signup',(req,res)=>{
const {name, password, email} = req.body;

if(!email || !password || !name){
    return res.status(422).json({error:"Please Fill Out The Whole Form"});
}
User.findOne({email:email}).then((savedUser)=>{
    if(savedUser){
        return res.json({error:"User Already Exists With This Email"})
    }
    bcrypt.hash(password,12).then(hashedpassword=>{
        const user = new User({
            email:email,
            password:hashedpassword,
            name:name
        })
        user.save().then(user =>{
            res.json({message:"Sucessfully Register!!! "})
        }).catch(err=>{
            console.log(err)
        })
    })
   
}).catch(err=>{
    console.log(err)
})
});
export default router;