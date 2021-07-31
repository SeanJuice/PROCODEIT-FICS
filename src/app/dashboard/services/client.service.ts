import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service'
import { Client } from 'src/app/models/Client';
import { Session } from 'src/app/models/Session';
import { share } from 'rxjs/operators';
import { Package } from 'src/app/models/Package';


const   rootURL = 'https://localhost:44332/api/Client/'

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(public http : HttpClient,public router:Router,@Inject(SESSION_STORAGE) private storage: StorageService) { }

  /**
   * Used to get Client profile
   * @param id
   * @returns observable
   */
  geClientProfile(id : number)
  {
    return this.http.get(`${rootURL}/ViewClientProfile/${id}`);
  }

  /**
   * ?Used to update the client profile
   * @param formData
   * @returns
   */
  UpdateClient(formData){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    return this.http.post('https://localhost:44332/api/Client/MaintainClientProfile/', formData,httpOptions).pipe(share());
  }

  //get Client ID
  get ClientID()
  {
    let id =  this.storage.get("Client_ID")
    return Number(id);
  }



  // Get Sessions
  getSessions(id?: number):Observable<Session[]>
  {
    let ID = Number(this.storage.get("Client_ID"));
    return this.http.get<Session[]>(`${rootURL}/GetSessions/${ID}`).pipe(share());
  }


  //Get session feedback
  getReviewSessionFeedback(SessionID:Number){
    let request:any;

    if(SessionID == null)
    {
      request = "SessionID is Null"
    }
    else{
      request =this.http.get(`${rootURL}/ReviewSessionFeedback/${SessionID}`);
    }
    return of(request)
  }


  // Get Packages

  getPackages() {
    return this.http.get(`${rootURL}/ViewPackages/`).pipe(share());
  }

  /**
   * ?Purchase Package
   *
   */

  PurchasePackage(PurchaseObject: Package){
    this.http.get(`${rootURL}/PurchasePackages/${PurchaseObject.Package_ID}/${PurchaseObject.Client_ID}/${PurchaseObject.Quantity}`);
  }

  /**
   * get Trial Questionnaires
   */

   getTrialQuestionnaire() {
    return this.http.get(`${rootURL}/TrialQuestionnaire/`).pipe(share());
  }



}
