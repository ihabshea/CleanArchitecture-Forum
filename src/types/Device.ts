import {Document, ObjectId} from 'mongoose';
import {DeviceType} from './enums';
import {Token, User} from '.';
export default interface Device extends Document{
    _id: ObjectId;
    user_id: ObjectId;
    device_name: string;
    device_type: DeviceType;
    device_token: string | null; //let people pull out of notifications
}