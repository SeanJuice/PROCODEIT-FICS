import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Access',
  templateUrl: './Access.component.html',
  styleUrls: ['./Access.component.scss']
})
export class AccessComponent implements OnInit {


  constructor( private router:Router) { }

  ngOnInit() {


  }

  DisableClient(ID){

  }

}
