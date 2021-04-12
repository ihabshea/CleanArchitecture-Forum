import { ObjectId } from "mongoose";
import { userModel } from "../..";

async function verifyNewUser(user_id: ObjectId): Promise<boolean> {
    let newUser = Boolean(await userModel.findOne({_id: user_id, new: true}));
    return newUser;
}   

export default verifyNewUser;