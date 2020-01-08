import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LinkUtil } from 'src/app/models/link-util';

@Injectable()
export class LinkUtilService {
    constructor(private http: HttpClient) { }
    
    getLinksUteis(): Observable<LinkUtil[]> {
        return this.http.get<LinkUtil[]>(environment.api.getLinksUteis);
    }

    postLinkUtil(payload): Observable<LinkUtil> {
        return this.http.post<LinkUtil>(environment.api.postLinkUtil, payload);
    }
}