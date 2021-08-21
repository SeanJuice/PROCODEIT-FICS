import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-availability',
  templateUrl: './set-availability.component.html',
  styleUrls: ['./set-availability.component.scss']
})
export class SetAvailabilityComponent implements OnInit {
  timesAvailable:Array<any>
  constructor() { }

  ngOnInit() {
  }

  getDateAvailableSlots(date:any){

  }
  ChooseSession(Availability_ID,slot){

  }
  BookSession(){

  }
}
