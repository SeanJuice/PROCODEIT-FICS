import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './Access/Access.component';
import { ClientsComponent } from './Access/clients/clients.component';
import { PractitionersComponent } from './Access/practitioners/practitioners.component';
import { TraineesComponent } from './Access/trainees/trainees.component';
import { TrainersComponent } from './Access/trainers/trainers.component';
import { ClientManagementComponent } from './clients/client-management/client-management.component';
import { ViewClientSessionsComponent } from './clients/client-management/ViewClientSessions/ViewClientSessions.component';

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
