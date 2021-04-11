import {Document, ObjectId} from 'mongoose';
import { LoginDetails } from '.';
export default interface User extends Document{
    _id: ObjectId;
    name: string;
    password: string;
    avatar: string;
    email: string;
    createdAt: Date;
    lastLogin: LoginDetails;
    new: Boolean;
    twoFactorEnabled: boolean;
    logins: LoginDetails[];
    comparePasswords: (encrypted_password: string, bcrypt: any, password: string) => boolean;
}