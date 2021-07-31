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
    console.log()
    let form =  this.regForm.value.PurchaseDetails
   if(form.Confirmation == "true" && form.Quantity != null)
   {
    this.regForm.get('ChoosePackageDetails').get('Quantity').markAsTouched();
    this.regForm.get('ChoosePackageDetails').get('Quantity').updateValueAndValidity();
    this.regForm.get('ChoosePackageDetails').get('Confirmation').markAsTouched();
    this.regForm.get('ChoosePackageDetails').get('Confirmation').updateValueAndValidity();
   }
   else{
     alert("Payment now confirmed or quantity listed")
   }

  }

}
