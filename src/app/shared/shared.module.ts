import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { Error404Component } from './components/error404/error404.component';



@NgModule({
  declarations: [HeaderComponent, ColumnOneComponent, LandingPageComponent, Error404Component],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    ColumnOneComponent,HeaderComponent
  ]
})
export class SharedModule { }
