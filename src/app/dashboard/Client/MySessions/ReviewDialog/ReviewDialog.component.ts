import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from 'src/app/dashboard/Client/services/client.service';



@Component({
  selector: 'app-ReviewDialog',
  templateUrl: './ReviewDialog.component.html',
  styleUrls: ['./ReviewDialog.component.scss']
})
export class ReviewDialogComponent implements OnInit {

  ReviewMessage:string;

  constructor(
    public dialogRef: MatDialogRef<ReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private clientService: ClientService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.clientService.getReviewSessionFeedback(this.data.id).subscribe(res=>{
      this.ReviewMessage =  res;
    })
  }

}
