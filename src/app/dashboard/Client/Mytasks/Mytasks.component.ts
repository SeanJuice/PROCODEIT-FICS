import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from '../services/client.service';
import { TaskDialogComponent } from './taskDialog/taskDialog.component';

@Component({
  selector: 'app-Mytasks',
  templateUrl: './Mytasks.component.html',
  styleUrls: ['./Mytasks.component.scss'],
})
export class MytasksComponent implements OnInit {
  Tasks: any;
  constructor(private clientservice: ClientService, public dialog: MatDialog) {}

  ngOnInit() {
    this.clientservice.getTasks().subscribe((res) => {
      this.Tasks = res;
    });
  }



  CompleteTask(Tid,taskType): void {
    let dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: {
        id: Tid,
        taskType:taskType
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}
