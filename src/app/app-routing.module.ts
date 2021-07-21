import { DashboardlayoutComponent } from './shared/layouts/dashboardlayout/dashboardlayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthlayoutComponent } from './shared/layouts/authlayout/authlayout.component';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [


  //Dash Route
  {
    path: '',
    component: DashboardlayoutComponent  ,
   // canActivate:[AuthGuard],
    children: [

                {
                  path: 'dashboard',
                  loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
                }

              ]
  },
    //Dash Route
  {
      path: '',
      component: AuthlayoutComponent  ,
      children: [
                    {
                    path: '',
                    redirectTo: '/auth',
                    pathMatch: 'full'
                  },
                  {
                    path: 'auth',
                    loadChildren: () => import('./auth/auth-routing.module').then(m=>m.AuthRoutingModule)
                  }

                ]
    },
    {
      path: "**",
      component:Error404Component
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
