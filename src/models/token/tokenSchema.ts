import {Token} from '../../types';
import {model, Schema} from 'mongoose';
import preSave from './preSave';
const tokenSchema: Schema = new Schema({
    token:{
        type: String,
        required: true
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    revokeReference:{
        type: Schema.Types.ObjectId,
        ref:"Revoke",
    },

},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });

tokenSchema.pre("save", preSave);
export default model<Token>("Token", tokenSchema)
