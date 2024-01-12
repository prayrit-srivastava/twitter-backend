import { dislikePost, getLike, isLiked, likePost } from "./Like.repository.js";

export async function LikePost(req,res,next){
    const {userId,postId} = req.body;
    const like = await likePost(userId,postId)
    res.status(200).json(like);
}

export async function disLikePost(req,res,next){
    const {userId,postId} = req.body;
    const like = await dislikePost(userId,postId);
    res.status(200).json(like);
}
export async function getLikes(req,res,next){
    const {postId} = req.params;
    const like = await getLike(postId)
    res.status(200).json(like)
}

export async function isliked(req,res){
    const {userId,postId} = req.query;
    // console.log(userId,postId)
    const result = await isLiked(userId,postId);
    res.status(200).send(result);
}