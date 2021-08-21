import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../Client/Profile/Profile.component';
import { ClientRequestsComponent } from './client-requests/client-requests.component';
import { PurchaseQuestionnaireComponent } from './purchase-questionnaire/purchase-questionnaire.component';
import { SetAvailabilityComponent } from './set-availability/set-availability.component';

const routes: Routes = [

  {path: 'Profile', component: ProfileComponent},
  {path: 'client-requests', component: ClientRequestsComponent},
  {path: 'purchase-questionnaire', component: PurchaseQuestionnaireComponent},
  {path: 'set-availability', component: SetAvailabilityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PractitionerRoutingModule { }
