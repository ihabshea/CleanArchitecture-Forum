import {Document, ObjectId} from 'mongoose';
import {DeviceType} from './enums';
export default interface Device extends Document{
    _id: ObjectId;
    user_id: ObjectId;
    token_id: ObjectId;
    lastActivity: Date;
    kickedOut: Boolean;
    loggedOut: Boolean;
    createdAt: Date;
    device_name: string;
    device_type: DeviceType;
    device_token: string | null; //let people pull out of notifications
}