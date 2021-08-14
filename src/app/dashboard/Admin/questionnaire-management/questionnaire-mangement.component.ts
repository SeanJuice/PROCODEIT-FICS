import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../services/Questionnaire.service';

@Component({
  selector: 'app-questionnaire-mangement',
  templateUrl: './questionnaire-mangement.component.html',
  styleUrls: ['./questionnaire-mangement.component.scss']
})
export class QuestionnaireManagementComponent implements OnInit {

  QuestionsBank:Array<any> = []
  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    this.questionnaireService.ViewQuestionnaireBanks().subscribe((res:any) => {
      this.QuestionsBank = res
    })
  }

}
