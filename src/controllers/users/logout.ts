import { UserLoginInput, UserJWT, User } from "../../types";
import { userSchema } from '../../models';
import dotenv from 'dotenv';
import { invalidateJWT } from "./authorization";

dotenv.config();

const logout = async (req: any, res: any): Promise<void> => {
    if (req?.user) {
        try{
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