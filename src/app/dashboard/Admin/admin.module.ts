import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientManagementComponent } from './clients/client-management/client-management.component';
import { RouterModule } from '@angular/router';
import { ViewClientSessionsComponent } from './clients/client-management/ViewClientSessions/ViewClientSessions.component';
import { AccessComponent } from './Access/Access.component';
import { AccessModule } from './Access/access.module';


@NgModule({
  declarations: [
    ClientManagementComponent,
    ViewClientSessionsComponent,
    AccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule,
    AccessModule

  ]
})
export class AdminModule { }
