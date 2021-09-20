import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ExternalService } from 'src/app/shared/services/external.service';
import { AuthService } from '../../auth.service';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  formGroupOthers: FormGroup;
  ApplicationType: number;
  isClient: boolean;
  submitted = false;
  countries =[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private Authservice: AuthService,
    private external: ExternalService
  ) {}

  ngOnInit(): void {
    this.getCountries();
    this.ApplicationType = Number(
      this.activatedRoute.snapshot.params.ApplicationTypeId
    );
    if (this.ApplicationType == 1) {
      this.createClientForm();
      this.isClient = true;
    } else {
      this.createOtherForm();
    }
  }

  onSubmit(client: Client, role: number) {
    let Role = Number(role) + Number(1);
    client.Contact_Number = "+27"+ client.Contact_Number.slice(1);
    this.submitted = false;
    console.log(client);
    this.Authservice.Register(client, Role);
  }
  createOtherForm() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroupOthers = this.formBuilder.group(
      {
        Title: [null, Validators.required],
        Name: [null, Validators.required],
        Surname: [null, Validators.required],
        Contact_Number: [null, [Validators.required]],
        ID_Number: [null, Validators.required],
        Email_Address: [
          null,
          [Validators.required, Validators.pattern(emailregex)],
        ],
        Physical_Address: [null, Validators.required],
        Gender: [null, [Validators.required]],
        Password: [null, [Validators.required, this.checkPassword]],
        Confirm_Password: ['', Validators.required],
      },
      {
        validator: MustMatch('Password', 'Confirm_Password'),
      }
    );
  }
  createClientForm() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroup = this.formBuilder.group(
      {
        Title: [null, Validators.required],
        Name: [null, Validators.required],
        Surname: [null, Validators.required],
        Email_Address: [
          null,
          [Validators.required, Validators.pattern(emailregex)],
        ],
        Passport_Number: [null, [Validators.required, Validators.maxLength(9)]],
        ID_Number: [null, Validators.required],
        Contact_Number: [null, [Validators.required, Validators.maxLength(10)]],
        Gender: [null, [Validators.required]],
        Country: [null, [Validators.required]],
        Client_Status: [null],
        Password: [null, [Validators.required, this.checkPassword]],
        Confirm_Password: ['', Validators.required],
      },
      {
        validator: MustMatch('Password', 'Confirm_Password'),
      }
    );
  }

  getCountries() {
    this.external.getCountries().subscribe(countries => {
      this.countries = countries;
    })
  }
  public checkPassword(control) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }
  getErrorPassword() {
    return this.formGroup.get('Password').hasError('required')
      ? ''
      : this.formGroup.get('Password').hasError('requirements')
      ? ''
      : '';
  }
  get f() {
    return this.formGroup.controls;
  }
  get g() {
    return this.formGroupOthers.controls;
  }

  getErrorEmail() {
    return this.formGroup.get('Email_Address').hasError('required')
      ? 'Field is required'
      : this.formGroup.get('Email_Address').hasError('pattern')
      ? 'Not a valid emailaddress'
      : '';
  }
}
