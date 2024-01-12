import mongoose from "mongoose";
import { userSchema } from "./User.Schema.js";
import { ObjectId } from "mongodb";
import { initiateMsg } from "../Message/Message.repository.js";

const userModel = mongoose.model('User',userSchema);

export const getAllUser = async ()=>{
    try{
        const users = await userModel.find({}); 
        return users;    
    }catch(err){
        console.log(err)
    }

}
export const getUserById = async (id)=>{
    try{
        const requser = await userModel.find({_id:new ObjectId(id)});
        // console.log(requser);
        return requser;    
    }catch(err){
        console.log(err);
    }

}
export const addUser = async (imageUrl,name,email,username,password)=>{
    try{
// const users = await userModel.find({});
//         console.log(users)
    
        const ifuser = await userModel.find({email:email});
        // console.log(ifuser)
        if(ifuser.length != 0){
            throw new Error("User already Present");
        }
        if(imageUrl.length<5){
            throw new Error("invalid image URL.")
        }
        const newUser = userModel({imageUrl,name,email,username,password});
        await newUser.save();
        await initiateMsg(newUser.id);
        return newUser.id;
    }catch(err){
        console.log(err);
    }


}
export const validateUser = async (email,password) =>{

    return await userModel.find({email:email,password:password})
}
