/* 
This document lists types of the entities in the system to better implement CRUD permissions for them.
The list will obviously extend as the system extends.
Important reference in the pre-save hooks for each of these. 
*/
enum PermissionType{
    C = "create-only", //this is pretty much useless, but maybe not.
    R = "read-only",
    CR = "create-read", // users can read and create 
    CRU = "create-read-update",
    CRUD = "create-read-update-delete",
}

export default PermissionType;