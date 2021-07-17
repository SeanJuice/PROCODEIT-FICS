import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const   rootURL = 'https://localhost:44377'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(public http : HttpClient,public router:Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  Login(user:User){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(rootURL+'/Login',user,httpOptions ).subscribe((res:any)=>{
      if(!res.Error)
        this.loggedIn.next(true);


    })
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

}
