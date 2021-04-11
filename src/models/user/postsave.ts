import {createPassword} from './middleware';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from '../../types';
import { userModel } from '../../models';
import {PermissionType, EntityType} from '../../types/enums';
import { Schema } from 'mongoose';
import { $enum } from "ts-enum-util";

import { isValidEmail, isValidName, isValidPassword } from './utils';
import { permissionModel } from '../permission';
dotenv.config();

async function postSave  (this: User){
    console.log(this._id);
    $enum(EntityType).map(v => {
        if(v !== "permission"){
            permissionModel.create({
                
            })
        }
    });
    
}
export default postSave;