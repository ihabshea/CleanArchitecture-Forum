import {ObjectId} from 'mongoose';
import { deviceModel, loginModel, tokenModel } from '../../../models';
import { preFlightChecksForDevices } from '../utils';
const createSession = async(user_id: ObjectId, token: string, device_name: string, device_type: string) => {
    let tokenObject = await new tokenModel({token, user_id}).save();
    let deviceObject = await new deviceModel({device_name, device_type, token_id: tokenObject._id, user_id}).save();
    let loginObject = await new loginModel({device: deviceObject, token: tokenObject, user_id }).save();
    if(loginObject) return true;
    return false;
}
export default createSession;