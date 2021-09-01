import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationsComponent } from './administrations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReportsRoutingModule } from '../Reports/Reports-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Types_landingComponent } from './Types_landing/Types_landing.component';
import {  AdminsRoutingModule } from './administrations-routing.module';
import { ClientTypeComponent } from './ClientType/ClientType.component';
import { DocumentTypeComponent } from './DocumentType/DocumentType.component';
import { EventTypeComponent } from './EventType/EventType.component';
import { PackageTypeComponent } from './PackageType/PackageType.component';
import { QuestionnaireTypeComponent } from './QuestionnaireType/QuestionnaireType.component';
import { SessionTypeComponent } from './SessionType/SessionType.component';
import { SearchFilterPipe } from './pipe';
;

@NgModule({
  imports: [
    CommonModule,
    AdminsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [AdministrationsComponent,Types_landingComponent,ClientTypeComponent,
                  DocumentTypeComponent,EventTypeComponent,PackageTypeComponent,QuestionnaireTypeComponent,
                SessionTypeComponent,SearchFilterPipe]
})
export class AdministrationsModule { }
