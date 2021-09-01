import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-DocumentType',
  templateUrl: './DocumentType.component.html',
  styleUrls: ['./DocumentType.component.scss'],
})
export class DocumentTypeComponent implements OnInit {
  DocumentTypes: Array<any>;
  public query: any = '';
  constructor(private typeService: TypeService) {}

  ngOnInit() {
    this.typeService.GetTypes(3).subscribe((res) => {
      this.DocumentTypes = res;
      console.log(this.DocumentTypes);
    });
  }
  AddType() {}

  Maintain(clientType) {}
}
