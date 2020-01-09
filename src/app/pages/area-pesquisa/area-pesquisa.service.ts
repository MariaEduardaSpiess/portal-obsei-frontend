import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AreaPesquisa } from 'src/app/models/area-pesquisa';

@Injectable()
export class AreaPesquisaService {
    constructor(private http: HttpClient) { }
    
    getAreasPesquisa(): Observable<AreaPesquisa[]> {
        return this.http.get<AreaPesquisa[]>(environment.api.getAreasPesquisa);
    }

    postAreaPesquisa(payload: AreaPesquisa): Observable<AreaPesquisa> {
        return this.http.post<AreaPesquisa>(environment.api.postAreaPesquisa, payload);
    }
    
    putAreaPesquisa(payload: AreaPesquisa): Observable<AreaPesquisa> {
        return this.http.put<AreaPesquisa>(environment.api.postAreaPesquisa, payload);
    }
}