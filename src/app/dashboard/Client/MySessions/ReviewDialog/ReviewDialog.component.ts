import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from 'src/app/dashboard/Client/services/client.service';
import * as moment from 'moment';
import {
  AppDateAdapter,
  APP_DATE_FORMATS,
} from 'src/app/shared/material/fomart-datepicker';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';

@Component({
  selector: 'app-ReviewDialog',
  templateUrl: './ReviewDialog.component.html',
  styleUrls: ['./ReviewDialog.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class ReviewDialogComponent implements OnInit {

  ReviewMessage:string;
  AvailableSlots: any = [];
  session:any=this.data.data
  constructor(
    public dialogRef: MatDialogRef<ReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private clientService: ClientService,private clientservice: ClientService,) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data.data)
    this.getDateAvailability()
    this.clientService.getReviewSessionFeedback(this.data.id).subscribe(res=>{
      this.ReviewMessage =  res;
    })
  }

  getDateAvailability() {
    const momentDate = new Date(this.session.Date); // Replace event.value with your date value
    const formattedDate = moment(momentDate).format('YYYY-MM-DD');
    this.AvailableSlots = [];
    this.clientservice
      .getDateAvailability(formattedDate)
      .subscribe((res) => {
        res.forEach((dates) => {
          console.log(dates);
          this.AvailableSlots.push(dates);
          if(dates.Practitioner_ID === Number( sessionStorage.getItem('Practitioner_ID')))
            {
              this.AvailableSlots.push(dates);
            }
        });
      });
  }
  TimeChange(time) {
    let times = time.split('-');
    let timeArray = [times[0], times[1]];
    return timeArray;
  }
}
