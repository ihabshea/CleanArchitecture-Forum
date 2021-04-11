import { PermissionType } from "../../../types/enums";

function isValidPermission(permission:string): boolean{
    let isValid = Object.values(PermissionType).includes(permission as PermissionType);
    return isValid;
}
export default isValidPermission;