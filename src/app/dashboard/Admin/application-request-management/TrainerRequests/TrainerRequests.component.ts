import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-TrainerRequests',
  templateUrl: './TrainerRequests.component.html',
  styleUrls: ['./TrainerRequests.component.scss']
})
export class TrainerRequestsComponent implements OnInit {

  trainers: Array<any>
  constructor(private trainerervice:TrainerService) { }

  ngOnInit() {
  }

  AcceptOrReject(trainee, decision){
    this.trainerervice.AcceptORejectTrainer(trainee,decision).subscribe(()=>{
      this.refreshData()
    })
  }

  refreshData(){
      this.trainerervice.getTrainerRegistrations().subscribe(res=>{
          this.trainers = res;
      })
  }
}
