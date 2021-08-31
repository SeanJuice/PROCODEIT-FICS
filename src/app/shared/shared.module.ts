import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { Error404Component } from './components/error404/error404.component';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { DashboardlayoutComponent } from './layouts/dashboardlayout/dashboardlayout.component';
import { MaterialModule } from './material/material.module';
import { PreLoaderComponent } from './components/pre-loader/pre-loader.component';
import { ProfileComponent } from '../dashboard/Client/Profile/Profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIdleModule } from '@ng-idle/core';
import { MatSliderModule } from '@angular/material/slider';
import { TimesetterComponent } from './layouts/dashboardlayout/Timesetter/Timesetter.component';
import { ClientAuditReportComponent } from './components/client-audit-report/client-audit-report.component';

@NgModule({
  declarations: [
    HeaderComponent,
    Error404Component,
    AuthlayoutComponent,
    DashboardlayoutComponent,
    PreLoaderComponent,
    ProfileComponent,
    TimesetterComponent,
    ClientAuditReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    NgIdleModule.forRoot(),
    MatSliderModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    MaterialModule,
    FormsModule,
    PreLoaderComponent,
    ProfileComponent,
    MatSliderModule,
    ClientAuditReportComponent
  ],
  entryComponents: [TimesetterComponent],
})
export class SharedModule {}
