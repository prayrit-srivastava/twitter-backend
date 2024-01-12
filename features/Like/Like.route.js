import express from "express";
import { LikePost, disLikePost, getLikes, isliked } from "./Like.controller.js";

export const LikeRouter = express.Router();

LikeRouter.get('/isLiked',isliked)
LikeRouter.get('/:postId',getLikes)
LikeRouter.post('/like',LikePost)
LikeRouter.post('/dislike',disLikePost)
