import express from 'express';
import { addUserComment, deleteUserComment, getCommentByPost } from './Comment.controller.js';

export const CommentRouter = express.Router();

CommentRouter.get('/:postId',getCommentByPost)
CommentRouter.post('/add',addUserComment)
CommentRouter.delete('/:commentId',deleteUserComment)