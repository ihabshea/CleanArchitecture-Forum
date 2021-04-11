import {Document} from 'mongoose';
import { User,Comment, Rating } from '.'; 
import Device from './Device';
export default interface Post extends Document{
    id: string;
    title: string;
    content: string;
    hash: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    device: Device;
    getAverageRating: () => number;
}   