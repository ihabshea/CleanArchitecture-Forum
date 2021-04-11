import {Document} from 'mongoose';
import { User, Post } from '.';
import { RateType } from './enums';
export default interface Rating extends Document{
    id: string;
    rate: RateType;
    createdAt: Date;
    updatedAt: Date;
    post: Post;
    user: User;
}   