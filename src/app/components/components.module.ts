import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IncrementersComponent } from './incrementers/incrementers.component';
import { GraficaComponent } from './grafica/grafica.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    IncrementersComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports:[
    IncrementersComponent,
    GraficaComponent
  ]
})
export class ComponentsModule { }
