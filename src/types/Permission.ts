import {Document, ObjectId} from 'mongoose';
import { User } from '.';
import {EntityType, PermissionType} from './enums';
interface Permission extends Document{
    entity: EntityType;
    permissionLevel: PermissionType;
    assigned_by: User;
    user_id: ObjectId;
    createdAt: Date;
    modifiedAt: Date;
    deletedAt: Date;
}

export default Permission;