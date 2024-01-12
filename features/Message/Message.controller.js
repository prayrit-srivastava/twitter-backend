import { getAllMessageForUser, sendMessageto } from "./Message.repository.js";


export const getAllMessage = async (req,res,next) => {
const {userId} = req.params;

try{
    console.log(userId);
    const result = await getAllMessageForUser(userId);
    res.status(200).send(result);
}catch(err){
    console.log(err);
    res.status(500).send(err);
}
}

export const sendMessage = async (req,res,next) =>{
    try{
        const {to,from,content} = req.body;
        const result = await sendMessageto(to,from,content);
        res.status(200).send(result);    
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

