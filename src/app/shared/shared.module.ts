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
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, Error404Component,
    AuthlayoutComponent, DashboardlayoutComponent,
    PreLoaderComponent,ProfileComponent],
  imports: [
    CommonModule,RouterModule,MaterialModule,ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    MaterialModule,
    PreLoaderComponent,
    ProfileComponent
  ],


})
export class SharedModule { }
