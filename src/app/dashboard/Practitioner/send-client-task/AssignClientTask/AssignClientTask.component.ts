import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { now } from 'moment';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/dashboard/Admin/services/DataService.service';
import { ClientService } from 'src/app/dashboard/Client/services/client.service';
import { Task } from 'src/app/models/Task';
import { SharedService } from 'src/app/shared/services/shared.service';
import { PractitionerUserService } from '../../services/PractitionerUser.service';

@Component({
  selector: 'app-AssignClientTask',
  templateUrl: './AssignClientTask.component.html',
  styleUrls: ['./AssignClientTask.component.scss'],
})
export class AssignClientTaskComponent implements OnInit, OnDestroy {
  ClientID: any;
  message: string;
  subscription: Subscription;
  Tasks: Array<Task>;
  dueDate:any;
  Task: Task = {
    Description: null,
    Feedback: null,
    StartDate: null,
    DueDate: null,
    Task_ID: null,
  };
  constructor(
    private clientsService: ClientService,
    private Arouter: ActivatedRoute,
    private data: DataService,
    private sharedService:SharedService,
    private practitionerservice:PractitionerUserService
  ) {}

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(
      (message) => (this.message = message)
    );

    this.ClientID = Number(this.Arouter.snapshot.params.id);
    this.clientsService.getTasks(this.ClientID).subscribe((res) => {
      let Pack = Object.keys(res).map((index) => {
        this.Tasks = res[index];
      });
    });
  }

  getDate(date:any){
    this.Task.DueDate =  date.value;
  }

  Submit() {
  //  // this.Task.DueDate = this.sharedService.reFormatDate( Date(this.Task.DueDate));
  //   this.Task.StartDate = this.sharedService.reFormatDate(moment());
  //   if(this.sharedService.compare(this.Task.DueDate, this.Task.StartDate)==1)
  //   {
      console.log(this.Task);
      this.practitionerservice.AssignTask(this.ClientID, this.Task).subscribe(res => {
        console.log(res);
      })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
