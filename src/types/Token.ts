import {Document, ObjectId} from 'mongoose';
import { TokenRevocation } from '.';
interface Token extends Document{
    _id: ObjectId;
    user_id: ObjectId;
    jti: string;
    token: string;
    createdAt: Date;
    revokedAt: Date;
    revokeReference: TokenRevocation
}
export default Token;