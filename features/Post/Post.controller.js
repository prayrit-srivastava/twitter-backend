
import { addPost, getUserPost ,getindpost} from "./Post.repository.js";

export async function UsersPost(req,res,next){
    try{
        const {userId} = req.params;
        // console.log(userId);
        const posts = await getUserPost(userId);
        if(posts.length == 0 || !posts){
            res.status(200).send("No post found for this user");
        }
        else{
            res.status(200).send(posts);
        }
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }

}
export async function getIndPost(req,res,next){
    try{
        const {indpostId} = req.params;
        console.log(indpostId);
        const result = await getindpost(indpostId);
        res.status(200).send(result);
    }catch(err){
        console.log(err);
        res.status(500).send("something went wrong");
    }

}
export async function AddPost(req,res,next){
    try{
        const {userId,imageUrl,caption} = req.body;
        await addPost(userId,imageUrl,caption);
        res.status(200).send("Post added successfully")
    }catch(err){
        console.log(err);
        res.status(500).send("something went wrong");
    }
}