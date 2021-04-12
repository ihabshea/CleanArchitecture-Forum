import { ObjectId } from "mongoose";
import { postModel } from "../../../models";

const verifyPostOwner = async(user_id: ObjectId, post_id: ObjectId): Promise<boolean>=> {
    let verifyOwnership = Boolean(await postModel.findOne({_id: post_id, user:user_id}));
    if(!verifyOwnership){
        throw Error("This is not your post.");
    }
    return verifyOwnership;
}
export default verifyPostOwner;