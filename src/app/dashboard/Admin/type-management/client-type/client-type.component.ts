import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-client-type',
  templateUrl: './client-type.component.html',
  styleUrls: ['./client-type.component.scss']
})
export class ClientTypeComponent implements OnInit {

  clientTypes: Array<any>
  constructor(private typeservice:TypeService) { }

  ngOnInit() {
  //   this.typeservice.getTrainers().subscribe(res=>{
  //     this.trainers = res
  //     console.log(res)
  // })
}
AddClientType(){

}

  Maintain(clientType){
   this.typeservice.AddClientType(clientType).subscribe(res=>{
     console.log("updated ")
   })
}
}
