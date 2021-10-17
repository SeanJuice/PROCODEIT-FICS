import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../services/Questionnaire.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { PromptComponent } from 'src/app/shared/utils/modals/prompt/prompt.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-questionnaire-mangement',
  templateUrl: './questionnaire-mangement.component.html',
  styleUrls: ['./questionnaire-mangement.component.scss']
})
export class QuestionnaireManagementComponent implements OnInit {

  QuestionsBank:Array<any> = []
  public query: any = '';
  constructor(private questionnaireService: QuestionnaireService, private SimpleModalService: SimpleModalService, private location: Location) { }

  ngOnInit() {
    this.getTitles();
  }

  AddType() {

    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Titles',
      question: 'Add your Question titles?: ',
        message: ''
      })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Description:message }
          this.questionnaireService.AddQuestionnaireTitle(pack).subscribe(response=>{
            this.getTitles();

          },
          error => {throw new Error('Client not added')})
      });
  }

  Maintain(Id,Title) {
    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Document Type',
      question: 'Update Document type: ',
      message: Title.toString()
    })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Description:message, DocumentType_ID: Id }
          this.questionnaireService.MaintainQuestionnaireTitle(Id, pack).subscribe(response=>{
            this.getTitles();

          }
          ,error => {throw new Error('Client not added '); console.log(error)})
      });
  }

  getTitles() {
    this.questionnaireService.ViewQuestionnaireTitles().subscribe((res:any) => {
      this.QuestionsBank = res
    })
  }

  goBack(): void {
    this.location.back();
  }

}
