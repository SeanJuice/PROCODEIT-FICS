import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './Booking/Booking.component';
import { MyQuestionnairesComponent } from './myQuestionnaires/myQuestionnaires.component';
import { MySessionsComponent } from './MySessions/MySessions.component';
import { MytasksComponent } from './Mytasks/Mytasks.component';
import { ProfileComponent } from './Profile/Profile.component';
import { ProgressReportComponent } from './ProgressReport/ProgressReport.component';
import { PurchasePackagesComponent } from './PurchasePackages/PurchasePackages.component';
import { TrialQuestionnaireComponent } from './TrialQuestionnaire/TrialQuestionnaire.component';

const routes: Routes = [
  //clients
  {path: 'My_Questionnaires', component: MyQuestionnairesComponent},
  {path: 'Sessions', component: MySessionsComponent},
  {path: 'tasks', component: MytasksComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: 'PurchasePackage', component: PurchasePackagesComponent},
  {path: 'Trial_Questionnaire', component: TrialQuestionnaireComponent},
  {path:  'ProgressReport', component:ProgressReportComponent},
  {path: 'Booking',component:BookingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
