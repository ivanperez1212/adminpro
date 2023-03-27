import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [

{
  path:'nopagefound',
  loadChildren: () => import('./nopagefound/nopagefound/nopagefound.module').then(m => m.NopagefoundModule)
},
{
  path:'',
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
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
