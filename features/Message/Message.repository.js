import mongoose from "mongoose"
import { MessageSchema, MsgSchema } from "./Message.schema.js";
import { ObjectId } from "mongodb";

const messageModel = mongoose.model('Message',MessageSchema);
const msgModel = mongoose.model('Msg',MsgSchema);

export const initiateMsg = async (userId) => {
    const newMessage = messageModel({
        userId:userId,
        message:[]
    })
    await newMessage.save();
}

export const getAllMessageForUser = async (userId)=>{
    try{
        const user = await messageModel.find({userId:new ObjectId(userId)});
        if(user.length == 0 )
            return new Error("No Message found for this user");
        console.log(user);
        return user;     
    }catch(err){
        console.log(err)
        return new Error("something went wrong");
    }
}

export const sendMessageto = async (to, from, content)=>{
    try{
        let user = await messageModel.find({userId:to});
        if(user.length == 0 ){
            return new Error("User not found");
        }
       const newmsg = msgModel({
        to: to,
        from: from,
        content: content
       })
       user = user[0];
        await newmsg.save();
        user.message.push(newmsg);  
        user.save();
        return user.message;   
    }catch(err){
        console.log(err)
        return new Error("something went wrong");
    }
}