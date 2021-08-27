import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { ClientsService } from '../../Admin/services/clients.service';
import { DataService } from '../../Admin/services/DataService.service';

@Component({
  selector: 'app-send-client-task',
  templateUrl: './send-client-task.component.html',
  styleUrls: ['./send-client-task.component.scss']
})
export class SendClientTaskComponent implements OnInit {

  constructor(private data: DataService,private clientsService:ClientsService) { }
  clients:Array<Client>;

  ngOnInit() {
    this.clientsService.getClients().subscribe(res=>{
        this.clients = res
    })

  }

  Transfer(Name,Surname){
  let NameSurname =  Name +" "+ Surname
  this.data.changeMessage( NameSurname)
  }

}




