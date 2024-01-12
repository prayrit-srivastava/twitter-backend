import mongoose from "mongoose";
import { PostSchema, individualPost } from "./Post.schema.js";
import { ObjectId } from "mongodb";

const PostModel = new mongoose.model('Post',PostSchema);
const IndPost = new mongoose.model('IndPost',individualPost);

export const addPost = async (userId,post,caption) => {
    try{
        let user = await PostModel.find({userId});
        if(user.length == 0){
            const newuser = PostModel({
                userId,
                posts:[]
            })
            // newuser.save();
            const newpost = IndPost({
                ImageUrl: post,
                caption
            })
            await newpost.save();
            newuser.posts.push(newpost);
            newuser.save();
        }else{
            const newpost = IndPost({
                ImageUrl: post,
                caption
            })
            await newpost.save();
            user = user[0];
            // console.log(user);
            // console.log(newpost);
            user.posts.push(newpost);
            await user.save();
        }
        
    }catch(err){
        console.log(err);
    }

}

export const getUserPost = async (userId) => {
    try{
        const user = await PostModel.find({userId: new ObjectId(userId)})
        if(user.length == 0){
            return new Error("no such user Exist");
        }
        return user[0].posts;
    }catch(err){
        console.log(err);
        return new Error("Something went Wrong");
    }

}

export const getindpost = async (id)=>{
    const indpost = await IndPost.findById({_id:id});
    // console.log(indpost);
    return indpost;
}