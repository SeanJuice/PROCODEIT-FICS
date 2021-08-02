import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-Mytasks',
  templateUrl: './Mytasks.component.html',
  styleUrls: ['./Mytasks.component.scss']
})
export class MytasksComponent implements OnInit {
  Tasks:any;
  constructor(private clientservice:ClientService) { }

  ngOnInit() {
    this.clientservice.getTasks().subscribe(res=>{
      this.Tasks = res;
      console.log(res,"       ",this.Tasks)
    })
  }

}
