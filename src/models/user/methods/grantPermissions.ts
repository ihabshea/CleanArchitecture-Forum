import { User } from "../../../types";
import { $enum } from "ts-enum-util";
import { EntityType, PermissionType } from "../../../types/enums";
import { permissionModel } from "../..";

async function grantPermissions (user: User): Promise<void> {
    
    $enum(EntityType).map(async(entity: EntityType) => {
        //needs better structure
        if(entity !== "permission" && entity !== "user"){
            await new permissionModel({
                user_id: user._id,
                entity,
                permissionLevel: PermissionType.CR
            }).save();
        }
        
    });
}
export default grantPermissions;