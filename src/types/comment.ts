import {Document} from 'mongoose';
import { User, Post } from '.';
export default interface Comment extends Document{
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    post: Post;
    user: User;
    hash: string;
}   