import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import {
  NativeDateAdapter,
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { formatDate } from '@angular/common';
import { ClientService } from '../services/client.service';
import {
  AppDateAdapter,
  APP_DATE_FORMATS,
} from 'src/app/shared/material/fomart-datepicker';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-Booking',
  templateUrl: './Booking.component.html',
  styleUrls: ['./Booking.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class BookingComponent implements OnInit {
  selectedDate: any | null;
  AvailableSlots: any = [];
  AvailabilityID: number;
  datesToHighlight:any = [];
  CurrentlyChosen: any;

  constructor(private clientservice: ClientService) {}

  ngOnInit() {
    this.getAvailableDates();
  }

  BookSlot() {
    /**
     * ?Placeholders
     */
    let book = {
      Slot_ID: this.CurrentlyChosen.TimeSlot_ID,
      Date: this.selectedDate,
      SessionType_ID: 1,
    };

    this.clientservice
      .BookSlot(book, this.AvailabilityID)
      .subscribe((res) => {});
  }

  ChooseSlot(AvailabilityID, slotInfo) {
    this.AvailabilityID = AvailabilityID;
    this.CurrentlyChosen = slotInfo;
    this.selectedDate = slotInfo.Date;
  }

  getDateAvailability(date) {
    const momentDate = new Date(date); // Replace event.value with your date value
    const formattedDate = moment(momentDate).format('YYYY-MM-DD');

    this.clientservice
      .getDateAvailability(formattedDate.toString())
      .subscribe((res) => {
        console.log(res)
        res.forEach((dates) => {
          this.AvailableSlots.push(dates);
        });
      });
  }

  getAvailableDates() {
    this.clientservice.getAvailableDates().subscribe((res) => {
      console.log(res)
      res.forEach((dates) => {

        this.datesToHighlight.push(dates.Date);
      });
    });
    console.log(this.datesToHighlight)
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());

      return highlightDate ? 'special-date' : '';
    };
  }

}
