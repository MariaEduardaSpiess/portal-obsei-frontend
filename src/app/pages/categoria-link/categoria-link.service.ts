import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CategoriaLinks } from 'src/app/models/categoria-links';

@Injectable()
export class CategoriaLinkService {
    constructor(private http: HttpClient) { }
    
    getCategorias(): Observable<CategoriaLinks[]> {
        return this.http.get<CategoriaLinks[]>(environment.api.getCategoriasLinks);
    }
    
    postCategoria(payload: CategoriaLinks): Observable<CategoriaLinks> {
        return this.http.post<CategoriaLinks>(environment.api.postCategoriaLinks, payload);
    }
}