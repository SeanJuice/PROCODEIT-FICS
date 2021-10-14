import { Component, OnInit } from '@angular/core';
import { PromptComponent } from 'src/app/shared/utils/modals/prompt/prompt.component';
import { TypeService } from '../../services/type.service';
import { SimpleModalService } from 'ngx-simple-modal';
@Component({
  selector: 'app-QuestionnaireType',
  templateUrl: './QuestionnaireType.component.html',
  styleUrls: ['./QuestionnaireType.component.scss']
})
export class QuestionnaireTypeComponent implements OnInit {

  QuestionnaireTypes: Array<any>;
  public query: any = '';


  constructor(private typeService: TypeService,private SimpleModalService: SimpleModalService) {}


  ngOnInit() {
      this.getQuestionnaireTypes();
  }
  getQuestionnaireTypes() {
    this.typeService.GetTypes(1).subscribe((res) => {
      this.QuestionnaireTypes = res;
    });
  }


  AddType() {

    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Questionnaire Type',
      question: 'Add Your Questionnaire Type: ',
        message: ''
      })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Description:message }
          this.typeService.AddQuestionnaireType(pack).subscribe(response=>{
            this.getQuestionnaireTypes();


          },
          error => {throw new Error('Client not added')})
      });
  }

  Maintain(Description,Id) {
    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Questionnaire Type',
      question: 'Update Questionnaire type: ',
      message: Description.toString()
    })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Description:message, QuestionBankType_ID: Id }
          this.typeService.UpdateQuestionnaireType(pack,Id).subscribe(response=>{
            this.getQuestionnaireTypes();
            this.typeService.success('questionnaire')
          }
          ,error => {throw new Error('Client not added '); console.log(error)})
      });
  }

}
