import {Document} from 'mongoose';
import { User } from '.';
type UserInput = Pick<User, "email" | "password" | "name">;
export default UserInput;