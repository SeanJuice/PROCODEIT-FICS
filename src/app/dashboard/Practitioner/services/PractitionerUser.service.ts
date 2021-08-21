import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { share } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
const rootURL = 'https://localhost:44332/api/Admin/';

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
}
