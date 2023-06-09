import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';


import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent
  ],
  exports:[
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    SharedModule,
   
  ]
})
export class PagesModule { }
