import {model, Schema} from 'mongoose';
import {Comment} from '../../types';
const commentSchema: Schema = new Schema({
    user:{
        type: Schema.Types.ObjectId, 
        ref:"User",
    },
    post:{
        type: Schema.Types.ObjectId, 
        ref:"Post",
    },
    device:{
        type: Schema.Types.ObjectId, 
        ref:"Device",
    },
    title:{
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    }, 


},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });
//pre-hooks

export default model<Comment>("Comment", commentSchema)
