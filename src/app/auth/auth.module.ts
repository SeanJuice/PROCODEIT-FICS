import { BrowserModule } from '@angular/platform-browser';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeGuard } from './components/landing-page/home.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ LoginComponent, RegisterComponent, ResetPasswordComponent, ForgotPasswordComponent,LandingPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    LoginComponent, RegisterComponent, ResetPasswordComponent,ForgotPasswordComponent,LandingPageComponent

  ],
  providers: [AuthService, AuthGuard,HomeGuard],
})
export class AuthModule { }
