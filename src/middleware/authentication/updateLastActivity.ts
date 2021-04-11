import { verifyJWT } from "../../controllers/users/authorization";
import { deviceModel, tokenModel } from "../../models";
import { Device, JWTType, Token } from "../../types";

const updateLastActivity = async(token: string): Promise<void> =>{
    let {jti}: JWTType = await verifyJWT(token);
    let thisToken: Token | null = await tokenModel.findOne({jti});
    if(thisToken){
    let thisDevice: Device | null = await deviceModel.findOneAndUpdate({token_id: thisToken?._id}, {lastActivity: new Date()});
    if(!thisDevice){
        throw Error("Unexpected error: device doesn't exist.");
    }
    }else{
        throw Error("Unexpected error: token doesn't exist.")
    }

}

export default updateLastActivity;