import { User } from './../../../models/user.model';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: any

  constructor(private AuthServe:AuthService,public router:Router) {

   }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){

  }


  onSubmit(user:User){
    //this.submitted = true;
    if(user.Username=="" || user.Password=="") {

      alert('Please fill all the required fields to create a super hero!')

    } else {

      this.AuthServe.Login(user)

    }
  }

}
