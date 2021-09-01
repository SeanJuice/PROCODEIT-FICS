import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Admin/services/DataService.service';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-send-trainee-task',
  templateUrl: './send-trainee-task.component.html',
  styleUrls: ['./send-trainee-task.component.scss']
})
export class SendTraineeTaskComponent implements OnInit {

  constructor(private data: DataService,private trainerservice:TrainerService) { }
  trainees:Array<any>;

  ngOnInit() {
    let id
    this.trainerservice.TraineesAssignedToTrainer().subscribe(res=>{  //needs a function
        this.trainees = res
    })

  }

  Transfer(Name,Surname){
  let NameSurname =  Name +" "+ Surname
  this.data.changeMessage( NameSurname)
  }

}
