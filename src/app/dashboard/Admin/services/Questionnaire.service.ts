
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, Subscription} from 'rxjs';

import { Client } from 'src/app/models/Client';
import { share } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { ClientService } from '../../Client/services/client.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';


const   rootURL = 'https://localhost:44332/api/Admin/'

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(public http: HttpClient, private auth: AuthService) {}

  GetAllQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${rootURL}/GetAllQuestions`).pipe(share());
  }


  /***
   *? assigns a single question to a client (do a for loop to hit this with different question bank ids)
   */
   AssignTraineeQuestionnaires(userID: number,Questions:Array<any>,userType:boolean) {
    let requests:Observable<any>
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    if(userType)
    {
      requests =  this.http.post(`${rootURL}/AssignClientQuestionnaires/${userID}/`,Questions, httpOptions).pipe(share())
    }
    else{
      requests =  this.http.post(`${rootURL}/AssignTraineeQuestionnaires/${userID}/`,Questions, httpOptions).pipe(share())
    }

    return requests
  }

    /***
   *? assign all questions in a specific category  (so this is if they select the whole question bank)
   */
   AssignClientQuestionnaireType(ClientID:number,userType:boolean) {
    let requests:Observable<any>
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    if(userType)
    {
      requests =  this.http.get(`${rootURL}AssignClientQuestionnaireType/${ClientID}`, httpOptions).pipe(share())
    }
    else{
      requests =  this.http.get(`${rootURL}AssignTraineeQuestionnaireType/${ClientID}`, httpOptions).pipe(share())
    }

    return requests
  }



  ViewQuestionnaireBanks(): Observable<any[]> {
    return this.http
      .get<any[]>(`${rootURL}/ViewQuestionnaireBanks/`)
      .pipe(share());
  }

}
