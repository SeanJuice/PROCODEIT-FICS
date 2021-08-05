import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service'
import { share } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';


const   rootURL = 'https://localhost:44332/api/Admin/'

@Injectable({
  providedIn: 'root'
})
export class TraineesService {


  constructor(public http : HttpClient,public router:Router,@Inject(SESSION_STORAGE) private storage: StorageService, private auth:AuthService) { }


  /**
   * !  Note: Missing API for getting Trainees
   * @returns
   */
  getTrainees():Observable<any[]>
  {
    return this.http.get<any[]>(`${rootURL}/GetPractitioners`).pipe(share());;
  }

  DisableTrainee(TraineeID){

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

    return this.http.post(`${rootURL}/DisableTraineeProfile/${TraineeID}`,httpOptions);

  }
}