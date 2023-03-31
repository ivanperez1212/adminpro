import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementers',
  templateUrl: './incrementers.component.html',
  styleUrls: ['./incrementers.component.css']
})
export class IncrementersComponent {
@Input('valor') progress: number = 50;
@Input() btnClass: string = 'btn btn-primary'

@Output() valorSalida: EventEmitter<number> = new EventEmitter

   cambiarValor(valor: number){
    if(this.progress >= 100 && valor >= 0 ){
      this.valorSalida.emit(100)
      return this.progress = 100;
    }
    if(this.progress <= 0 && valor < 0 ){
      this.valorSalida.emit(0)
      return this.progress = 0;
    }
    this.progress += valor;
    this.valorSalida.emit(this.progress)
    return this.progress; 
   } 
   onChange(nuevoValor: any ): void {
    if(nuevoValor >= 100){
    this.progress = 100;
    }else if(nuevoValor <= 0 ){
   this.progress = 0;
    }else {
      this.progress = nuevoValor
    }
    this.valorSalida.emit(this.progress)
    
   }
  
}
