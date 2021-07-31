import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-PurchasePackages',
  templateUrl: './PurchasePackages.component.html',
  styleUrls: ['./PurchasePackages.component.scss']
})
export class PurchasePackagesComponent implements OnInit {

  constructor() { }

  PurchaseForm: FormGroup;

  ngOnInit(): void {
    this.PurchaseForm = new FormGroup({
      'ChoosePackageDetails': new FormGroup({
        'PackageID': new FormControl(null, Validators.required),
        'Client_ID': new FormControl(null),

      }),
      'PurchaseDetails': new FormGroup({
        'Confirmation': new FormControl(null, [Validators.required]),
        'Quantity': new FormControl(null, Validators.required),
      })
    });

  }

}
