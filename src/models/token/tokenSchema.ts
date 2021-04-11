import {Token} from '../../types';
import {model, Schema} from 'mongoose';
const tokenSchema: Schema = new Schema({
    token:{
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
    revokeReference:{
        type: Schema.Types.ObjectId,
        ref:"Revoke",
    },

},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });

export default model<Token>("Token", tokenSchema)
