import { postModel } from "..";

const fightSpam = async(hash: string): Promise<void> => {
    let foundPost = Boolean(await postModel.findOne({hash}));
    if(foundPost){
        throw Error("This looks exactly like a post you posted before. Take a break."); //Tiktok, is that you?
    }
}
export default fightSpam;