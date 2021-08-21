import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientService } from 'src/app/dashboard/Client/services/client.service';
import { Package } from 'src/app/models/Package';

@Component({
  selector: 'app-FinalPurchase',
  templateUrl: './FinalPurchase.component.html',
  styleUrls: ['./FinalPurchase.component.scss']
})
export class FinalPurchaseComponent implements OnInit {

  @Input() regForm: FormGroup;
  constructor(private clientService:ClientService) { }

  ngOnInit() {

  }

  step1Submitted() {
    let form =  this.regForm.value.PurchaseDetails
    let form2 =  this.regForm.value.ChoosePackageDetails

   if(form.Confirmation == "true" && form.Quantity != null)
   {
     let pack = {Package_ID:form2.PackageID,Client_ID: form2.Client_ID,Quantity:form.Quantity}

    this.clientService.PurchasePackage(pack).subscribe(res=>{

    })

   }
   else{
     alert("Payment now confirmed or quantity listed")
   }

  }

}
