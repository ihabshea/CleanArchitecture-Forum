import {Document} from 'mongoose';
export default interface UserInput{
    name: string;
    password: string;
    email: string;
}