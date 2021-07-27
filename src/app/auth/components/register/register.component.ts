import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    formGroup: FormGroup;
    formGroupOthers: FormGroup;
    ApplicationType:Number;
    isClient:boolean
    submitted = false;

  constructor(private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.ApplicationType = Number(this.activatedRoute.snapshot.params.ApplicationTypeId);
    if(this.ApplicationType==1){
      this.createClientForm();
      this.isClient = true;
    }
    else{
        this.createOtherForm()
    }
    console.log(this.ApplicationType)
  }

;



    createOtherForm()
    {
          let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          this.formGroupOthers = this.formBuilder.group({
            'Title': [null, Validators.required],
            'Name': [null, Validators.required],
            'Surname': [null, Validators.required],
            'Contact_Number': [null, [Validators.required, Validators.maxLength(10)]],
            'ID_Number': [null, Validators.required,Validators.maxLength(13)],
            'Email_Address': [null, [Validators.required, Validators.pattern(emailregex)]],
            'Physical_Address': [null,Validators.required],
            'Password': [null, [Validators.required, this.checkPassword]],
            "Confirm_Password": ['', Validators.required],
          }, {
            validator: MustMatch('Password', 'Confirm_Password')
        });
    }
  createClientForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
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
      'Password': [null, [Validators.required, this.checkPassword]],
      "Confirm_Password": ['', Validators.required],
    }, {
      validator: MustMatch('Password', 'Confirm_Password')
  });
  }
 
  onSubmit(value:any)
  {
    if(this.isClient)
    {
      this.submitted = false;
      console.log(value)
    }
    else if(this.ApplicationType==2)
    {

    }
    else if(this.ApplicationType==3)
    {

    }
    else if(this.ApplicationType==4)
    {

    }
    
  }


  public checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }
  getErrorPassword() {
    return this.formGroup.get('Password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('Password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }
  get f() { return this.formGroup.controls; }
  get g() { return this.formGroupOthers.controls; }

  
  getErrorEmail() {
    return this.formGroup.get('Email_Address').hasError('required') ? 'Field is required' :
      this.formGroup.get('Email_Address').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('Email_Address').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }
  
}
