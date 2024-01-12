// const express = require('express');
import express from 'express';
import { UserRouter } from './features/User/User.route.js';
import bodyParser from 'body-parser';
import { PostRouter } from './features/Post/Post.route.js';
import { LikeRouter } from './features/Like/Like.route.js';
import { CommentRouter } from './features/Comment/Comment.route.js';
import jwtAuth from './Middleware/jwtAuth.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectotMongoDb from './src/config/mongodb.js';
import { messageRouter } from './features/Message/Message.route.js';
const server = express();

server.use(bodyParser.json());
server.use(cookieParser());
server.use(cors());
server.use('/api/user', UserRouter);
server.use('/api/post',PostRouter);
server.use('/api/like', LikeRouter);
server.use('/api/comment', CommentRouter);
server.use('/api/message',messageRouter)

server.listen(3000,()=>{
    console.log('Server is listening at port 3000')
    connectotMongoDb();
}
    );