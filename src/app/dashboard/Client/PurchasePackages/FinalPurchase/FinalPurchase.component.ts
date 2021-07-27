import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-FinalPurchase',
  templateUrl: './FinalPurchase.component.html',
  styleUrls: ['./FinalPurchase.component.scss']
})
export class FinalPurchaseComponent implements OnInit {

  @Input() regForm: FormGroup;
  constructor() { }

  ngOnInit() {

  }

  step1Submitted() {
    this.regForm.get('personalDetails').get('firstname').markAsTouched();
    this.regForm.get('personalDetails').get('firstname').updateValueAndValidity();
    this.regForm.get('personalDetails').get('lastname').markAsTouched();
    this.regForm.get('personalDetails').get('lastname').updateValueAndValidity();
  }

}
