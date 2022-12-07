import { Music } from './music.model';

export interface User {
    id: number,
    name: string,
    surname: string,
    email: string,
    isDeleted: Boolean,
    favouriteMusics?: Music[],

}