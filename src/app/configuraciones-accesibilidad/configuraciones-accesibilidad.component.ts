import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-configuraciones-accesibilidad',
  templateUrl: './configuraciones-accesibilidad.component.html',
  styleUrls: ['./configuraciones-accesibilidad.component.scss']
})
export class ConfiguracionesAccesibilidadComponent implements OnInit {

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor( private location: Location) { }

  ngOnInit(): void {
  }

  cancel(){
    this.location.back(); 
  }

}
