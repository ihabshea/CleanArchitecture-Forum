import { ObjectId } from "mongoose";
import { permissionModel, userModel } from "../..";
import { User } from "../../../types"
import { EntityType, PermissionType } from "../../../types/enums";

async function verifyNewUser(user_id: ObjectId): Promise<boolean> {
    let newUser = Boolean(await userModel.findOne({_id: user_id, new: true}));
    return newUser;
}   

export default verifyNewUser;