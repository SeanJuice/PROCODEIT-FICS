import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { Error404Component } from './components/error404/error404.component';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { DashboardlayoutComponent } from './layouts/dashboardlayout/dashboardlayout.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [HeaderComponent, Error404Component, AuthlayoutComponent, DashboardlayoutComponent],
  imports: [
    CommonModule,RouterModule,
    //Material 
    MatIconModule,MatCardModule,MatInputModule,
    MatButtonModule
  ],
  exports:[
    HeaderComponent,MatIconModule,MatCardModule,MatInputModule,
    MatButtonModule
  ]
})
export class SharedModule { }
