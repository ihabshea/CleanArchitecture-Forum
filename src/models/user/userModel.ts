import {User} from '../../types';
import {model, Schema} from 'mongoose';
import preSave from './presave';
import { comparePasswords } from './methods';
import postSave from './postsave';
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
        type: Schema.Types.ObjectId,
        ref:"LoginDetails"
    },
    twoFactorEnabled:{
        type: Boolean,
        default:false
    },
    new:{
        type: Boolean,
        default: true
    },
    logins: [{
        type: Schema.Types.ObjectId,
        ref:"LoginDetails"
    }]
},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });
// console.log(typeof())
userSchema.pre('save', preSave);
userSchema.post('save', postSave);

userSchema.methods.comparePasswords = comparePasswords;

export default model<User>("User", userSchema)
