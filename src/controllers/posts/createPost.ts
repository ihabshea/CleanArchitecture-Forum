import { postModel } from "../../models";
import {JWTType, PaginationParams, Post} from "../../types";
import sanitizeHtml from 'sanitize-html';
import { getUserDevice } from "../../middleware/authentication";

const createPost = async(req: any, res: any): Promise<void> =>{
    let {id, jti}: JWTType = req.user;
    let device = await getUserDevice(jti);
    let {title, content} = req.body as Partial<Post>;
    if(!title || !content){ 
        throw Error("Details have to be provided")
    }
    content = sanitizeHtml(content);
    title = sanitizeHtml(title);
    try{
        await new postModel({user: id, title, content, device}).save();
        res.status(201).send();
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

export {createPost};