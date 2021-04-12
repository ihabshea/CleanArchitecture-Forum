import { ObjectId } from "mongoose";
import { Post } from "../../types";
import { computePostHash, fightSpam, verifyValidPermission } from "./methods";

async function preSave(this: Post, next: () => void): Promise<void> {
    await verifyValidPermission(this.user as ObjectId);
    this.hash = await computePostHash(this);
    if(this.isModified("title") || this.isModified("content")){
        await fightSpam(this.hash);
    }
    next();
}   
export default preSave;