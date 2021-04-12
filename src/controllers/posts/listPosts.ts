import { postModel } from "../../models";
import {PaginationParams} from "../../types";

const listMyPosts = async(req: any, res: any): Promise<void> =>{
    let {userId} = req.user;
    let {page=0, per=20} = req.body as PaginationParams;
    let skip = per/page | 0;
    let posts = await postModel.find({user_id: userId}).skip(skip).limit(per);
    let allPosts = await postModel.countDocuments({user_id: userId});
    res.status(200).json({total: allPosts, thisPage: posts.length, page, per, posts});
}
const listPostsByDevice = async(req: any, res: any): Promise<void> => {
    let {device_id, page=0, per=20} = req.query;
    let skip = per/page | 0;
    try{
    let posts = await postModel.find({device: device_id}).skip(skip).limit(per);
    let allPosts = await postModel.countDocuments({device: device_id});

    res.status(200).json({total: allPosts, thisPage: posts.length, page, per, posts});
    }catch(err){
        res.status(400).json({error: err.message});
    }
}   
const listAllPosts = async(req: any, res: any): Promise<void> =>{
    let {page=0, per=20} = req.body as PaginationParams;
    let skip = per/page | 0;
    let posts = await postModel.find().skip(skip).limit(per);
    let allPosts = await postModel.countDocuments();

    res.status(200).json({total: allPosts, thisPage: posts.length, page, per, posts});
}
export {listMyPosts,listPostsByDevice,  listAllPosts};