import { Post } from "../../../types";
import { commentModel } from "../../";


const verifyPostHasZeroReplies = async(post: Post): Promise<boolean> => {
    let postComments = await commentModel.countDocuments({post});
    if(postComments > 0){
        throw Error("You can't update a post that has commnets.")
    }
    return postComments > 0;
} 
export default verifyPostHasZeroReplies;