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
    device_token:{
        type: String, 
        required: false
    },
    token:{
        type: Schema.Types.ObjectId,
        ref:"Token",

    }
},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });

export default model<Device>("Device", deviceSchema)
