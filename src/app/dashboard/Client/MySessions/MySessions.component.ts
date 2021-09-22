import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Session } from 'src/app/models/Session';
import { ReviewDialogComponent } from './ReviewDialog/ReviewDialog.component';
import { MatDialog } from '@angular/material/dialog';
import swal from 'sweetalert2';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-MySessions',
  templateUrl: './MySessions.component.html',
  styleUrls: ['./MySessions.component.scss']
})
export class MySessionsComponent implements OnInit {


   sessions:Array<Session> = [];
   ID:Number;

   calendarOptions: CalendarOptions
  displayEvent: any;

  constructor(private Clientservice:ClientService,public dialog: MatDialog) { }

  ngOnInit() {

   this.ID = this.Clientservice.ClientID
    this.Clientservice.getSessions().subscribe(res =>{
      let data = []
      res.forEach(session =>{
          data.push({
              id:session.Session_ID,
              title: session.PackageName,
              start: session.Date,
              end: session.Date,
              extendedProps: {
                StartTime:session.Start_Time,
                EndTime: session.End_Time,
                Package:session.PackageName
              },

          })
      })
       this.sessions= res;
       this.calendarOptions = {
        timeZone: 'UTC',
        //themeSystem: 'bootstrap',
        eventClick: this.openReviewDialog.bind(this),
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },

        editable: false,
        events: data,
        selectable: true,
        eventBackgroundColor: '#3D56B2',
        eventBorderColor:'#3D56B2',

      };
    })
  }

  openReviewDialog(arg): void {
    let dialogRef = this.dialog.open(ReviewDialogComponent, {
      width: '500px',
      data: { name: arg.event._def.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      swal.fire({
        text: 'Event Title! ' + arg.event._def.Package,
        icon: 'success'
      });
    });
  }

  clickButton(model: any) {
    this.displayEvent = model;
    console.log(model)
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
    console.log(model)
  }

  handleEventClick(arg) {
    swal.fire({
        text: 'Event Title! ' + arg.event._def.title,
        icon: 'success'
      });
  }

  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

  dayClick(event) {
    console.log('dayClick', event);
  }

}
