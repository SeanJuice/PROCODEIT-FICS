import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from 'src/app/dashboard/services/client.service';

@Component({
  selector: 'app-taskDialog',
  templateUrl: './taskDialog.component.html',
  styleUrls: ['./taskDialog.component.scss'],
})
export class TaskDialogComponent implements OnInit {
  selectedFile: File;
  Task_Id: number;


  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private clientService: ClientService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.Task_Id = this.data.id
  }



  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    let Task = {
      Image: this.selectedFile,
    };
    if (this.selectedFile != null) {
      this.clientService.CompleteTask(Task, this.Task_Id).subscribe((res) => {});
    }
  }
}
