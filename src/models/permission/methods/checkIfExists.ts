import { permissionModel } from "../..";
import { Permission, User } from "../../../types"
import { EntityType, PermissionType } from "../../../types/enums";

async function checkIfExists(permission: Permission): Promise<boolean> {
    let permissionExists = Boolean(await permissionModel.findOne({
        user_id: permission.user_id,
        permissionLevel: permission.permissionLevel,
        entity: permission.entity
    }));
    return permissionExists;
}   

export default checkIfExists;