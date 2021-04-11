import {Post} from '../../types';
import {model, Schema} from 'mongoose';
// import preSave from './presave';
// import { comparePasswords } from './methods';
const postSchema: Schema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    ratings:[{
        type: Schema.Types.ObjectId,
        ref:"Rating",
    }],
    comments:[{
        type: Schema.Types.ObjectId,
        ref:"Comment",
    }],

},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });
// console.log(typeof())
// userSchema.pre('save', preSave);
postSchema.methods.getAverageRating = ()=>{};

export default model<Post>("Post", postSchema)