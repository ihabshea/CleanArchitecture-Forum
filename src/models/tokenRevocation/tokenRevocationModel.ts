import {TokenRevocation} from '../../types';
import {model, Schema} from 'mongoose';
const tokenRevocationSchema: Schema = new Schema({
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
    revoke_reason:{
        type: String,
        required: true
    },

},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });

export default model<TokenRevocation>("TokenRevocation", tokenRevocationSchema)
