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
  constructor(
    public http: HttpClient,
    public router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private auth: AuthService
  ) {}

  getPractitionerProfile(id: number): Observable<any[]> {
    return this.http
      .get<any[]>(`${rootURL}/ViewPractitionerProfile`)
      .pipe(share());
  }
  AssignTask(client_ID: Number, Task: Task) {
    let Prac_Id= Number(this.auth.loginId)
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(`${rootURL}/SendTasks/${Prac_Id}/${client_ID}`,Task, httpOptions);
  }

}
