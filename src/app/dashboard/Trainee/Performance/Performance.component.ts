import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
@Component({
  selector: 'app-Performance',
  templateUrl: './Performance.component.html',
  styleUrls: ['./Performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  constructor( private location: Location) { }

  ngOnInit() {
  }

  
goBack(): void {
  this.location.back();
}
}
