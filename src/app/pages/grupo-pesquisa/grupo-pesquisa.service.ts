import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GrupoPesquisa } from 'src/app/models/grupo-pesquisa';

@Injectable()
export class GrupoPesquisaService {

    constructor(private http: HttpClient) { }

    getGruposPesquisa(): Observable<GrupoPesquisa[]> {
        return this.http.get<GrupoPesquisa[]>(environment.api.getGruposPesquisa);
    }

    postGrupoPesquisa(payload): Observable<any> {
        return this.http.post<GrupoPesquisa>(environment.api.postGrupoPesquisa, payload);
    }
}