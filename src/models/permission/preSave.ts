import { Permission } from "../../types";
import { checkIfExists, verifyAdmin, verifyNewUser } from "./methods";
import isValidEntity from "./methods/validEntity";
import isValidPermission from "./methods/validPermission";

async function preSave(this: Permission, next: () => void){
    let validPermission = isValidPermission(this.permissionLevel);
    let validEntity = isValidEntity(this.entity);
    let canCreate = false;
    let createdBefore = false;
    if(!canCreate){
        throw Error("Illegal operation: can not create permission due to insufficient permission.");
    }
    if(!validPermission){
        throw Error("Illegal operation: not a valid permission level")
    }
    if(!validEntity){
        throw Error("Illegal operation: not a valid entity in the system.")
    }
    if(this.assigned_by){
        canCreate = await verifyAdmin(this.assigned_by);
    }else if(!this.assigned_by){
        canCreate = await verifyNewUser(this.user_id);
    }
    createdBefore = await checkIfExists(this);
    if(createdBefore){
        throw Error("Illegal operation: permission already exists.");
    }
 
    next();
}   

export default preSave;
