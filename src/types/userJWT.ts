import { ObjectId } from "mongoose";

interface UserJWT {
    userId: ObjectId;
    token: string;
    name: string;
    expiresIn: string;
}
export default UserJWT;