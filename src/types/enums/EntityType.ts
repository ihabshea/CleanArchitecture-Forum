/* 
This document lists types of the entities in the system to better implement CRUD permissions for them.
The list will obviously extend as the system extends.
Important reference in the pre-save hooks for each of these. 
*/
enum EntityType{
    PERMISSION = 'permission',
    POST = "post",
    COMMENT = "comment",
    USER = "user", //obviously any user can create themselves, but not new users.
    RATE = "rate",
}

export default EntityType;