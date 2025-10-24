import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"; 

const userSchema = new mongoose.Schema({
       firstName : {
             type : String,
             required : true,
        }
        , lastName : {
            type : String,
            required: true
        },
        email : {
            type: String,
            required: true,
            unique: true,
            validate :[validator.isEmail ,'failed , enter valid email ']
        },
        password : {
            type : String,
            required: true
        }
      ,
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    address: String,
    createdAt: Date,
      token :{
        type: String
      }
})
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);};
const User = mongoose.model("User", userSchema)
export default User