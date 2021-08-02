import { Router } from '@angular/router';
import { User } from './../models/user.model';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service'
import { share } from 'rxjs/operators';


const   rootURL = 'https://localhost:44332/api/Access'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Behavior subjects
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(public http : HttpClient,public router:Router,@Inject(SESSION_STORAGE) private storage: StorageService) { }

  //returns the state of login
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  /**
   * Ger Role
   */
  get Role() {
    return  this.storage.get("Role")
  }

  /*
  Login
  */
  Login(user:User){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
      this.http.post(rootURL+'/Login',user,httpOptions ).pipe(share()).subscribe((res:any)=>{
      if(!res.Error)
      {
        this.loggedIn.next(true)
        this.storage.set("isloggedin", "true");
        this.storage.set("Role", res.UserRole_ID);
        this.storage.set("User_ID", res.User_ID);
        this.storage.set("Client_ID", res.LoginID);

        console.log(res)
        this.router.navigate(['./dashboard'])
      }
      else{
         alert("Wrong Password or Username please try again. :)")
        }
    })
    return this.http.post(rootURL+'/Login',user,httpOptions )

  }



  Register(user:any,userID:Number){
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
     this.http.post(rootURL+`/Register/${userID}`,user,httpOptions ).subscribe((res:any)=>{
      if(!res.Error)
      {
        console.log(res)
        this.router.navigate(['./login'])
      }

      else{
         alert("Wrong Password or Username please try again. :)")
        }
    })
    return "True"

  }



  //Used for logging out
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['Welcome']);
    this.storage.remove("Role")
    this.storage.remove("isloggedin");
    this.storage.remove("User_ID");
    this.storage.remove("Client_ID");


  }

  SetLoadingSpanner(observable: Observable<any>): Boolean{
    let loading =  false;
    observable.subscribe(()=>{loading=false})
    return loading
  }


}
