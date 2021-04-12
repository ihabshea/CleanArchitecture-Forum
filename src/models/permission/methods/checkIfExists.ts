import { permissionModel } from "../..";
import { Permission, User } from "../../../types"

async function checkIfExists(permission: Permission): Promise<boolean> {
    let permissionExists = Boolean(await permissionModel.findOne({
        user_id: permission.user_id,
        permissionLevel: permission.permissionLevel,
        entity: permission.entity
    }));
    return permissionExists;
}   

export default checkIfExists;