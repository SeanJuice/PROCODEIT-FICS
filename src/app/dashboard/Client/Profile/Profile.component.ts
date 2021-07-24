import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({

      'Client_ID': [null, Validators.required],
      'Title': [null, Validators.required],
      'Name': [null, Validators.required],
      'Surname': [null, Validators.required],
      'Email_Address': [null, [Validators.required, Validators.pattern(emailregex)]],
      'Passport_Number': [null, Validators.required,Validators.maxLength(9)],
      'ID_Number': [null, Validators.required,Validators.maxLength(13)],
      'Contact_Number': [null, [Validators.required, Validators.maxLength(10)]],
      'Gender': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'Country': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      'Client_Status': [null],
    });
  }
 
  onSubmit(value:any)
  {

    console.log(value)
  }

}
