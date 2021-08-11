import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentTypeComponent } from './document-type/document-type.component';
import { ClientTypeComponent } from './client-type/client-type.component';
import { EventTypeComponent } from './event-type/event-type.component';
import { PackageTypeComponent } from './package-type/package-type.component';
import { QuestionnaireTypeComponent } from './questionnnaire-type/questionnnaire-type.component';
import { SessionTypeComponent } from './session-type/session-type.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DocumentTypeComponent,ClientTypeComponent,EventTypeComponent,PackageTypeComponent,QuestionnaireTypeComponent,SessionTypeComponent]
})
export class TypeModule { }
