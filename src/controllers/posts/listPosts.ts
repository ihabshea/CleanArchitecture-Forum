import { postModel } from "../../models";
import {PaginationParams} from "../../types";

const listMyPosts = async(req: any, res: any): Promise<void> =>{
    let {userId} = req.user;
    let {page=0, per=20} = req.body as PaginationParams;
    let skip = per/page | 0;
    let posts = await postModel.find({user_id: userId}).skip(skip).limit(per);
    res.status(200).json({page, per, posts});
}
const listAllPosts = async(req: any, res: any): Promise<void> =>{
    let {page=0, per=20} = req.body as PaginationParams;
    let skip = per/page | 0;
    let posts = await postModel.find().skip(skip).limit(per);
    res.status(200).json({page, per, posts});
}
export {listMyPosts, listAllPosts};