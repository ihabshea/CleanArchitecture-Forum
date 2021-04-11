import { UserLoginInput, UserJWT, User, Token, LoginDetails, Device } from "../../types";
// import { userModel } from '../../models';
import dotenv from 'dotenv';
import { invalidateJWT, verifyJWT } from "./authorization";
import { deviceModel, loginModel, tokenModel } from "../../models";

dotenv.config();

const logout = async (req: any, res: any): Promise<void> => {
    if (req?.user) {
        try{
        let {jti} = req.user.jti;
        let findToken: Token | null = await tokenModel.findOne({jti});
        let findLogin: LoginDetails | null = await loginModel.findOne({token_id: findToken?._id});
        let findDevice: Device | null = await deviceModel.findById(findLogin?.device);
        if(findLogin && findDevice){
            findLogin.terminated = true;
            findDevice.loggedOut = true;
            await findLogin.save();
            await findDevice.save();
        }
        const invalidated = await invalidateJWT(req.user.jti);
        if (invalidated) {
            res.status(200).json({ status: "Logged out" });
        } else {
            res.status(400).json({ error: "Token doesn't exist." });
        }
    }catch(err){
        res.status(400).json({ error: "Token doesn't exist." });
    }
    } else {
        res.status(400).json({ error: "You are not logged in." })
    }
}
export default logout;