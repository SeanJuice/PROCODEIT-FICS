import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ClientModule } from './Client/client.module';
import { LazyLoadScriptService } from './services/lazy-load-script.service';
import { AdminModule } from './Admin/admin.module';
import { SnackbarService } from '../shared/services/snackbar.service';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ClientModule,
    AdminModule


  ],
  providers:[LazyLoadScriptService,SnackbarService]
})
export class DashboardModule { }
