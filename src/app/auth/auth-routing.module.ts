import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ColumnOneComponent } from './../shared/layouts/column-one/column-one.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ColumnOneComponent, pathMatch: 'full' },
  {path: 'Welcome', component: ColumnOneComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'reset-password', component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
