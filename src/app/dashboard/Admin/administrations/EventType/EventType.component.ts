import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-EventType',
  templateUrl: './EventType.component.html',
  styleUrls: ['./EventType.component.scss']
})
export class EventTypeComponent implements OnInit {

  EventTypes: Array<any>;
  public query: any = '';

  constructor(private typeService: TypeService) {}

  ngOnInit() {
    this.typeService.GetTypes(5).subscribe((res) => {
      this.EventTypes = res;
      console.log(this.EventTypes)
    });
  }
  AddType() {}

  Maintain(clientType) {}
}
