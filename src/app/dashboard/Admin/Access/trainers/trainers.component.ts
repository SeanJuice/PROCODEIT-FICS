import { Component, OnInit } from '@angular/core';
import { Trainee } from 'src/app/models/Trainee';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  trainers:Array<any>
  constructor( private TrainersService:TrainerService) { }

  ngOnInit() {
    this.TrainersService.getTrainers().subscribe(res=>{
      this.trainers =  res.filter(trainee => trainee.TrainerStatus_ID ==1)
  })
  }


  DisableTrainer(ID){
     this.TrainersService.DisableTrainer(ID).subscribe(res=>{
     })
  }
}