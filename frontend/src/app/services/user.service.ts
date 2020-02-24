import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, Note, Tag } from '../models';

import {baseUrl} from './url';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${baseUrl}/users/`);
    }

    register(user: User) {
        return this.http.post(`${baseUrl}/users/register/`, user);
    }

    getTagById(tag: number) {
        return this.http.get<Tag>(`${baseUrl}/tags/${tag}`);
    }

    getNotesByTag(tag: number) {
    	return this.http.get<Note[]>(`${baseUrl}/notes/${tag}`);
    }

    getUserById(id: string) {
        return this.http.get<User>(`${baseUrl}/users/${id}`);
    }

    postNote(note: Note) {
    	return this.http.post(`${baseUrl}/notes/post/`, note)
    }

    delete(id: number) {
        return this.http.delete(`${baseUrl}/users/${id}`);
    }
}