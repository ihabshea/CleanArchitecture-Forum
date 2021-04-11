import {model, Schema} from 'mongoose';
import {LoginDetails} from '../../types';
const loginSchema: Schema = new Schema({
    entity:{
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId, 
        ref:"User",
    },
    device:{
        type: Schema.Types.ObjectId, 
        ref:"Device",
    },
    token:{
        type: Schema.Types.ObjectId, 
        ref:"Token",
    },


},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });
//pre-hooks

export default model<LoginDetails>("Login", loginSchema)
