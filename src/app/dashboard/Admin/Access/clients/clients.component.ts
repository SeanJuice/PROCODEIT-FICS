import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Array<Client>;
  clicked = true;
  message:string;


  constructor(private clientsService:ClientsService, private router:Router) { }

  ngOnInit() {
    this.clientsService.getClients().subscribe(res=>{
        this.clients = res
    })

  }

  DisableClient(ID){
    this.clientsService.DisableClient(ID).subscribe(res=>{

    })
  }

}
