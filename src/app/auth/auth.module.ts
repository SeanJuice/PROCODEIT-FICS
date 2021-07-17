import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [ LoginComponent, RegisterComponent, ResetPasswordComponent, ForgotPasswordComponent,],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    LoginComponent, RegisterComponent, ResetPasswordComponent,ForgotPasswordComponent

  ],
  providers: [AuthService, AuthGuard],
})
export class AuthModule { }
