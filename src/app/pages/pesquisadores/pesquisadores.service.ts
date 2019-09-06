import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pesquisador } from 'src/app/models/pesquisador';

@Injectable()
export class PesquisadoresService {

    constructor(private http: HttpClient) { }

    getPesquisadores(): Observable<Pesquisador[]> {
        return this.http.get<Pesquisador[]>('http://localhost:8080/pesquisadores');
    }

    inserirPesquisador(payload): Observable<any> {
        return this.http.post<any>('http://localhost:8080/pesquisador', payload);
    }
}