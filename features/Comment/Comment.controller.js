import { addComment, deleteComment, getComment } from "./comment.repository.js";

export async function getCommentByPost(req,res,next){
    try{
        const {postId} = req.params;
        const comment = await getComment(postId);   
        if(comment.length == 0){
            return res.status(200).send("No such post exist");
        }
        else{
            return res.status(200).send(comment);
        } 
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }

    
}
export async function addUserComment(req,res,next){
    try{
    const {userId,postId,content} = req.body;
    addComment(userId,postId,content);
    res.status(200).send("comment Added");

    }catch(err){
        console.log(err);
        res.status(500).send("something went wrog while adding comment");
    }
}
export async function deleteUserComment(req,res,next){
    try{
    const {commentId} = req.params;
    await deleteComment(commentId);
    res.status(200).send("The comment has beeen deleted");
    }catch(err){
        console.log(err);
        res.status(500).send("something went wrong in deletion");
}
}
