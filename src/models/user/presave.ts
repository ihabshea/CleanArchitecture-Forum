import {createPassword} from './middleware';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from '../../types';
import { userSchema } from '../../models';

import { Schema } from 'mongoose';
import { isValidEmail, isValidName, isValidPassword } from './utils';
dotenv.config();

async function preSave  (this: User, next: ()=>void){
    const saltRounds: number = parseInt(process.env.BCRYPT_SALT_ROUNDS||"12");
    const user: User = this;
    if(!isValidName(this.name)){
        throw Error("Invalid name");
    }
    if(!isValidPassword(this.password)){
        throw Error("Invalid password");
    }
    if(!isValidEmail(this.email)){
         throw Error("Invalid email address");
    }
 
    const emailExists = await userSchema.findOne({email: user.email}).exec();
    if(emailExists){
        throw Error("Email already exists");
    }
    
    user.password = await createPassword(user.password, bcrypt, saltRounds);

    next();
}
export default preSave;