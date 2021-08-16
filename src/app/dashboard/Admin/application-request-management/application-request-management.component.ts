import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-request-management',
  templateUrl: './application-request-management.component.html',
  styleUrls: ['./application-request-management.component.scss']
})
export class ApplicationRequestManagementComponent implements OnInit {
  content:string = "content1";
  constructor() { }

  ngOnInit() {
  }

  Change(num:number){
    this.content = "content"+num.toString();
  }
}
