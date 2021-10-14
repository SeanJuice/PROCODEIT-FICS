import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
const rootURL = 'https://localhost:44389/api/Admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient, private auth: AuthService) {}


  GetAuditTrail(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.get<any[]>(`${rootURL}/GetAuditTrail`);
  }
}
