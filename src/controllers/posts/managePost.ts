import { postModel } from "../../models"
import { Post } from "../../types";
import { verifyPostOwner } from "./helpers";

const deletePost = async(req: any, res: any): Promise<void> => {
//posts are not really deleted, they are just flagged.
    let {id} = req.query;
    let {id: userId} = req.user;
    try{
    let findPost: Post | null  = await postModel.findById(id);
    if(!findPost) throw Error("Post does not exist");
    if(findPost?.deletedAt){ throw Error("This post had been already deleted.")}

    await verifyPostOwner(userId, findPost?._id);
    findPost.deletedAt = new Date();
    await findPost.save();
    res.status(202).send();
    }catch(err){
        res.status(400).json({error: err.message});
    }
}
const updatePost = async(req: any, res: any): Promise<void> => {
    //posts are not really deleted, they are just flagged.
        let {id} = req.query;
        let {title, content} = req.body as Partial<Post>;
        let {id: userId} = req.user;
        try{
        let findPost: Post | null  = await postModel.findById(id);
        if(!findPost) throw Error("Post does not exist");
        if(findPost?.deletedAt){ throw Error("This post had been already deleted.")}
    
        await verifyPostOwner(userId, findPost?._id);
        if(!title && !content){
            throw Error("What exactly are you updating?")
        }
        if(title){
            findPost.title = title;
        }
        if(content){
         findPost.content = content;
        }
        await findPost.save();
        res.status(202).send();
        }catch(err){
            res.status(400).json({error: err.message});
        }
    }

export {deletePost, updatePost}