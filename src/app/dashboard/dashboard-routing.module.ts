import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoleGuard } from '../auth/dashboard-role.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
    children: [{ path: 'Dashboard', component: DashboardComponent }],
  },
  {
    path: '',
    loadChildren: () =>
      import('./Admin/admin-routing.module').then((m) => m.AdminRoutingModule),
    canActivate: [DashboardRoleGuard],
    data: { roles: [1] },
  },
  {
    path: '',
    loadChildren: () =>
      import('./Client/client-routing.module').then(
        (m) => m.ClientRoutingModule
      ),
    canActivate: [DashboardRoleGuard],
    data: { roles: [2] }, //a sends this data to Auth guard
  },
  {
    path: '',
    loadChildren: () =>
      import('./Practitioner/practitioner-routing.module').then((m) => m.PractitionerRoutingModule),
    canActivate: [DashboardRoleGuard],
    data: { roles: [3] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
