
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { Error404Component } from './../shared/components/error404/error404.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from '../shared/layouts/authlayout/authlayout.component';


const routes: Routes = [
  { path: '',
   component:AuthlayoutComponent,

  children: [
          {path: 'Welcome', component: LandingPageComponent},
          {path: 'login', component: LoginComponent},
          {path: 'register', component: RegisterComponent},
          {path:'forgot-password', component: ForgotPasswordComponent},
          {path:'reset-password', component: ResetPasswordComponent},

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
