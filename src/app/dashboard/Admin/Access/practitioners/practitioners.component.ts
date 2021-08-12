import { Component, OnInit } from '@angular/core';
import { Practitioner } from 'src/app/models/Practitioner';
import { PractitionerService } from '../../services/practitioner.service';

@Component({
  selector: 'app-practitioners',
  templateUrl: './practitioners.component.html',
  styleUrls: ['./practitioners.component.scss']
})
export class PractitionersComponent implements OnInit {

  practitioners:Array<Practitioner>
  constructor( private practitionerService:PractitionerService) { }

  ngOnInit() {
    this.practitionerService.getPractitioners().subscribe(res=>{
      this.practitioners = res

  })
  }


  DisablePractitioner(ID){
     this.practitionerService.DisablePractitioner(ID).subscribe(res=>{

     })
  }
}
