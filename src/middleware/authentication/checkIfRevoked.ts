import * as jwtRedis from 'jwt-redis';
import redis from 'redis';
import { JWTType, LoginDetails, Token } from '../../types';
import { verifyJWT } from '../../controllers/users/authorization';
import { loginModel, tokenModel } from '../../models';
const JWTR = jwtRedis.default;
const redisClient = redis.createClient();
const jwtr = new JWTR(redisClient);

const checkIfRevoked = async (token: string): Promise<boolean> => {
    let { jti }: JWTType = await verifyJWT(token);
    let findDestroyedJTI: Token | null = await tokenModel.findOne({ jti });
    console.log(findDestroyedJTI);
    let findSession: LoginDetails | null = await loginModel.findOne({ token: findDestroyedJTI?._id, terminated: true });
    console.log(findSession);
    if (findSession) {

        jwtr.destroy(jti);
        if (findDestroyedJTI) {
            findDestroyedJTI.revokedAt = new Date();
            await findDestroyedJTI.save();
            return true;
            
        }
    }
    return false;
}

export default checkIfRevoked;