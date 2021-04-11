import {Document} from 'mongoose';
import { User, Post } from '.';
export default interface Rating extends Document{
    id: string;
    rate: number;
    createdAt: Date;
    updatedAt: Date;
    post: Post;
    user: User;
}   