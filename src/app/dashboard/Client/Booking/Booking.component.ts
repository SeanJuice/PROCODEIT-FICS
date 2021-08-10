import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { NativeDateAdapter, DateAdapter,
  MAT_DATE_FORMATS } from  '@angular/material/core'
 import { formatDate } from '@angular/common';
import { ClientService } from '../../services/client.service';

 export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};
class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return formatDate(date,'dd-MMM-yyyy',this.locale);;
      } else {
          return date.toDateString();
      }
  }
}

@Component({
  selector: 'app-Booking',
  templateUrl: './Booking.component.html',
  styleUrls: ['./Booking.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
]
})
export class BookingComponent implements OnInit {
  selected: Date | null;

  AvailableSlots: any =[]
  constructor(private clientservice:ClientService) { }

  ngOnInit() {
    console.log(this.selected)
  }


  Book(){

    const momentDate = new Date(this.selected); // Replace event.value with your date value
    const formattedDate = moment(momentDate).format("YYYY/MM/DD");


    let book ={
      Slot_ID: 1,
      Date: formattedDate,
      SessionType_ID: 1,
    }
    this.clientservice.BookSlot(book).subscribe(res=>{
      console.log(res)
    })
  }

  getDateAvailability(date){
    const momentDate = new Date(date); // Replace event.value with your date value
    const formattedDate = moment(momentDate).format("YYYY/MM/DD");

    console.log(formattedDate)
    this.clientservice.getDateAvailability(formattedDate).subscribe(res=>{
        console.log(res)
    })
  }

}
