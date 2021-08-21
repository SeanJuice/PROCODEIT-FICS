import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ClientService } from 'src/app/dashboard/Client/services/client.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
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
  isSelected = [false, false];
  isClosed = false;
  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsPractitioner: IDropdownSettings = {};

  SelectedPractitioner: any;
  SelectedClient: any;

  constructor(
    private clientservice: ClientsService,
    private practitionerservice: PractitionerService,
    private snackbar:SnackbarService
  ) { }

  ngOnInit() {
    this.getClient();
    this.getPractitioner();
  }

  getClient() {
    this.clientservice.getClients().subscribe((clients) => {
      this.ClientList = clients;
      this.ClientList.forEach((element) => {
        element.Name = element.Name + ' ' + element.Surname;
        if (element.Practitioner_ID != null) {
          element.isAssigned = true;
        }
        this.ClientList.push(element);

        // Removes duplicates
        this.ClientList = this.ClientList.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });
      });
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
        // Removes duplicates
        this.PractitionerList = this.PractitionerList.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });
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
  onItemSelectC(item: any) {
    console.log(item);
    this.isSelected[0] = true;
    this.SelectedClient = item;
  }

  onItemSelectP(item: any) {
    console.log(item);
    this.SelectedPractitioner = item;
    this.isSelected[1] = true;
  }
  /*** Removes element from array */
  onDeSelect(items: any) { }
  onDropDownClose(num?) {
    if (num == 2) {
      this.isClosed = true;
    }
  }

  AssignPractitioner() {
    let client = this.ClientList.find(
      (obj) => obj.Client_ID == this.SelectedClient.Client_ID
    );
    console.log(
      this.SelectedPractitioner,
      ' ',
      this.SelectedClient,
      '>',
      client
    );

    this.practitionerservice.AssignPractitionerToClient(this.SelectedPractitioner.Practitioner_ID, this.SelectedClient.Client_ID).subscribe(res=>{
      console.log(res);
      this.snackbar.openSnackBar("Successfully Assigned Practitioner")
    })
  }
}
