import { Component, OnInit } from '@angular/core';
import { PractitionerService } from '../../services/practitioner.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-PractitionerRequests',
  templateUrl: './PractitionerRequests.component.html',
  styleUrls: ['./PractitionerRequests.component.scss']
})
export class PractitionerRequestsComponent implements OnInit {

  practitioners:Array<any>

  constructor(private practitionerservice:PractitionerService) { }

  ngOnInit() {
   this.refreshData()
  }

  AcceptOrReject(Pract,decision){
    let tempString
    let resultPopupString
    if(decision ==1)
    {
      tempString = 'Are you sure you want to Accept this practitioner?';
      resultPopupString =  "successfully accepted!"
    }
    else
    {
      tempString = 'Are you sure you want to Accept this practitioner?';
      resultPopupString =  "successfully Rejected!"

    }

    Swal.fire({
      title: tempString,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.practitionerservice.AcceptORejectPractitioner(Pract,decision).subscribe(()=>{
          this.refreshData()
          Swal.fire(resultPopupString, '', 'info')
        })
      } else if (result.isDenied) {

      }
    })

  }

  refreshData(){
    this.practitionerservice.getPractitionerRegistrations().subscribe(res=>{
          this.practitioners =  res;
    })
  }
}
