import { Token } from "../../types";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import { encryptToken } from "./methods";
import { verifyJWT } from "../../controllers/users/authorization";

dotenv.config();
async function preSave(this: Token, next: ()=>void){
    const saltRounds: number = parseInt(process.env.BCRYPT_SALT_ROUNDS||"12");
    let verifyToken = await verifyJWT(this.token);
    this.jti = verifyToken.jti;
    this.token = await encryptToken(this.token, bcrypt, saltRounds);
    next();
}
export default preSave;