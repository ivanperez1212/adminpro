import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
   path:'dashboard',
   component: PagesComponent,
   children:[
    {
      path:'',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path:'progress',
      loadChildren: () => import('./progress/progress.module').then(m => m.ProgressModule)
    }, 
    {
      path:'grafica1',
      loadChildren: () => import('./grafica1/grafica1.module').then(m => m.Grafica1Module)
    },
   ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
