import dotenv from 'dotenv';
import { User } from '../../../types';
import redis from 'redis';
import * as jwtRedis from 'jwt-redis';
const JWTR = jwtRedis.default;
const redisClient = redis.createClient();
const jwtr = new JWTR(redisClient);
dotenv.config();
const signJWT = async(userObject: Partial<User>): Promise<string> => {
    const jwtSecret:any = process.env.JWT_SECRET;
    let token = await jwtr.sign(userObject, jwtSecret, {expiresIn:"1d"});
    return token;
}
const invalidateJWT = async(token: string): Promise<boolean> => {
    try{
    if(token.length>0){
    return await jwtr.destroy(token);
    }else{
        throw Error("");
    }
    }catch(err){
        throw Error(err);
    }
}
export {signJWT, invalidateJWT};