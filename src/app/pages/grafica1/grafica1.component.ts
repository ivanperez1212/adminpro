import { Component } from '@angular/core';
import { ChartData} from 'chart.js';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {
   public labelsUno: string[] = [ 'Download ', 'In-Store Sales', 'Mail-Order Sales' ];
 
   public dataUno: ChartData<'doughnut'> = {
    labels: this.labelsUno,
    datasets: [
      { data: [ 350, 450, 500 ] },
    ]
  };

  public labelsDos: string[] = [ 'Download ', 'In-Store Sales', 'Mail-Order Sales' ];
 
  public dataDos: ChartData<'doughnut'> = {
   labels: this.labelsUno,
   datasets: [
     { data: [ 350, 450, 500 ] },
   ]
 };
}
