import { strict } from "assert";
import mongoose, { model, Mongoose, Schema } from "mongoose";
import { type } from "os";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const User = mongoose.model("User",UserSchema);
export default User;