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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  declarations: [HeaderComponent, Error404Component, AuthlayoutComponent, DashboardlayoutComponent,],
  imports: [
    CommonModule,RouterModule,
    //Material
    MatIconModule,MatCardModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,MatSelectModule,
    MatStepperModule,MatProgressBarModule,MatDialogModule,
    MatChipsModule
  ],
  exports:[
    HeaderComponent,
    // MATERIAL
    MatIconModule,MatCardModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,MatSelectModule,MatStepperModule,
    MatProgressBarModule,MatDialogModule,MatChipsModule
  ]
})
export class SharedModule { }
