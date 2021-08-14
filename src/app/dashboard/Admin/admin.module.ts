import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientManagementComponent } from './clients/client-management/client-management.component';
import { RouterModule } from '@angular/router';
import { ViewClientSessionsComponent } from './clients/client-management/ViewClientSessions/ViewClientSessions.component';
import { AccessComponent } from './Access/Access.component';
import { AccessModule } from './Access/access.module';
import { TypeManagementComponent } from './type-management/type-management.component';
import { TypeModule } from './type-management/type.module';
import { ApplicationRequestsModule } from './application-request-management/application-requests.module';
import { ApplicationRequestManagementComponent } from './application-request-management/application-request-management.component';
import { AssignQuestionnaireComponent } from './assign-questionnaire/assign-questionnaire.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { QuestionnaireManagementComponent } from './questionnaire-management/questionnaire-mangement.component';
import { AssignComponent } from './assign-user/assign.component';
import { PractitionerToClientComponent } from './assign-user/practitioner-to-client/practitioner-to-client.component';
import { TrainerToTraineeComponent } from './assign-user/trainer-to-trainee/trainer-to-trainee.component';


@NgModule({
  declarations: [
    ClientManagementComponent,
    ViewClientSessionsComponent,
    AccessComponent,
    TypeManagementComponent,
    ApplicationRequestManagementComponent,
    AssignQuestionnaireComponent,
    QuestionnaireManagementComponent,
    AssignComponent,
    PractitionerToClientComponent,
    TrainerToTraineeComponent
  ],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot(),
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule,
    AccessModule,
    TypeModule,
    ApplicationRequestsModule,
    MatSnackBarModule


  ]
})
export class AdminModule { }
