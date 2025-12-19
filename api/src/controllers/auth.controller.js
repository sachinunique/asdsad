import User from '../models/user.model.js'
import bcrypt, { hashSync } from 'bcryptjs';

export const auth =  async(req,res) =>{
    const {username,email,password} = req.body;

    if(!username || !email || !password || username === "" || email==="" || password === ""){
        res.status(400).json({
            massage :"All Field Is Required !"
        })}
// haspasword
const haspasword = bcrypt.hashSync(password,10);
        const newUser = new User({
            username,
            email,
            password : haspasword
        })
        try {
            await newUser.save();
        res.status(200).json('signUp seccessfully')
        } catch (error) {
            res.status(500).json({
                massage:error.massage
            })
        }
};
        

      
       
        
    
    
    