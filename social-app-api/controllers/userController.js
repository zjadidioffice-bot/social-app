const User=require("../models/User");
const bcrypt=require("bcrypt");
const registerUser=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const hashPassword=await bcrypt.hash(password,10);

        const user=await User.create({
            username,
            email,
            password:hashPassword,
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({
            message:error.message,
        });
    }
};

const loginUser=async(req,res)=>{
    try {
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json(
                {
                    message:"email or password is incorrect"
                }
            );
        }
        const isPasswordCorrect=await bcrypt.compare(
            password,
            user.password
        );
        if(!isPasswordCorrect){
            return res.status(401).json({
                message:"email or password is incorrect"
            });
        }

        res.json({
            message:"login successfully",
            user:{
                id:user._id,
                username:user.username,
                email:user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message:error.message  
        });
    }
};
module.exports={
    registerUser,
    loginUser
};