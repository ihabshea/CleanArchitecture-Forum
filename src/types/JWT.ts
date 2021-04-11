import { ObjectId } from "mongoose";

interface JWTType {
    id: ObjectId;
    name: string;

    jti: string;
    iat: number;
    exp: number;

}
export default JWTType;