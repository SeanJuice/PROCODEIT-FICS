import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { share } from 'rxjs/operators';
import swal from 'sweetalert2';


const KEY = 'FICSINF';

const rootURL = 'https://localhost:44332/api/Access';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  decrypted: string;
  // Behavior subjects
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(
    public http: HttpClient,
    public router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService,
  ) {}

  //returns the state of login
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  /**
   * Ger Role
   */
  get Role() {
    return Number(sessionStorage.getItem('rle'));
  }

  get loginId() {
    return Number(sessionStorage.getItem('liid'));
  }
  /*
  Login
  */
  Login(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    this.http
      .post(rootURL + '/Login', user, httpOptions)
      .pipe(share())
      .subscribe((res: any) => {
        if (!res.Error) {
          this.loggedIn.next(true);
          sessionStorage.setItem('IULI', this.encrypt('true')); //is user logged in
          sessionStorage.setItem('rle', this.encrypt(res.UserRole_ID));
          sessionStorage.setItem('User_ID', this.encrypt(res.User_ID));
          sessionStorage.setItem('liid', this.encrypt(res.LoginID));

          this.router.navigate(['./dashboard']);

        } else {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!, Please check if the details provided are correct',
          });
        }
      });
    return this.http.post(rootURL + '/Login', user, httpOptions);
  }

  Register(user: any, userID: Number) {
    user.Username = user.Email_Address;
    delete user.Confirm_Password;
    user.Profile_Picture =
      'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    this.http
      .post(rootURL + `/Register/${userID}`, user, httpOptions)
      .subscribe((res: any) => {
        if (!res.Error) {
          this.router.navigate(['./login']);
        } else {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!, Please check if the email or password provided is correct',
          });
        }
      });
    return 'True';
  }

  ForgotPassword(Email) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(rootURL + `/ForgotPassword/`, Email, httpOptions);
  }

  ResetPassword(PasswordUSer) {
    console.log(PasswordUSer);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(
      rootURL +
        `/ResetPassword/${Number(sessionStorage.getItem('User_ID'))}/${
          PasswordUSer.old_password
        }/${PasswordUSer.password}`,
      httpOptions
    );
  }

  //Used for logging out
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['Welcome']);
    sessionStorage.removeItem('rle');
    sessionStorage.removeItem('IULI');
    sessionStorage.removeItem('User_ID');
    sessionStorage.removeItem('liid');
  }

  SetLoadingSpanner(observable: Observable<any>): Boolean {
    let loading = false;
    observable.subscribe(() => {
      loading = false;
    });
    return loading;
  }

  encrypt(value) {
    return value;
  }
  decrypt(encrypted) {
    return encrypted;
  }

  getCountries(): Observable<any[]> {
    return this.http
      .get<any>(`https://api.printful.com/countries`)
      .pipe(share());
  }
}
