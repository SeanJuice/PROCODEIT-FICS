import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendFeedbackComponent } from './send-feedback/send-feedback.component';
import { SendTraineeTaskComponent } from './send-trainee-task/send-trainee-task.component';
import { SetAvailabilityComponent } from './set-availability/set-availability.component';

const routes: Routes = [
  // { path: 'Profile', component: ProfileComponent },
  { path: 'send-feedback', component: SendFeedbackComponent },
  { path: 'send-task-trainee', component: SendTraineeTaskComponent },
  { path: 'set-availability', component: SetAvailabilityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
