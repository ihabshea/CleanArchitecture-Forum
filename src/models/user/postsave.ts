import {createPassword} from './middleware';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from '../../types';
import { userModel } from '../../models';
import {PermissionType, EntityType} from '../../types/enums';
import { Schema } from 'mongoose';

import { isValidEmail, isValidName, isValidPassword } from './utils';
import { permissionModel } from '../permission';
import { changeNoviceStatus, grantPermissions } from './methods';
dotenv.config();

async function postSave  (this: User){

    // grant permissions
    await grantPermissions(this);
    await changeNoviceStatus(this); //change user status to non-novice
    
}
export default postSave;