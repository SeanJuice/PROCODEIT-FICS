
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable} from 'rxjs';

import { Client } from 'src/app/models/Client';
import { share } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';


const   rootURL = 'https://localhost:44332/api/Admin/'

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(public http: HttpClient, private auth: AuthService) {}

  GetQuestionnaireType(): Observable<any[]> {
    return this.http.get<any[]>(`${rootURL}/GetQuestionnaireType`).pipe(share());
  }

  GetQuestionsPerType(questionnaireid: Number): Observable<any[]> {
    return this.http
      .get<any[]>(`${rootURL}/GetQuestionsPerType/${questionnaireid}`)
      .pipe(share());
  }

  DisableClient(ID: Number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(`${rootURL}/DisableClientProfile/${ID}`, httpOptions);
  }
}
