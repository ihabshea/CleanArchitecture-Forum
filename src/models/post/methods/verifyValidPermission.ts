import { ObjectId } from "mongoose";
import { User } from "../../../types";
import { EntityType, PermissionType } from "../../../types/enums";
import { permissionModel } from "../../permission";

const verifyValidPermission = async (user: ObjectId): Promise<Boolean> => {
    let validPermission = Boolean(await permissionModel.findOne({
        user_id: user,
        entity: EntityType.POST,
        permissionLevel: {$in: [PermissionType.C, PermissionType.CR, PermissionType.CRU, PermissionType.CRUD]}
    }));
    if(!validPermission){
        throw Error("You are not allowed to post.")
    }
    return validPermission;
}
export default verifyValidPermission;