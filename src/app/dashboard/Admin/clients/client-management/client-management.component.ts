import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/Client';
import { ClientsService } from '../../services/clients.service';
import { DataService } from '../../services/DataService.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent implements OnInit {

  clients: Array<Client>;
  clicked = true;
  message:string;
  subscription: Subscription;

  constructor(private clientsService:ClientsService, private router:Router, private Arouter:ActivatedRoute,private data: DataService) { }

  ngOnInit() {
    this.clientsService.getClients().subscribe(res=>{
        this.clients = res
        console.log(res)
    })

  }

  Transfer(Name,Surname){
  this.clicked = false;
  let NameSurname =  Name +" "+ Surname
  this.data.changeMessage( NameSurname)
    //this.router.navigate(["./ViewClientSession",clientID])
    // this.router.navigateByUrl(`../ViewClientSession/${clientID}`)
  }

}