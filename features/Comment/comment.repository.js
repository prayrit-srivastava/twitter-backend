import mongoose from "mongoose";
import { commentSchema } from "./Comment.schema.js";
import { ObjectId } from "mongodb";

const commentModel = mongoose.model('Comment',commentSchema);


export const getComment = async (postId)=>{
    try{
        const reqcomment = await commentModel.find({postId:postId})
        if(reqcomment.length == 0){
            return "No comment exist"
        }
        else{
            return reqcomment;
        }
    }catch(err){
        console.log(err);
    }

}
export const addComment= async (userId,postId,content)=>{
    // console.log(userId,postId,content);
    const newcomment = await commentModel({
        userId,postId,content
    })
    // newcomment.save();
await newcomment.save();
// console.log()
}

export const deleteComment = async (commentid)=>{
    await commentModel.deleteOne({_id:new ObjectId(commentid)})
    // console.log(deleteComment);
}