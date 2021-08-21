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

  CurrentlyChosen: any;

  constructor(private clientservice: ClientService) {}

  ngOnInit() {}

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
        res.forEach((dates) => {
          this.AvailableSlots.push(dates);
        });
      });
  }
}
