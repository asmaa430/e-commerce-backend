import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";
import appError from "../utils/appError.js";
import asyncHandler from "express-async-handler"
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: '30d',
    });
};
//register 
export const registerUser  = asyncHandler(async(req, res) => {
    
        const {firstName , lastName , email , password } = req.body;
        const userExist = await User.findOne({email});
        if (userExist) {
            res = appError.create('User already exist',400,"fail")
            return res;
        }
            const hashedPassword = await bcrypt.hash(password, 8);
            const user = await User.create({firstName , lastName , email , password:hashedPassword });
            const token  =  generateToken(user._id);
             if(user)
            res.status(201).json({ message: "User registered successfully", data :{user},token });

        else{
        res.status(500);
        throw new Error('Invalid user data');
    }
});
     // login 
export const loginUser =  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
         const token =  generateToken(user._id);
        res.json({ message: "Login successful", token });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});
