import { Component, OnInit } from '@angular/core';
import { Trainee } from 'src/app/models/Trainee';
import { TraineesService } from '../../services/trainees.service';

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.scss']
})
export class TraineesComponent implements OnInit {

  trainees:Array<Trainee>
  constructor( private TraineesService:TraineesService) { }

  ngOnInit() {
    this.TraineesService.getTrainees().subscribe(res=>{
      this.trainees = res
      console.log(res)
  })
  }


  DisableTrainee(ID){
     this.TraineesService.DisableTrainee(ID).subscribe(res=>{
       console.log("disabled")
     })
  }
}