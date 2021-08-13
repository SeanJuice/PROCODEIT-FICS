import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './Access/Access.component';
/** Access components  */
import { ClientsComponent } from './Access/clients/clients.component';
import { PractitionersComponent } from './Access/practitioners/practitioners.component';
import { TraineesComponent } from './Access/trainees/trainees.component';
import { TrainersComponent } from './Access/trainers/trainers.component';
import { ApplicationRequestManagementComponent } from './application-request-management/application-request-management.component';
import { PractitionerRequestsComponent } from './application-request-management/PractitionerRequests/PractitionerRequests.component';
import { TraineeRequestsComponent } from './application-request-management/TraineeRequests/TraineeRequests.component';
import { TrainerRequestsComponent } from './application-request-management/TrainerRequests/TrainerRequests.component';
import { AssignQuestionnaireComponent } from './assign-questionnaire/assign-questionnaire.component';
/** type management  */
import { ClientManagementComponent } from './clients/client-management/client-management.component';
import { ViewClientSessionsComponent } from './clients/client-management/ViewClientSessions/ViewClientSessions.component';
import { ClientTypeComponent } from './type-management/client-type/client-type.component';
import { DocumentTypeComponent } from './type-management/document-type/document-type.component';
import { EventTypeComponent } from './type-management/event-type/event-type.component';
import { PackageTypeComponent } from './type-management/package-type/package-type.component';
import { QuestionnaireTypeComponent } from './type-management/questionnnaire-type/questionnnaire-type.component';
import { SessionTypeComponent } from './type-management/session-type/session-type.component';
/**Questionnaire */
import { QuestionnaireManagementComponent } from './questionnaire-management/questionnaire-mangement.component';
/**User Assignment  */
import { AssignComponent } from './assign-user/assign.component';
import { PractitionerToClientComponent } from './assign-user/practitioner-to-client/practitioner-to-client.component';
import { TrainerToTraineeComponent } from './assign-user/trainer-to-trainee/trainer-to-trainee.component';

const routes: Routes = [
  {
    path: 'client-management',
    component:ClientManagementComponent,
    children:[
    ]
  },
   {
      path: 'ViewClientSession/:id',
      component:ViewClientSessionsComponent
  },
  {
    path: 'access',
    component:AccessComponent,
    children:[
              { path: '', redirectTo: 'clients', pathMatch: 'full' },
              {
                path: 'clients',
                component:ClientsComponent
              },
              {
                path: 'practitioners',
                component:PractitionersComponent
              },
              {
                path: 'trainees',
                component:TraineesComponent
              },
              {
                path:'trainers',
                component:TrainersComponent
              }
    ]
  },
  {
    path: 'type',
    component:AccessComponent,
    children:[
              { path: '', redirectTo: 'client-type', pathMatch: 'full' },
              {
                path: 'client-type',
                component:ClientTypeComponent
              },
              {
                path: 'document-type',
                component:DocumentTypeComponent
              },
              {
                path: 'event-type',
                component:EventTypeComponent
              },
              {
                path:'package-type',
                component:PackageTypeComponent
              },
              {
                path:'questionnaire-type',
                component:QuestionnaireTypeComponent
              },
              {
                path:'session-type',
                component:SessionTypeComponent
              }
    ]
  },
  {
    path: 'application-requests',
    component:ApplicationRequestManagementComponent,
    children:[
              { path: '', redirectTo: 'practitioner-requests', pathMatch: 'full' },
              {
                path: 'practitioner-requests',
                component:PractitionerRequestsComponent
              },
              {
                path: 'trainee-requests',
                component:TraineeRequestsComponent
              },
              {
                path: 'trainer-requests',
                component:TrainerRequestsComponent
              }
    ]
  },
  {
    path: 'questionnaire-management',
    component:QuestionnaireManagementComponent,
    children:[
    ]
  },
  {
    path: 'assign-questionnaire',
    component:AssignQuestionnaireComponent,

  },
  {
    path: 'audit-trail',
    component:ClientManagementComponent,

  },
  {
    path: 'assign',
    component:AssignComponent,
    children:[
              { path: '', redirectTo: 'practitioner-to-client', pathMatch: 'full' },
              {
                path: 'practitioner-to-client',
                component:PractitionerToClientComponent
              },
              {
                path: 'trainer-to-trainee',
                component:TrainerToTraineeComponent
              }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
