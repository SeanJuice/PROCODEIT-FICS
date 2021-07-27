import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ViewPackages',
  templateUrl: './ViewPackages.component.html',
  styleUrls: ['./ViewPackages.component.scss']
})
export class ViewPackagesComponent implements OnInit {

  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  step2Submitted() {
    this.regForm.get('contactDetails').get('email').markAsTouched();
    this.regForm.get('contactDetails').get('email').updateValueAndValidity();
  }

}
