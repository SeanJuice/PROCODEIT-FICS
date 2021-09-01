import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-QuestionnaireType',
  templateUrl: './QuestionnaireType.component.html',
  styleUrls: ['./QuestionnaireType.component.scss']
})
export class QuestionnaireTypeComponent implements OnInit {

  QuestionnaireTypes: Array<any>;
  public query: any = '';

  constructor(private typeService: TypeService) {}

  ngOnInit() {
    this.typeService.GetTypes(1).subscribe((res) => {
      this.QuestionnaireTypes = res;
    });
  }
  AddType() {}

  Maintain(clientType) {}
}
