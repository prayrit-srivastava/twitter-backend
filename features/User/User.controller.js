import { addUser, getAllUser, validateUser } from "./User.repository.js";
import { getUserById } from "./User.repository.js";
import jwt from 'jsonwebtoken';

export async function getUsers(req,res,next){
    try{
        const result = await getAllUser();
        res.status(200).send();
    }catch(err){
        console.log(err);
        res.status(500).send("something went wrong");
    }

}
export async function getUsersById(req,res,next){
    try{
        const {id} = req.params; 
        // console.log(id);  
        const result = await getUserById(id); 
        // console.log(result);                         
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(500).send("something went wrong");
    }
}
export async function registerUser(req,res,next){
    
    try{
        const {imageUrl,name,email,username,password} = req.body;
        const id = await addUser(imageUrl,name,email,username,password);
        return res.status(200).send(id);
    }
    catch(error){
        return res.status(400).send(error);
    }
}
export async function loginUser(req,res,next){
    const {email,password} = req.body;
    // console.log(email,password);
    const user = await validateUser(email,password);
    // console.log(user);
    if(user.length == 0){
        return res.status(400).send('No user Found')
    }
    // const token = jwt.sign({email:email,password:password},"Mytwitter",{expiresIn:'1h'});
    res
    .status(200)
    // .cookie("token",token,{ maxAge: 900000, httpOnly: false })
    .send(user[0]);
}