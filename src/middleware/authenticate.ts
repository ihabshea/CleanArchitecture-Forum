import dotenv from 'dotenv';
import redis from 'redis';
import * as jwtRedis from 'jwt-redis';
import { checkIfRevoked, updateLastActivity } from './authentication';
import { JWTType } from '../types';
import { verifyJWT } from '../controllers/users/authorization';
const JWTR = jwtRedis.default;
const redisClient = redis.createClient();
const jwtr = new JWTR(redisClient);
dotenv.config();
const authenticateJWT = async (req: any, res: any, next: () => void): Promise<void> => {
    const authHeader: string = req.headers?.authorization;
    const token: string = authHeader?.split(" ")[1];
    try {
        let revoked = await checkIfRevoked(token);
        if(!revoked){
            updateLastActivity(token);
            let user:JWTType = await verifyJWT(token);
            req.user = user;
        }
        next();
    } catch (err) {
        res.status(401).json({ error: "Unauthorized access." });
    }

}
export default authenticateJWT;