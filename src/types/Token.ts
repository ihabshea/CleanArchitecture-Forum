import {Document, ObjectId} from 'mongoose';
import { User, TokenRevocation } from '.';
import Device from './Device';
interface Token extends Document{
    _id: ObjectId;
    user_id: ObjectId;
    token: string;
    createdAt: Date;
    revokedAt: Date;
    revokeReference: TokenRevocation
}
export default Token;