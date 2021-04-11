import {Token} from '../../types';
import {model, Schema} from 'mongoose';
import preSave from './preSave';
import {compareTokens} from './methods';
const tokenSchema: Schema = new Schema({
    token:{
        type: String,
        required: true
    },
    jti:{
        type: String,
    },
    device_id:{
        type: Schema.Types.ObjectId,
        ref:"Device"
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    revoked_at:{
        type: Date
    },
    revokeReference:{
        type: Schema.Types.ObjectId,
        ref:"Revoke",
    },

},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });

tokenSchema.pre("save", preSave);
tokenSchema.methods.compareTokens = compareTokens;
export default model<Token>("Token", tokenSchema)
