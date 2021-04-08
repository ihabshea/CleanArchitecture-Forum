import {Document} from 'mongoose';
export default interface User extends Document{
    id: string;
    name: string;
    password: string;
    avatar: string;
    email: string;
    createdAt: Date;
    lastLogin: Date;

}