import dotenv from 'dotenv';
// import jwt, { JsonWebTokenError, Secret } from 'jsonwebtoken';
// import { UserJWT } from '../types';
import redis from 'redis';
import * as jwtRedis from 'jwt-redis';
const JWTR = jwtRedis.default;
const redisClient = redis.createClient();
const jwtr = new JWTR(redisClient);
dotenv.config();
const authenticateJWT = async(req: any, res: any, next: () => void): Promise<void> => {
    const authHeader: string = req.headers?.authorization;
    if (authHeader) {
        const token: string = authHeader?.split(" ")[1];
        const jwtSecret: any = process.env.JWT_SECRET;
        try{
        let user = await jwtr.verify(token, jwtSecret) || null;
            req.user = user;
            next();
        }catch(err){
            res.status(401).json({error:"Unauthorized access."});
        }
     
    } else {
        next();
    }
}
export default authenticateJWT;