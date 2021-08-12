
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable} from 'rxjs';

import { Client } from 'src/app/models/Client';
import { share } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ClientService } from '../../services/client.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';


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

  get rootURL(){
    return this.rootURL
  }

  /***
   *? assigns a single question to a client (do a for loop to hit this with different question bank ids)
   */
  AssignClientQuestionnaireBank(questionnaireid: number,ClientID:number,Questions:Array<any>) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(`${rootURL}/AssignClientQuestionnaireBank/${questionnaireid}/${ClientID}`,Questions, httpOptions).pipe(share())
  }

    /***
   *? assign all questions in a specific category  (so this is if they select the whole question bank)
   */
   AssignClientQuestionnaireType(questionnaireid: number,ClientID:number) {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.get(`${rootURL}AssignClientQuestionnaireType/${questionnaireid}/${ClientID}`, httpOptions).pipe(share())
  }

}
