import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-PurchasePackages',
  templateUrl: './PurchasePackages.component.html',
  styleUrls: ['./PurchasePackages.component.scss']
})
export class PurchasePackagesComponent implements OnInit {

  constructor() { }

  registrationForm: FormGroup;

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'personalDetails': new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'mi': new FormControl(null),
        'lastname': new FormControl(null, Validators.required),
      }),
      'contactDetails': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(null)
      })
    });

  }

}
