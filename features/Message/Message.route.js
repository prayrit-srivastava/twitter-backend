import { Router } from "express";
import { getAllMessage, sendMessage } from "./Message.controller.js";

export const messageRouter = new Router();

messageRouter.get('/:userId',getAllMessage)
messageRouter.post('/send',sendMessage)
