import { User } from './user.model';

export interface Music {
    id?: number,
    _id?: any,
    __v?: number,
    title: string,
    author: string,
    description: string,
    addedBy?: User,
    likes: number,
    dislikes: number,
    imageUrl: string,
}