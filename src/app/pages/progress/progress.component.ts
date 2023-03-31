import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
 progress1 : number = 25;
 progress2 : number = 30;

 getProgressUno(){
  return `${this.progress1}%`
 }
 getProgressDos(){
  return `${this.progress2}%`
 }
}
