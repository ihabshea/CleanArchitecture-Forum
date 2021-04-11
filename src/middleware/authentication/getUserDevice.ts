import { ObjectId } from "mongoose";
import { deviceModel, loginModel, tokenModel } from "../../models";
import { Device, LoginDetails, Token } from "../../types";

const getUserDevice = async(jti: string): Promise<ObjectId> => {
    let findToken: Token | null = await tokenModel.findOne({jti});
    if(!findToken) throw Error("No token found");
    let findSession: LoginDetails | null = await loginModel.findOne({token: findToken});
    if(!findSession) throw Error("No session found.");
    let findDevice: Device | null = await deviceModel.findById(findSession.device);
    if(!findDevice) throw Error("Device not found.");
    return findDevice?._id;
}

export default getUserDevice;