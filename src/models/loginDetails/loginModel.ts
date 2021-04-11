import {model, Schema} from 'mongoose';
import {LoginDetails} from '../../types';
const loginSchema: Schema = new Schema({
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
        ref: "Token",
    },
    terminated:{
        type: Boolean,
        default:false
    }
},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });
//pre-hooks

export default model<LoginDetails>("Login", loginSchema)
