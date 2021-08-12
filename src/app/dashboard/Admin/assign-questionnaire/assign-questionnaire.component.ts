import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ClientsService } from '../services/clients.service';
import { QuestionnaireService } from '../services/Questionnaire.service';
import { trigger, transition, animate, style } from '@angular/animations';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-assign-questionnaire',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),

  ],
  templateUrl: './assign-questionnaire.component.html',
  styleUrls: ['./assign-questionnaire.component.scss'],
  providers: [SnackbarService]
})
export class AssignQuestionnaireComponent implements OnInit {
  constructor(
    private questionnaireService: QuestionnaireService,
    private Clientservice: ClientsService,private snackbar: SnackbarService,
  ) {}

  dropdownList = [];
  ClientList = [];
  QuestionnaireTypeList = [];
  Questions:Array<any> = [];
  dropdownSettings: IDropdownSettings = {};
  Client: any;
  questionnaireType: number;
  Steps: boolean[] = [false, false, false, false];
  isLoaded: boolean = true;
  allSelected: boolean = false;
  isLoader: boolean = false;

  ngOnInit() {
  this.LoadContents()
  }


  LoadContents(): void {
    this.questionnaireService.GetQuestionnaireType().subscribe((result) => {
      result.forEach((element) => {
        this.QuestionnaireTypeList.push(element);
      });
      console.log(this.QuestionnaireTypeList);
      this.Steps[0] = true;
      this.isLoaded = false;
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

  getClients() {
    this.Clientservice.getClients().subscribe(
      (result: any) => (this.ClientList = result)
    );
  }

  RandersQuestionnaireData(QuestionBankType_ID) {
    this.questionnaireService
      .GetQuestionsPerType(QuestionBankType_ID)
      .subscribe((result: any) => {
        this.dropdownList = result;
        this.NextStep(2);
      });
  }
  /**
   * Properties for the select
   */
  onItemSelect(item: any) {
    this.Questions.push(item.QuestionBank_ID);
  }
  onSelectAll(items: any) {
    this.Questions =  items;
    this.allSelected =true;
  }
      /*** Removes element from array */
  onDeSelect(items: any) {
    const index = this.Questions.indexOf(items.QuestionBank_ID);
    if (index > -1) {
      this.Questions.splice(index, 1);
      this.allSelected =false;
    }
  }
  onDropDownClose(){
    this.NextStep(3);
  }





  NextStep(step,client?) {


    if (step == 1) {
      this.Client =client;
      this.Steps[1] = true;
    } else if (step == 2) {
      this.Steps[2] = true;
    } else if (step == 3) {
      this.Steps[3] = true;
    }

  }

  async AssignClient(){
       this.isLoader =true;

      if(this.allSelected){
          this.questionnaireService.AssignClientQuestionnaireType(this.questionnaireType,this.Client.Client_ID).subscribe(response =>{
            this.Steps =[]= [false, false, false, false];
            this.LoadContents();
            this.isLoader =false;
            this.snackbar.openSnackBar("Questionnaire successfully loaded")
          })
      }
       else{


        this.questionnaireService.AssignClientQuestionnaireBank(this.questionnaireType,this.Client.Client_ID,this.Questions).subscribe(response =>{
          this.Steps =[]= [false, false, false, false];
          this.LoadContents();
          this.isLoader =false;
          this.snackbar.openSnackBar("Questionnaire successfully loaded")
        })
      }

  }

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

}
