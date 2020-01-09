import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Artigo } from 'src/app/models/artigo';

@Injectable()
export class ArtigoService {
    constructor(private http: HttpClient) { }
    
    getArtigos(): Observable<Artigo[]> {
        return this.http.get<Artigo[]>(environment.api.getArtigo);
    }
    
    postArtigo(payload: Artigo): Observable<Artigo> {
        return this.http.post<Artigo>(environment.api.postArtigo, payload);
    }
}