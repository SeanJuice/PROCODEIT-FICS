import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { Error404Component } from './components/error404/error404.component';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { DashboardlayoutComponent } from './layouts/dashboardlayout/dashboardlayout.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [HeaderComponent, Error404Component, AuthlayoutComponent, DashboardlayoutComponent],
  imports: [
    CommonModule,RouterModule,MatIconModule,MatCardModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
