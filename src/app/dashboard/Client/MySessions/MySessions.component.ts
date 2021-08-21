import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Session } from 'src/app/models/Session';
import { ReviewDialogComponent } from './ReviewDialog/ReviewDialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-MySessions',
  templateUrl: './MySessions.component.html',
  styleUrls: ['./MySessions.component.scss']
})
export class MySessionsComponent implements OnInit {


   sessions:Array<Session> = [];
   ID:Number

  constructor(private Clientservice:ClientService,public dialog: MatDialog) { }

  ngOnInit() {

   this.ID = this.Clientservice.ClientID
    this.Clientservice.getSessions().subscribe(res =>{
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

}
