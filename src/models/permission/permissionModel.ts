import {model, Schema} from 'mongoose';
import {Permission} from '../../types';
import preSave from './preSave';
const permissionSchema: Schema = new Schema({
    entity:{
        type: String,
        required: true
    },
    user_id:{
        type: Schema.Types.ObjectId, 
        ref:"User",
    },
    assigned_by:{
        type: Schema.Types.ObjectId, 
        ref:"User",
    },
    permissionLevel:{
        type: String,
        required: true,
    },
    deleted:{
        type: Boolean
    },
    deleted_at:{
        type: Date
    },
},  { timestamps: { createdAt: "createdAt", updatedAt:"updatedAt" } });
//pre-hooks

permissionSchema.pre("save", preSave);
export default model<Permission>("Permission", permissionSchema)
