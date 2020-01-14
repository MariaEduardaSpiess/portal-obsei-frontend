import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pesquisador } from 'src/app/models/pesquisador';
import { environment } from 'src/environments/environment';

@Injectable()
export class PesquisadoresService {

    constructor(private http: HttpClient) { }

    getPesquisadores(): Observable<Pesquisador[]> {
        return this.http.get<Pesquisador[]>(environment.api.getPesquisadores);
    }

    inserirPesquisador(payload): Observable<any> {
        return this.http.post<any>(environment.api.postPesquisador, payload);
    }
    
    atualizarPesquisador(id, payload): Observable<any> {
        return this.http.put<any>(environment.api.postPesquisador + '/' + id, payload);
    }
    
    excluirPesquisador(id): Observable<any> {
        return this.http.delete(environment.api.postPesquisador + '/' + id);
    }
}