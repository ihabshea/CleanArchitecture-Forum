import {Document, ObjectId} from 'mongoose';
import { User } from '.';
import Device from './Device';
import {RevocationReason} from './enums';
interface TokenRevocation extends Document{
    _id: ObjectId;
    user_id: ObjectId;
    device: Device;
    createdAt: Date;
    revoke_reason: RevocationReason;

}
export default TokenRevocation;