import { Component, OnInit } from '@angular/core';
import { PromptComponent } from 'src/app/shared/utils/modals/prompt/prompt.component';
import { TypeService } from '../../services/type.service';
import { SimpleModalService } from 'ngx-simple-modal';
@Component({
  selector: 'app-PackageType',
  templateUrl: './PackageType.component.html',
  styleUrls: ['./PackageType.component.scss']
})
export class PackageTypeComponent implements OnInit {

  PackageTypes: Array<any>;
  public query: any = '';

  constructor(private typeService: TypeService,private SimpleModalService: SimpleModalService) {}
  ngOnInit() {

    this.getPackagesTypes();
  }
  getPackagesTypes() {
    this.typeService.GetTypes(4).subscribe((res) => {
      this.PackageTypes = res;
      console.log(this.PackageTypes)
    });
  }
  AddType() {

    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Package Type',
      question: 'Add Your Package Type: ',
        message: ''
      })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Name:message }
          this.typeService.AddPackageType(pack).subscribe(response=>{
            this.getPackagesTypes()

          },
          error => {throw new Error('Client not added')})
      });
  }

  Maintain(PackageType,Id) {
    this.SimpleModalService.addModal(PromptComponent, {
      title: 'Package Type',
      question: 'Update Package type: ',
      message: PackageType.toString()
    })
      .subscribe((message) => {
        // We get modal result
          console.log(message);
          let pack = {Name:message, PackageType_ID: Id }
          this.typeService.UpdatePackageType(pack,Id).subscribe(response=>{
            this.getPackagesTypes()
            console.log(response);
          }
          ,error => {throw new Error('Client not added '); console.log(error)})
      });
  }


  delete(id) {
    this.typeService.RemovePackageType(id).subscribe(res=>{
      console.log(res);
      this.getPackagesTypes();
    })
  }
}
