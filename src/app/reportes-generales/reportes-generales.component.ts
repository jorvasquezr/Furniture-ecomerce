import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface trabajador {
  nombre: string;
  puesto: string;
  salario: string;
  sucursal: string;
}

export interface reporte {
  sucursal: string;
  ganancia: number;
  gastos: number;
  ventasPorcentaje: number;
  balance: number;
}


@Component({
  selector: 'app-reportes-generales',
  templateUrl: './reportes-generales.component.html',
  styleUrls: ['./reportes-generales.component.scss']
})
export class ReportesGeneralesComponent implements OnInit {

  private reportes : reporte[] = [
    {
      sucursal : "Cartago",
      ganancia : 1000,
      gastos: 800,
      ventasPorcentaje: 80,
      balance: 1000 - 800
    },
    {
      sucursal : "San Jose",
      ganancia : 1320,
      gastos: 945,
      ventasPorcentaje: 95,
      balance: 1320 - 945
    },
    {
      sucursal : "San Carlos",
      ganancia : 875,
      gastos: 900,
      ventasPorcentaje: 67,
      balance: 875 - 900
    },

  ]


  displayedColumns: string[] = ['sucursal', 'ganancia', 'gastos', 'ventasPorcentaje' , "balance"];
  dataSource = new MatTableDataSource(this.reportes);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

}
