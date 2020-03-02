import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private token;

    constructor(private http: HttpClient) {}

    setToken(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    login(payload) {
        return this.http.post<any>(environment.api.postLogin, payload);
    }

    logout() {
        this.token = null;
    }
}