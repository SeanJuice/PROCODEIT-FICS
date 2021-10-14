import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { ReviewDialogComponent } from './ReviewDialog/ReviewDialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TraineeService } from '../services/trainee.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-MySessions',
  templateUrl: './MySessions.component.html',
  styleUrls: ['./MySessions.component.scss']
})
export class MySessionsComponent implements OnInit {

     sessions:Array<Session> = [];
     ID:Number

    constructor( private location: Location,private traineeService:TraineeService,public dialog: MatDialog) { }

    ngOnInit() {

      this.traineeService.getSessions().subscribe(res =>{
         this.sessions= res;

      })
    }

    openReviewDialog(id): void {
      let dialogRef = this.dialog.open(ReviewDialogComponent, {
        width: '500px',
        data: { name: id}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    goBack(): void {
      this.location.back();
    }
  }
