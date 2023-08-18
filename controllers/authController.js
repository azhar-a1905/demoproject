const User= require('../models/userModel');
const jwt = require('jsonwebtoken');
exports.signup = async( req,res,next)=>{
try{
    const newUser= await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordConfirm:req.body.passwordConfirm
    });
    const token=jwt.sign({id: newUser._id}, process.env.JWT_SECRET); 

    res.status(201).json({
        status:"success",
        token, 
        data:{
            user:newUser
        }
    })
}
catch(err){
console.log(err)
}}
exports.login = async(req,res,next)=>{
    try{
    const email=req.body.email;
    const password= req.body.password;

    if(!email || !password){
      return res.status(400).json({
        status:'bad request',
        message:"Please provide email and password"
       })
    }
    const user= await User.findOne({email:email}).select('+password')

    console.log(user)

    const token='';
    res.status(200).json({
        status:'success',
        token
    })
}
catch(err){

}}