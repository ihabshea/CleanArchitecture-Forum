import {Device, User} from '../../types';
import {model, Schema} from 'mongoose';

const deviceSchema: Schema = new Schema({
    device_name: {
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    device_type:{
        type: String,
        required: true
    },
    loggedOut:{
        type: Boolean,
        default: false
    },
    kickedOut:{
        type: Boolean,
        default: false
    },
    lastActivity:{
        type: Date
    },
    device_token:{
        type: String, 
        required: false
    },
    token_id:{
        type: Schema.Types.ObjectId,
        ref:"Token",

    }
},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });

export default model<Device>("Device", deviceSchema)
