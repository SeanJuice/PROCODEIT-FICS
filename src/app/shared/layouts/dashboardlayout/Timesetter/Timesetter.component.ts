import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Timesetter',
  templateUrl: './Timesetter.component.html',
  styleUrls: ['./Timesetter.component.scss']
})
export class TimesetterComponent implements OnInit {
  value = 0;
  constructor(
    public dialogRef: MatDialogRef<TimesetterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {}

  onNoClick(): void {
    this.dialogRef.close();

  }

  ngOnInit() {
  }

}
