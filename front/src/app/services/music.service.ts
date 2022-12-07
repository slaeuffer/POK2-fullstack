import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Music } from "../models/music.model";

@Injectable({
    providedIn: 'root'
})
export class MusicService {
    configUrl = environment.apiUrl;

    constructor(
        private http: HttpClient,
    ) { }

    getMusics() {
        const route = `http://localhost:3000/api/musics`;
        return this.http.get<Music[]>(route);
    }
}