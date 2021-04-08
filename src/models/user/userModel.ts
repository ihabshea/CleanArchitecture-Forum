import {User} from '../../types';
import {model, Schema} from 'mongoose';
import preSave from './presave';
import { comparePasswords } from './methods';
const userSchema: Schema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        default:""
    },
    lastLogin:{
        type: Date
    }
    // {timesta}
});
// console.log(typeof())
userSchema.pre('save', preSave);
userSchema.methods.comparePasswords = comparePasswords;

export default model<User>("User", userSchema)
