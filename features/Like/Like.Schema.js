import mongoose from "mongoose";

export const LikeSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User' 
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post' 
    }
})

