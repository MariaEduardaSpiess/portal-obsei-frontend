import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AreaPesquisaService {
    constructor(private http: HttpClient) { }
    
    getAreasPesquisa(): Observable<any> {
        return this.http.get<any>(environment.api.getAreasPesquisa);
    }
}