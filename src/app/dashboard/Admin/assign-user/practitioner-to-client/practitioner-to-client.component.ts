import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ClientService } from 'src/app/dashboard/services/client.service';
import { ClientsService } from '../../services/clients.service';
import { PractitionerService } from '../../services/practitioner.service';

@Component({
  selector: 'app-practitioner-to-client',
  templateUrl: './practitioner-to-client.component.html',
  styleUrls: ['./practitioner-to-client.component.scss'],
})
export class PractitionerToClientComponent implements OnInit {
  dropdownList = [];
  ClientList = [];
  PractitionerList = [];
  isSelected = [false,false]
  isClosed =false
  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsPractitioner: IDropdownSettings = {};

  SelectedPractitioner:any
  SelectedClient:any


  constructor(
    private clientservice: ClientsService,
    private practitionerservice: PractitionerService
  ) {}

  ngOnInit() {
    this.getClient();
    this.getPractitioner();
  }

  getClient() {
    this.clientservice.getClients().subscribe((clients) => {
      this.ClientList = clients;
      // this.ClientList.forEach((element) => {
      //   element.Name = element.Name + ' ' + element.Surname;
      //   if(element.Practitioner_ID != null) { element.isAssigned = true; }
      //   this.ClientList.push(element);
      // });
    });
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'Client_ID',
      textField: 'Name',

      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  getPractitioner() {
    this.practitionerservice.getPractitioners().subscribe((practitioners) => {
      this.PractitionerList = practitioners;
      this.PractitionerList.forEach((element) => {
        element.Name = element.Name + ' ' + element.Surname;
        this.PractitionerList.push(element);
      });
    });
    this.dropdownSettingsPractitioner = {
      singleSelection: true,
      idField: 'Practitioner_ID',
      textField: 'Name',

      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  /**
   * Properties for the select
   */
  onItemSelectP(item: any) {

      console.log(item)
      this.isSelected[0] = true;
      this.SelectedClient.push(item)
  }

  onItemSelectC(item: any) {
    console.log(item)
    this.SelectedPractitioner = item;
    this.isSelected[1] = true;
}
  /*** Removes element from array */
  onDeSelect(items: any) {}
  onDropDownClose(num?) {
    if(num==2){
      this.isClosed = true
    }

  }

  AssignPractitioner() {

   let client = this.ClientList.find(obj => obj.Client_ID == this.SelectedClient.Client_ID);
    console.log(this.SelectedPractitioner," ", this.SelectedClient[0].Client_ID,">",client)
  }
}
