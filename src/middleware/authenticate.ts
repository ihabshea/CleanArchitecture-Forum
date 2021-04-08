import dotenv from 'dotenv';
import jwt, { JsonWebTokenError, Secret } from 'jsonwebtoken';
// import { UserJWT } from '../types';
dotenv.config();
const authenticateJWT = (req: any, res: any, next: () => void): void => {
    console.log(req)
    const authHeader: string = req.headers?.authorization;
    if (authHeader) {
        const token: string = authHeader?.split(" ")[1];
        const jwtSecret: any = process.env.JWT_SECRET;
        jwt.verify(token, jwtSecret, (err: any, user: any) => {
            if (err) {
                // console.log(err);
                // throw Error("Something went wrong.");
            }
            req.user = user;
            next();

        });
    } else {
        next();
    }
}
export default authenticateJWT;