import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Client } from 'src/app/models/Client';
import { ClientService } from '../services/client.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service'
import { ConfirmUpdateDialogComponent } from './ConfirmUpdateDialog/ConfirmUpdateDialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { PractitionerUserService } from '../../Practitioner/services/PractitionerUser.service';
import { TrainerService } from '../../Admin/services/trainer.service';
import { TraineesService } from '../../Admin/services/trainees.service';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.scss']
})
export class ProfileComponent implements OnInit {

  info:Client
  clientID =  Number(sessionStorage.getItem("User_ID"));
  formGroup: FormGroup;
  isLoaded:boolean = false;
  roleId:number;
  MissingData:any;
  showExtra = false;
  constructor(private formBuilder: FormBuilder,
     private Clientservice: ClientService,
     private Practitionerservice: PractitionerUserService,
     private trainerService: TrainerService,
     private traineeService: TraineesService,

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
      this.showExtra = true;
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
        this.MissingData =  res
        console.log(res)
        this.createForm(this.info)
        this.isLoaded =false;
      })
    }
    else if (this.roleId===4)
    {
      this.trainerService.getTrainerProfile(this.clientID).subscribe((res:any)=>{
        this.info =res;
        console.log(res)
        this.createForm(this.info)
        this.isLoaded =false;
      })
    }
    else if (this.roleId===5)
    {
      this.traineeService.getTraineeProfile(this.clientID).subscribe((res:any)=>{
        this.info =res;
        console.log(res)
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




  async onSubmit(data): Promise<void> {
    data = await this.patch(data);
    console.log("here>>>",data);
    let dialogRef = this.dialog.open(ConfirmUpdateDialogComponent, {
      width: '500px',
      height: '200px',
      data: { clientN: data, role:this.roleId}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refetch()
      console.log('The dialog was closed');
    });
  }

  patch(data) {
    if(this.roleId===2)
    {
      this.MissingData =data
    }
    else
    {
      this.MissingData.Name=data.Name
      this.MissingData.Contact_Number=data.Contact_Number
      this.MissingData.Surname=data.Surname
      this.MissingData.Email_Address=data.Email_Address
      this.MissingData.Gender=data.Gender

      delete data.Client_ID;   delete data.Client_Status;  delete data.Passport_Number
    }
    return       this.MissingData;
  }

}
