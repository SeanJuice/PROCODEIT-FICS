import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {
  content:string = "content1";
  constructor() { }

  ngOnInit() {
  }

  Change(num:number){
    this.content = "content"+num.toString();
    return this.content;
  }
}


