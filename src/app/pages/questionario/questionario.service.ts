import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Questionario } from 'src/app/models/questionario';

@Injectable()
export class QuestionarioService {
    constructor(private http: HttpClient) { }
    
    getQuestionarios(): Observable<Questionario[]> {
        return this.http.get<Questionario[]>(environment.api.getQuestionarios);
    }
    
    postQuestionario(payload: Questionario): Observable<Questionario> {
        return this.http.post<Questionario>(environment.api.postQuestionario, payload);
    }
}