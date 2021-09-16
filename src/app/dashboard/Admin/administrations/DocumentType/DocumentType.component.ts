import { Component, OnInit } from '@angular/core';
import { PromptComponent } from 'src/app/shared/utils/modals/prompt/prompt.component';
import { TypeService } from '../../services/type.service';
import { SimpleModalService } from 'ngx-simple-modal';
@Component({
  selector: 'app-DocumentType',
  templateUrl: './DocumentType.component.html',
  styleUrls: ['./DocumentType.component.scss'],
})
export class DocumentTypeComponent implements OnInit {
  DocumentTypes: Array<any>;
  public query: any = '';
  constructor(private typeService: TypeService,private SimpleModalService: SimpleModalService) {}


  ngOnInit() {
      this.getDocumentTypes();
  }
  getDocumentTypes() {
    this.typeService.GetTypes(3).subscribe((res) => {
      this.DocumentTypes = res;
      console.log(this.DocumentTypes);
    });
  }


  AddType() {

    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Name dialog',
      question: 'Add your Document type?: ',
        message: ''
      })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Description:message }
          this.typeService.AddDocumentType(pack).subscribe(response=>{
            this.getDocumentTypes();


          },
          error => {throw new Error('Client not added')})
      });
  }

  Maintain(clientType,Id) {
    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Document Type',
      question: 'Update Document type: ',
      message: clientType.toString()
    })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Description:message, DocumentType_ID: Id }
          this.typeService.UpdateDocumentType(pack,Id).subscribe(response=>{
            this.getDocumentTypes();
            this.typeService.success('document')
;
          }
          ,error => {throw new Error('Client not added '); console.log(error)})
      });
  }

}
