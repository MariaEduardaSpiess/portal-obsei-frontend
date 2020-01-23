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

    inserirAreaPesquisa(payload: AreaPesquisa): Observable<AreaPesquisa> {
        return this.http.post<AreaPesquisa>(environment.api.postAreaPesquisa, payload);
    }
    
    atualizarAreaPesquisa(id: number, payload: AreaPesquisa): Observable<any> {
        return this.http.put<any>(environment.api.postAreaPesquisa + `/${id}`, payload);
    }

    excluirAreaPesquisa(id: number): Observable<AreaPesquisa> {
        return this.http.delete<any>(environment.api.postAreaPesquisa + `/${id}`);
    }
}