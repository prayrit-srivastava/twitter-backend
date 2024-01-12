import  express  from "express";
import { getUsers, getUsersById, loginUser, registerUser } from "./User.controller.js";

export const UserRouter = express.Router();

UserRouter.get('/',getUsers)
UserRouter.get('/:id',getUsersById)
UserRouter.post('/register',registerUser)
UserRouter.post('/login',loginUser)
// UserRouter.post('/',)
// UserRouter.delete('/',)
