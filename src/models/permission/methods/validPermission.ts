import { PermissionType } from "../../../types/enums";

function isValidPermission(permission:string): boolean{
    let isValid = permission in PermissionType;
    return isValid;
}
export default isValidPermission;