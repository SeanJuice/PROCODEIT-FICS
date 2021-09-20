import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../../Admin/services/DataService.service';
import { PractitionerUserService } from '../services/PractitionerUser.service';
import { RescheduleDialogComponent } from './rescheduleDialog/rescheduleDialog.component';

@Component({
  selector: 'app-my-slots',
  templateUrl: './my-slots.component.html',
  styleUrls: ['./my-slots.component.scss']
})
export class MySlotsComponent implements OnInit {

    MySlots: Array<any>
  constructor(
    private practitionerService:PractitionerUserService,
    public dialog: MatDialog,
    private data: DataService,
    private router: Router) { }

  ngOnInit() {
    this.getMySlots();
  }

  getMySlots() {
    this.practitionerService.getMyAvailability().subscribe(res=>{
        this.MySlots = res;
        console.log(res);
    })
  }



  Transfer(Timeslot){

    this.data.changeMessage(Timeslot);
    this.router.navigate(['/dashboard/set-availability'])
    }
}
