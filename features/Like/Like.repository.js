import mongoose from "mongoose";
import { LikeSchema } from "./Like.Schema.js";
import { ObjectId } from "mongodb";


const likeModel = mongoose.model('Like',LikeSchema);


export const getLike = async (postId) => {
    try{
        const likeforpost = await likeModel.find({postId:postId});
        return likeforpost.length;    
    }catch(err){
        console.log(err);
    }
}
export const isLiked = async (postId,userId) => {
    const post = await likeModel.find({userId:new ObjectId(userId),postId:new ObjectId(postId)})
    // console.log(post)
    if(post.length != 0){
        return true;
    }
    return false;
}

export const likePost = async (userId,postId)=>{
    try{
        const post = await likeModel.find({userId:userId,postId:postId})
        if(post.length == 0){
            const newLike = await likeModel({
                userId:userId,
                postId:postId
            })
            await newLike.save();
            // await likeModel.push(newLike);
        }
        return getLike(postId);
    }catch(err){
        console.log(err);
    }

}

export const dislikePost = async (userId,postId)=>{
    try{
        await likeModel.deleteOne({userId:userId,postId:postId});
        // likeModel.save();
        return getLike(postId);
    }catch(err){
        console.log(err);
}
}
