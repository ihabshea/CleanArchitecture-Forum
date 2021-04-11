import {Document, ObjectId} from 'mongoose';
import { Token } from '.';
import { User } from '.';
import {Device} from './';
export default interface LoginDetails extends Document{
    _id: ObjectId;
    user_id: ObjectId;
    device: Device;
    token: Token;
    createdAt: Date;
}