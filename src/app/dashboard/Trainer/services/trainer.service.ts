import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
const rootURL = 'https://localhost:44332/api/Trainer/';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  constructor(
    public http: HttpClient,
    public router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private auth: AuthService
  ) {}


  GetFeedbackTasks(id:any):Observable<any[]> {
    return this.http
    .get<any[]>(`${rootURL}/GetFeedbackTasks/${id}`)
    .pipe(share());
  }
  SendFeedback( taskid:number,  feedback:string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(`${rootURL}/SendFeedback/${taskid}/${feedback}`, httpOptions);
  }
}
