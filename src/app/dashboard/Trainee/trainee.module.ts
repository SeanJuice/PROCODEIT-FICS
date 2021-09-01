import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraineeRoutingModule } from './trainee-routing.module';
import { PerformanceComponent } from './Performance/Performance.component';
import { TraineeProfileComponent } from './trainee-profile/trainee-profile.component';;
import { BookingComponent } from './Booking/Booking.component';
import { ViewQuestionnaireComponent } from './myQuestionnaire/View-Questionnaire.component';
import { MySessionsComponent } from './MySessions/MySessions.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskDialogComponent } from './mytasks/taskDialog/taskDialog.component';




@NgModule({
  declarations: [BookingComponent,MySessionsComponent,PerformanceComponent,TraineeProfileComponent,
  ViewQuestionnaireComponent,UploadComponent,TaskDialogComponent],
  imports: [
    CommonModule,
    TraineeRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  entryComponents: [TaskDialogComponent]
})
export class TraineeModule { }
