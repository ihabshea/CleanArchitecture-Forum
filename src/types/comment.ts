import {Document} from 'mongoose';
import { User, Post } from '.';
import Device from './Device';
export default interface Comment extends Document{
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    views: Number;
    post: Post;
    user: User;
    device: Device;
    hash: string;
}   