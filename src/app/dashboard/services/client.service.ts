import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, observable, Observable, of} from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service'
import { Client } from 'src/app/models/Client';
import { Session } from 'src/app/models/Session';
import { share } from 'rxjs/operators';
import { Package } from 'src/app/models/Package';
import { AuthService } from 'src/app/auth/auth.service';


const   rootURL = 'https://localhost:44332/api/Client/'

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(public http : HttpClient,public router:Router,@Inject(SESSION_STORAGE) private storage: StorageService, private auth:AuthService) { }

  /**
   * Used to get Client profile
   * @param id
   * @returns observable
   */
  geClientProfile(id : number)
  {
    return this.http.get(`${rootURL}/ViewClientProfile/${id}`).pipe(share());;
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
    let id =  this.auth.loginId //ClientID
    return Number(id);
  }



  // Get Sessions
  getSessions(id?: number):Observable<Session[]>
  {

    return this.http.get<Session[]>(`${rootURL}/ViewSchedule/${this.ClientID}`).pipe(share());
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

  PurchasePackage(PurchaseObject){

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
    this.storage.set("Package",PurchaseObject.Package_ID )
    return this.http.post(`${rootURL}/PurchasePackages/${PurchaseObject.Package_ID}/${PurchaseObject.Client_ID}/${PurchaseObject.Quantity}`,httpOptions);

  }

  /**
   * get Trial Questionnaires
   */

   getTrialQuestionnaire() {
    return this.http.get(`${rootURL}/TrialQuestionnaire/`).pipe(share());
  }

  /**
   * get Tasks
   */

   getTasks() {
    return this.http.get(`${rootURL}/GetTasks/${this.ClientID}`).pipe(share());
  }


  /**
   * get Tasks
   */

   ProgressReport() {
    return this.http.get(`${rootURL}/ViewProgressReport/${this.ClientID}`).pipe(share());
  }
  /**
   * get Tasks
   */

   ClientQuestionnaire() {
    return this.http.get(`${rootURL}/ViewClientQuestionnares/${this.ClientID}`).pipe(share());
  }

  BookSlot(BookingIDs,availability_id){
    BookingIDs.Package_ID =  Number(this.storage.get("Package"))
    BookingIDs.Client_ID = this.ClientID;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
     return this.http.post(`${rootURL}/BookSession/${availability_id}`,BookingIDs,httpOptions).pipe(share());
  }

  getDateAvailability(Date:any):Observable<any[]>{
    return this.http.get<any[]>(`${rootURL}/GetDateAvailablity/${Date}`).pipe(share());
  }
}
