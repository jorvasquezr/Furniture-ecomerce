import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  fechaPago: string;
  salario: string;
  comisiones: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fechaPago: '01/08/2020',  salario: '$850.00', comisiones: '$50.00'},
  {fechaPago: '01/07/2020',  salario: '$800.00', comisiones: '$100.00'},
  {fechaPago: '01/06/2020',  salario: '$800.00', comisiones: '121.41'}
];

@Component({
  selector: 'app-vista-salario',
  templateUrl: './vista-salario.component.html',
  styleUrls: ['./vista-salario.component.scss']
})
export class VistaSalarioComponent implements OnInit {
  displayedColumns: string[] = ['fecha de pago', 'salario', 'comisiones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }



}
