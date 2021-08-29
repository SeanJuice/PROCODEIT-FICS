import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { share } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Task } from 'src/app/models/Task';
const rootURL = 'https://localhost:44332/api/Practitioner/';

@Injectable({
  providedIn: 'root',
})
export class PractitionerUserService {

  PractitionerID:any
  constructor(
    public http: HttpClient,
    public router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private auth: AuthService
  ) {}

  getPractitionerProfile(id: number): Observable<any[]> {
    return this.http
      .get<any[]>(`${rootURL}ViewPractitionerProfile/${id}`)
      .pipe(share());
  }


  getTasks(id:any):Observable<Task[]> {
    return this.http
    .get<any[]>(`${rootURL}/TasksForEachClient/${id}`)
    .pipe(share());
  }

  AssignTask(client_ID: Number, Task: Task) {
    let Prac_Id= Number(this.auth.loginId)
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(`${rootURL}/SendTasks/${Prac_Id}/${client_ID}`,Task, httpOptions);
  }

  SendFeedback( taskid:number,  feedback:string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(`${rootURL}/SendFeedback/${taskid}/${feedback}`, httpOptions);
  }

  GetFeedbackTasks(id:any):Observable<any[]> {
    return this.http
    .get<any[]>(`${rootURL}/GetFeedbackTasks/${id}`)
    .pipe(share());
  }

  AvailabilityDates():Observable<any[]> {
    return this.http
    .get<any[]>(`https://localhost:44332/api/Client/GetAvailableDates/`)
    .pipe(share());
  }

  getTimeSlots():Observable<any[]> {
    return this.http
    .get<any[]>(`${rootURL}/getTimeSlots`)
    .pipe(share());
  }

  SetPractitionerAvailability(dates:any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(`${rootURL}/SetPractitionerAvailability/`,dates, httpOptions);
  }



  MaintainPractitioner(user:any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(`${rootURL}/MaintainPractitioner/${this.auth.loginId}`,user, httpOptions);
  }
}
