import express from "express";
import { AddPost, UsersPost,getIndPost } from "./Post.controller.js";
import jwtAuth from "../../Middleware/jwtAuth.js";

export const PostRouter = express.Router();

PostRouter.get('/:userId',UsersPost);
PostRouter.get('/indpost/:indpostId',getIndPost)
PostRouter.post('/add', AddPost);