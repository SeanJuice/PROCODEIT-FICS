import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  compare(dateTimeA, dateTimeB) {
    var momentA = moment(dateTimeA, 'DD/MM/YYYY');
    var momentB = moment(dateTimeB, 'DD/MM/YYYY');
    if (momentA > momentB) return 1;
    else if (momentA < momentB) return -1;
    else return 0;
  }
  reFormatDate(Date:any){
    const momentDate = new Date(Date); // Replace event.value with your date value
    const formattedDate = moment(momentDate).format('YYYY-MM-DD');
    return formattedDate;
  }
}
