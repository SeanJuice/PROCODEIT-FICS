import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service'
import { Client } from 'src/app/models/Client';
import { Session } from 'src/app/models/Session';
import { share } from 'rxjs/operators';
import { Package } from 'src/app/models/Package';
import { AuthService } from 'src/app/auth/auth.service';


const   rootURL = 'https://localhost:44332/api/Admin/'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {


  constructor(public http : HttpClient,public router:Router,@Inject(SESSION_STORAGE) private storage: StorageService, private auth:AuthService) { }

  getClients():Observable<Client[]>
  {
    return this.http.get<Client[]>(`${rootURL}/ViewClients`).pipe(share());;
  }

  getClientSessions(id: Number):Observable<any[]>
  {
    return this.http.get<any[]>(`${rootURL}/ViewClientSessions/${id}`).pipe(share());;
  }

  DisableClient(ID:Number){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

    return this.http.post(`${rootURL}/DisableClientProfile/${ID}`,httpOptions);
  }

}