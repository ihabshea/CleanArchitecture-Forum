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
    let findSession: LoginDetails | null = await loginModel.findOne({ token_id: findDestroyedJTI, terminated: true });
    if (findSession) {

        jwtr.destroy(jti);
        if (findDestroyedJTI) {
            findDestroyedJTI.revokedAt = new Date();
            await findDestroyedJTI.save();
        }
        throw Error("Invalid session.");
    }
    return false;
}

export default checkIfRevoked;