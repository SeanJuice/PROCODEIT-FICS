import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ClientsService } from '../services/clients.service';
import { QuestionnaireService } from '../services/Questionnaire.service';
import { trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-assign-questionnaire',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  templateUrl: './assign-questionnaire.component.html',
  styleUrls: ['./assign-questionnaire.component.scss'],
})
export class AssignQuestionnaireComponent implements OnInit {
  constructor(
    private questionnaireService: QuestionnaireService,
    private clietservices: ClientsService
  ) {}

  dropdownList = [];
  ClientList = [];
  QuestionnaireTypeList = [];
  dropdownSettings: IDropdownSettings = {};
  Client:any;
  QuestionnaireType:number;
  Steps:boolean[] = [false,false,false,false];
  isLoaded:boolean =true;

  ngOnInit() {
    this.questionnaireService.GetQuestionnaireType().subscribe((result) => {
      result.forEach((element) => {
        this.QuestionnaireTypeList.push(element);
      });
      console.log(this.QuestionnaireTypeList);
      this.Steps[0]=true
      this.isLoaded= false
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'QuestionBank_ID',
      textField: 'Question',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  RandersQuestionnaireData(QuestionBankType_ID) {
    this.questionnaireService
      .GetQuestionsPerType(QuestionBankType_ID)
      .subscribe((result: any) => {
        this.dropdownList = result;
        this.NextStep(2)
      });
  }

  getClients() {
    this.clietservices
      .getClients()
      .subscribe((result: any) => (this.ClientList = result));
  }

  NextStep(step)
  {
    if(step ==1){
      this.Steps[1]=true;
    }
    else if(step ==2){
      this.Steps[2]=true;
    }
    else if(step ==3){
      this.Steps[3]=true;
    }
  }
}
