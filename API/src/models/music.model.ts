import { User } from './user.model';

export interface Music {
    id: number,
    title: string,
    author: string,
    addedBy?: User,
    likes: number,
    dislikes: number,
    imageUrl: string,
}