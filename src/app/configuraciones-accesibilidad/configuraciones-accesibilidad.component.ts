import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
