import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class GeradorPaginaService {
    constructor(private http: HttpClient) { }
    
    inserir(payload): Observable<any> {
        return this.http.post<any>(environment.api.postGeradorPagina, payload);
    }
}