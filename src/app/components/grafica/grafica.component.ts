import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType} from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css'],
})
export class GraficaComponent {
 @Input() title: String = '';

 @Input('label') doughnutChartLabels: string[] = [ 'color1', 'color2', 'color223' ];
 @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 150 ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public colors = [  {    backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
    borderColor: 'black',
    pointBackgroundColor: 'white',
    pointBorderColor: 'black',
    pointHoverBackgroundColor: 'white',
  }
 
];

}


