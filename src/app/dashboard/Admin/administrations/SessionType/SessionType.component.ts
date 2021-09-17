import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';
import { SimpleModalService } from 'ngx-simple-modal';
import { PromptComponent } from 'src/app/shared/utils/modals/prompt/prompt.component';
@Component({
  selector: 'app-SessionType',
  templateUrl: './SessionType.component.html',
  styleUrls: ['./SessionType.component.scss']
})
export class SessionTypeComponent implements OnInit {

  SessionTypeTypes: Array<any>;
  public query: any = '';
  constructor(private typeService: TypeService,private SimpleModalService: SimpleModalService) {}


  ngOnInit() {
    this.getSessions()
  }


  getSessions() {
    this.typeService.GetTypes(2).subscribe((res) => {
      this.SessionTypeTypes = res;
      console.log(res)
    });
  }
  AddType() {

    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Name dialog',
      question: 'Add your Session type?: ',
        message: ''
      })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Name:message,Description: message }
          this.typeService.AddSessionType(pack).subscribe(response=>{
            this.getSessions();


          },
          error => {throw new Error('Client not added')})
      });
  }

  Maintain(sessionType,Id) {
    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Session Type',
      question: 'Update Session type: ',
      message: sessionType

    })
      .subscribe((message:any) => {
        // We get modal result
          console.log(message);
          let pack = {Name:message.Name, SessionType_ID: Id , Description: message.Description}
          this.typeService.UpdateSessionType(pack,Id).subscribe(response=>{
            this.getSessions();
            this.typeService.success('session')

          }
          ,error => {throw new Error('Client not added '); console.log(error)})
      });
  }

}
