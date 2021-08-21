import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Client } from 'src/app/models/Client';
import { ClientService } from '../services/client.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service'
import { ConfirmUpdateDialogComponent } from './ConfirmUpdateDialog/ConfirmUpdateDialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { PractitionerUserService } from '../../Practitioner/services/PractitionerUser.service';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {

  info:Client
  isInitialised = false;
  clientID =  Number(this.storage.get("User_ID"));
  formGroup: FormGroup;
  isLoaded:boolean = true;
  roleId:number;
  constructor(private formBuilder: FormBuilder,
     private Clientservice: ClientService,
     private Practitionerservice: PractitionerUserService,
     @Inject(SESSION_STORAGE)private storage: StorageService,
     private auth:AuthService,
     public dialog: MatDialog) { }

  ngOnInit() {
    this.roleId = this.auth.Role;
    this.refetch()
  }

  refetch(){

    if(this.roleId===2)
    {
      this.Clientservice.geClientProfile(this.clientID).subscribe((res:any)=>{
        this.info =res;
        this.createForm(this.info)
        this.isLoaded =false;
      })
    }
    else if (this.roleId===3)
    {
      this.Practitionerservice.getPractitionerProfile(this.clientID).subscribe((res:any)=>{
        this.info =res;
        this.createForm(this.info)
        this.isLoaded =false;
      })
    }


  }
  createForm(info:Client) {


    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    this.formGroup = this.formBuilder.group({
      'Name': [info.Name, Validators.required],
      'Client_ID': [info.Client_ID, Validators.required],
      'Title': [info.Title, Validators.required],
      'Surname': [info.Surname, Validators.required],
      'Email_Address': [info.Email_Address, [Validators.required, Validators.pattern(emailregex)]],
      'Passport_Number': [Number(info.Passport_Number), Validators.required],
      'ID_Number': [Number(info.ID_Number), Validators.required],
      'Contact_Number': [Number(info.Contact_Number), [Validators.required]],
      'Gender': [info.Gender, [Validators.required]],
      'Country': [info.Country, [Validators.required]],
      'Client_Status': [0],
    });
  }




  onSubmit(client: Client): void {
    let dialogRef = this.dialog.open(ConfirmUpdateDialogComponent, {
      width: '500px',
      height: '200px',
      data: { clientN: client}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refetch()
      console.log('The dialog was closed');
    });
  }

}
