import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {
        path:'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'progress',
        loadChildren: () => import('./pages/progress/progress.module').then(m => m.ProgressModule)
      }, 
      {
        path:'grafica1',
        loadChildren: () => import('./pages/grafica1/grafica1.module').then(m => m.Grafica1Module)
      },
    ]
  },

{
  path:'login',
  loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
},
{
  path:'registrer',
  loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
},
{
  path:'nopagefound',
  loadChildren: () => import('./pages/nopagefound/nopagefound.module').then(m => m.NopagefoundModule)
},
// {
//   path:'',
//    redirectTo: '/dashboard', 
//    pathMatch: 'full'
// },
{
  path:'**',
   redirectTo: 'nopagefound' 
}   
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
