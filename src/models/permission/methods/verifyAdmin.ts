import { permissionModel } from "../..";
import { User } from "../../../types"
import { EntityType, PermissionType } from "../../../types/enums";

async function verifyAdmin(assigned_by: User): Promise<boolean> {
    let findCreatePermissionsPermission = Boolean(await permissionModel.findOne({user:assigned_by, entity: EntityType.PERMISSION, permissionLevel: {$in: [PermissionType.CR, PermissionType.CRU, PermissionType.CRUD]} }));
    return findCreatePermissionsPermission;
}   

export default verifyAdmin;