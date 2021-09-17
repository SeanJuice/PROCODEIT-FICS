import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Access',
  templateUrl: './Access.component.html',
  styleUrls: ['./Access.component.scss']
})
export class AccessComponent implements OnInit {

  content:string = "content1";
  constructor( private router:Router) { }

  ngOnInit() {


  }

  Change(num:number){
    this.content = "content"+num.toString();
  }

}
