import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyQuestionnairesComponent } from './Client/myQuestionnaires/myQuestionnaires.component';
import { MySessionsComponent } from './Client/MySessions/MySessions.component';
import { MytasksComponent } from './Client/Mytasks/Mytasks.component';
import { ProfileComponent } from './Client/Profile/Profile.component';
import { PurchasePackagesComponent } from './Client/PurchasePackages/PurchasePackages.component';
import { TrialQuestionnaireComponent } from './Client/TrialQuestionnaire/TrialQuestionnaire.component';
import { ProgressReportComponent } from './Client/ProgressReport/ProgressReport.component';


const routes: Routes = [
  { path: '',
   component:DashboardComponent,
  pathMatch: 'full',
  children: [
          {path: 'Dashboard', component: DashboardComponent},


    ]
  },
       //clients
         {path: 'My_Questionnaires', component: MyQuestionnairesComponent},
          {path: 'Sessions', component: MySessionsComponent},
          {path: 'tasks', component: MytasksComponent},
          {path: 'Profile', component: ProfileComponent},
          {path: 'PurchasePackage', component: PurchasePackagesComponent},
          {path: 'Profile', component: ProfileComponent},
          {path: 'Trial_Questionnaire', component: TrialQuestionnaireComponent},
          {path:  'ProgressReport', component:ProgressReportComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
