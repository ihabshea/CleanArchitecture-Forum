import {ObjectId} from 'mongoose';
import { deviceModel, loginModel, tokenModel } from '../../../models';
const createSession = async(user_id: ObjectId, token: string, device_name: string, device_type: string) => {
    //first create the token (p.s: the pre-hook of the token model encrypts the token) we only need it to destroy it for security purposes
    let tokenObject = await new tokenModel({token, user_id}).save();
    let deviceObject = await new deviceModel({device_name, device_type, user_id}).save();
    let loginObject = await new loginModel({device: deviceObject, token: tokenObject, user_id }).save();
    if(loginObject) return true;
    return false;
}
export default createSession;