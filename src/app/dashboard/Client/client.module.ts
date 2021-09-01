import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyQuestionnairesComponent } from './myQuestionnaires/myQuestionnaires.component';
import { MySessionsComponent } from './MySessions/MySessions.component';
import { MytasksComponent } from './Mytasks/Mytasks.component';
import { ProfileComponent } from './Profile/Profile.component';
import { PurchasePackagesComponent } from './PurchasePackages/PurchasePackages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewPackagesComponent } from './PurchasePackages/ViewPackages/ViewPackages.component';
import { FinalPurchaseComponent } from './PurchasePackages/FinalPurchase/FinalPurchase.component';
import { ReviewDialogComponent } from './MySessions/ReviewDialog/ReviewDialog.component';
import { ConfirmUpdateDialogComponent } from './Profile/ConfirmUpdateDialog/ConfirmUpdateDialog.component';
import { TrialQuestionnaireComponent } from './TrialQuestionnaire/TrialQuestionnaire.component';
import { RouterModule } from '@angular/router';
import { ProgressReportComponent } from './ProgressReport/ProgressReport.component';
import { BookingComponent } from './Booking/Booking.component';
import {ClientRoutingModule } from './client-routing.module'
import { TaskDialogComponent } from './Mytasks/taskDialog/taskDialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClientAuditReportComponent } from './clientAuditReport/clientAuditReport.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    ClientRoutingModule,
    FormsModule,
    MatFormFieldModule
  ],
  declarations: [
    MyQuestionnairesComponent,MySessionsComponent,MytasksComponent
    ,PurchasePackagesComponent,ViewPackagesComponent,FinalPurchaseComponent,
    TrialQuestionnaireComponent,ProgressReportComponent,BookingComponent,
    ClientAuditReportComponent,

    // ProfileComponent
    // Dialogs
    ReviewDialogComponent,ConfirmUpdateDialogComponent,TaskDialogComponent
  ]
    ,
    entryComponents:[ReviewDialogComponent,ConfirmUpdateDialogComponent,TaskDialogComponent]
})
export class ClientModule { }
