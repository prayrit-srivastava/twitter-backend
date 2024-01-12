import mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    posts: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'IndPost'
    }]
})

export const individualPost = new mongoose.Schema({
    ImageUrl:{
        type: String,
    },
    caption: {
        type:String,
    }
})
// const posts = (new PostSchema(1,1,"https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain","my first Post user1"),new PostSchema(2,2,"https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain","my first Post"))
