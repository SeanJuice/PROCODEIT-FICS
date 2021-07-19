import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm: any

  constructor(private AuthServe:AuthService) {

   }

  ngOnInit(): void {
    this.CreateForm()
  }

  CreateForm(){
    // this.LoginForm =  this.formBuilder.group({
    //   Username: ['', [Validators.required, Validators.minLength(2)]],
    //   Password: ['', Validators.required],
    // })
  }


  onSubmit(){
    //this.submitted = true;
    if(!this.LoginForm.valid) {
      console.log(this.LoginForm.value)
      alert('Please fill all the required fields to create a super hero!')

    } else {

      this.AuthServe.Login(this.LoginForm.value)
    }
  }

}
