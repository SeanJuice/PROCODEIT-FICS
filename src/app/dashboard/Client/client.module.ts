import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyQuestionnairesComponent } from './myQuestionnaires/myQuestionnaires.component';
import { MySessionsComponent } from './MySessions/MySessions.component';
import { MytasksComponent } from './Mytasks/Mytasks.component';
import { ProfileComponent } from './Profile/Profile.component';
import { PurchasePackagesComponent } from './PurchasePackages/PurchasePackages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewPackagesComponent } from './PurchasePackages/ViewPackages/ViewPackages.component';
import { FinalPurchaseComponent } from './PurchasePackages/FinalPurchase/FinalPurchase.component';
import { ReviewDialogComponent } from './MySessions/ReviewDialog/ReviewDialog.component';
import { ConfirmUpdateDialogComponent } from './Profile/ConfirmUpdateDialog/ConfirmUpdateDialog.component';
import { TrialQuestionnaireComponent } from './TrialQuestionnaire/TrialQuestionnaire.component';
import { RouterModule } from '@angular/router';
import { ProgressReportComponent } from './ProgressReport/ProgressReport.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule

  ],
  declarations: [
    MyQuestionnairesComponent,MySessionsComponent,MytasksComponent,
    ProfileComponent,PurchasePackagesComponent,ViewPackagesComponent,FinalPurchaseComponent,
    TrialQuestionnaireComponent,ProgressReportComponent,
    // Dialogs
    ReviewDialogComponent,ConfirmUpdateDialogComponent
  ]
    ,
    entryComponents:[ReviewDialogComponent,ConfirmUpdateDialogComponent]
})
export class ClientModule { }
