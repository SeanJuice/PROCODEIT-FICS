import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-SessionType',
  templateUrl: './SessionType.component.html',
  styleUrls: ['./SessionType.component.scss']
})
export class SessionTypeComponent implements OnInit {

  SessionTypeTypes: Array<any>;
  public query: any = '';

  constructor(private typeService: TypeService) {}

  ngOnInit() {
    this.typeService.GetTypes(2).subscribe((res) => {
      this.SessionTypeTypes = res;
      console.log(res)
    });
  }
  AddType() {}

  Maintain(clientType) {}
}
