import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { PromptComponent } from 'src/app/shared/utils/modals/prompt/prompt.component';

@Component({
  selector: 'app-EventType',
  templateUrl: './EventType.component.html',
  styleUrls: ['./EventType.component.scss']
})
export class EventTypeComponent implements OnInit {

  EventTypes: Array<any>;
  public query: any = '';

  constructor(private typeService: TypeService,private SimpleModalService: SimpleModalService) {}


  ngOnInit() {
    this.getEvents()
  }
    getEvents(){
    this.typeService.GetTypes(5).subscribe((res) => {
      this.EventTypes = res;
      console.log(this.EventTypes)
    });
  }
  AddType() {

    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Name dialog',
      question: 'Add your event type?: ',
        message: ''
      })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Name:message }
          this.typeService.AddEventType(pack).subscribe(response=>{
            this.getEvents();


          },
          error => {throw new Error('Client not added')})
      });
  }

  Maintain(clientType,Id) {
    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Event Type',
      question: 'Update Event type: ',
      message: clientType.toString()
    })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Name:message, EventType_ID: Id }
          this.typeService.UpdateDocumentType(pack,Id).subscribe(response=>{
            this.getEvents();
            this.typeService.success('event')

          }
          ,error => {throw new Error('Client not added '); console.log(error)})
      });
  }

}
