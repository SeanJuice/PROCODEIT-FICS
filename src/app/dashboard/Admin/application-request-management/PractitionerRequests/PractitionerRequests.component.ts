import { Component, OnInit } from '@angular/core';
import { PractitionerService } from '../../services/practitioner.service';

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
    this.practitionerservice.AcceptORejectPractitioner(Pract,decision).subscribe(()=>{
      this.refreshData()
    })
  }

  refreshData(){
    this.practitionerservice.getPractitionerRegistrations().subscribe(res=>{
          this.practitioners =  res;
    })
  }
}
