import {Document} from 'mongoose';
import { User,Comment, Rating } from '.'; 
export default interface Post extends Document{
    id: string;
    title: string;
    content: string;
    comments: Comment[];
    hash: string;
    user: User;
    createdAt: Date;
    updatedAt: Date;
    ratings: Rating[];
    getAverageRating: () => number;
}   